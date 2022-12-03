import React from 'react';
import UserCard from '../components/Home/UserCard';
import PaginationButton from '../components/UI/PaginationButton';

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
            <section className="flex items-center justify-center">
                <PaginationButton>1</PaginationButton>
                <PaginationButton>2</PaginationButton>
            </section>
        </>
    );
};

export default Home;
