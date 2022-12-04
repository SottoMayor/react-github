import React from 'react';
import { Link } from 'react-router-dom';

const TransitionPageButton = (props) => {
    return (
        <Link
            className="bg-tertiary text-primary cursor-pointer hover:text-white p-2 rounded-full font-bold transition-colors duration-200"
            onClick={props.onClick}
            to={props.path}
        >
            {props.text}
        </Link>
    );
};

export default TransitionPageButton;
