import React from 'react';
import { Link } from 'react-router-dom';

const PaginationButton = (props) => {
    return (
        <Link to={props.link}
            className="bg-tertiary text-primary hover:text-white mx-2 p-2 rounded-full w-10 font-bold transition-all cursor-pointer duration-200"
        >
            {props.children}
        </Link>
    );
};

export default PaginationButton;
