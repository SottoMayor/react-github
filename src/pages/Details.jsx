import React from 'react';
import { Route, Routes, useLoaderData } from 'react-router-dom';
import ShowReposController from '../components/Details/ShowReposController';
import UserDetails from '../components/Details/UserDetails';
import Repos from '../pages/Repos';
import { getUser } from '../util/api';

const USERS = [
    { identifier: 'ID', value: '66526913' },
    { identifier: 'User', value: 'SottoMayor' },
    { identifier: 'Created at', value: '2020-06-06' },
];

const Details = () => {
    

    const userData = useLoaderData();

    return (
        <>
            <UserDetails
                avatar="https://avatars.githubusercontent.com/u/66526913?v=4"
                userInfoArray={USERS}
            />

            <div className="my-8 flex justify-center">
                <ShowReposController user='SottoMayor'/>
            </div>

            <Routes>
                <Route path="/repos" element={<Repos />} />
            </Routes>
        </>
    );
};

export const detailsLoader = async ({ params }) => {
    const { username } = params;

    return getUser(username);
};

export default Details;
