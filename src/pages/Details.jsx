import React from 'react';
import { Route, Routes, useLoaderData } from 'react-router-dom';
import Repos from '../pages/Repos';
import { getUser } from '../util/api';

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

                <div className="flex justify-evenly items-center flex-col md:flex-row">
                    <h1 className="text-2xl">
                        ID: <strong>66526913</strong>
                    </h1>
                    <h1 className="text-2xl">
                        User: <strong>SottoMayor</strong>
                    </h1>
                    <h1 className="text-2xl">
                        Created at: <strong>2020-06-06</strong>
                    </h1>
                </div>

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
