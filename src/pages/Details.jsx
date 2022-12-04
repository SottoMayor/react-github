import React from 'react';
import { Route, Routes, useLoaderData } from 'react-router-dom';
import UserDescriptionContainer from '../components/Details/UserDescriptionContainer';
import Repos from '../pages/Repos';
import { getUser } from '../util/api';

const USERS = [
    {identifier: 'ID', value: '66526913'},
    {identifier: 'User', value: 'SottoMayor'},
    {identifier: 'Created at', value: '2020-06-06'},
]

const Details = () => {
    const userData = useLoaderData();

    return (
        <>
            <section>
                <figure className="mx-auto max-w-[300px] border-tertiary border-4 rounded-full mb-10 md:mb-24">
                    <img
                        className="w-full rounded-full p-3"
                        src="https://avatars.githubusercontent.com/u/66526913?v=4"
                        alt="avatar"
                    />
                </figure>

                <UserDescriptionContainer userInfoArray={USERS}/>

                <div className="bg-tertiary py=1 w-full h-1 rounded"></div>
            </section>

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
