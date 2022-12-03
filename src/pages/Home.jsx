import React from 'react';
import UserCard from '../components/Home/UserCard';
import PaginationBox from '../components/Home/PaginationBox';

const USERS = [
    { id: 1, login: 'SottoMayor' },
    { id: 2, login: 'John Doe' },
    { id: 3, login: 'Mambo' },
    { id: 4, login: 'Chocolate' },
    { id: 5, login: 'Funny User' },
];

const Home = () => {
    return (
        <>
            {USERS.map((user) => (
                <UserCard {...user} />
            ))}
            
            <PaginationBox previous='1' next='2'/>
        </>
    );
};

export default Home;
