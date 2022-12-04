import React from 'react';
import { Route, Routes, useLoaderData } from 'react-router-dom';
import ShowReposController from '../components/Details/ShowReposController';
import UserDetails from '../components/Details/UserDetails';
import Repos, { reposLoader } from '../pages/Repos';
import { getUser } from '../util/api';

const Details = () => {

    const userData = useLoaderData();
    const parsedUser = JSON.parse(userData.user)

    const USER = [
        { identifier: 'ID', value: parsedUser.id },
        { identifier: 'User', value: parsedUser.login },
        { identifier: 'Created at', value: parsedUser.created_at?.slice(0, 10) },
    ];

    return (
        <>
            <UserDetails
                avatar={parsedUser.avatar_url}
                userInfoArray={USER}
            />

            <div className="my-8 flex justify-center">
                <ShowReposController user={parsedUser.login}/>
            </div>

            <Routes>
                <Route path="/repos" element={<Repos />} loader={reposLoader}/>
            </Routes>
        </>
    );
};

export const detailsLoader = async ({ params }) => {
    const { username } = params;

    return getUser(username);
};

export default Details;
