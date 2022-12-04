import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ListRepos from '../components/Repos/ListRepos';
import { getRepos } from '../util/api';

const Repos = () => {
    const reposData = useLoaderData();
    const parsedRepositories = JSON.parse(reposData?.repositories);
    return (
        <div className="flex justify-center items-center">
            <ListRepos repos={parsedRepositories} />
        </div>
    );
};

export const reposLoader = ({ params }) => {
    console.log(params);

    const { username } = params;

    return getRepos(username);
};

export default Repos;
