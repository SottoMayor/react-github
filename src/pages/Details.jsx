import React from 'react';
import { Route, Routes, useLoaderData } from 'react-router-dom';
import UserDetails from '../components/Details/UserDetails';
import Repos from '../pages/Repos';
import { getUser } from '../util/api';
import { useState } from 'react';
import TransitionPageButton from '../components/UI/TransitionPageButton';

const USERS = [
    { identifier: 'ID', value: '66526913' },
    { identifier: 'User', value: 'SottoMayor' },
    { identifier: 'Created at', value: '2020-06-06' },
];

const Details = () => {
    const [showRepos, setShowRepos] = useState(false);

    const userData = useLoaderData();

    const showReposHandler = () => {
        setShowRepos((prevState) => !prevState);
    };

    let showReposContent;
    if (showRepos) {
        showReposContent = (
            <TransitionPageButton
                text="Ocultar repositorios de SottoMayor"
                onClick={showReposHandler}
                path=""
            />
        );
    } else {
        showReposContent = (
            <TransitionPageButton
                text="Ver repositórios de SottoMayor"
                onClick={showReposHandler}
                path="repos"
            />
        );
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
