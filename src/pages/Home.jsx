import React from 'react';
import UserCard from '../components/Home/UserCard';
import PaginationBox from '../components/Home/PaginationBox';
import { getUsers } from '../util/api';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const userData = useLoaderData();
    const {
        users,
        previous_page: previousPage,
        next_page: nextPage,
    } = userData;

    const parsedUsers = JSON.parse(users);

    return (
        <>
            {parsedUsers.map((user) => (
                <UserCard id={user.id} login={user.login} />
            ))}

            <PaginationBox previous={previousPage} next={nextPage} />
        </>
    );
};

export const homeLoader = async ({ request }) => {
    const sinceQuery = request.url.split('?')[1];
    const sinceValue = sinceQuery?.split('=')[1];

    return getUsers(sinceValue);
};

export default Home;
