import React from 'react';
import { Route, Routes, useLoaderData } from 'react-router-dom';
import Repos from '../pages/Repos';
import { getUser } from '../util/api';

const Details = () => {

    const userData = useLoaderData()
    

    return (
        <>
            <div>Details</div>
            <Routes>
                <Route path="/repos" element={<Repos />} />
            </Routes>
        </>
    );
};

export const detailsLoader = async ({params}) => {
   const { id: userId } = params;

    return getUser(userId)
}

export default Details;
