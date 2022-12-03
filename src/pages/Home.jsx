import React from 'react';
import UserCard from '../components/Home/UserCard';

const Home = () => {
    return (
        <>
            <UserCard id='1' login='SottoMayor'/>
            <UserCard id='2' login='John Doe'/>
        </>
    );
};

export default Home;
