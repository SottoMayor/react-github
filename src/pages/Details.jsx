import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Repos from '../pages/Repos';

const Details = () => {
    return (
        <>
            <div>Details</div>
            <Routes>
                <Route path="/repos" element={<Repos />} />
            </Routes>
        </>
    );
};

export default Details;
