import React from 'react';
import { Route, Routes, useLoaderData } from 'react-router-dom';
import UserDetails from '../components/Details/UserDetails';
import Repos from '../pages/Repos';
import { getUser } from '../util/api';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const USERS = [
    { identifier: 'ID', value: '66526913' },
    { identifier: 'User', value: 'SottoMayor' },
    { identifier: 'Created at', value: '2020-06-06' },
];

const Details = () => {
    const [showRepos, setShowRepos] = useState(false);

    const userData = useLoaderData();

    const showReposHandler = () => {
        setShowRepos(prevState => !prevState)
    }

    let showReposContent;
    if (showRepos) {
        showReposContent = (
            <Link onClick={showReposHandler} to={``}>Ocultar repositorios de SottoMayor</Link>
        );
    }else{
        showReposContent = (
            <Link onClick={showReposHandler} to={`repos`}>Ver repositórios de SottoMayor</Link>
        )
    }

    return (
        <>
            <UserDetails
                avatar="https://avatars.githubusercontent.com/u/66526913?v=4"
                userInfoArray={USERS}
            />
            
            {showReposContent}

            <Routes>
                <Route path="/repos" element={<Repos />} />
            </Routes>
        </>
    );
};

export const detailsLoader = async ({ params }) => {
    const { id: userId } = params;

    return getUser(userId);
};

export default Details;
