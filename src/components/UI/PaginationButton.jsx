import React from 'react';
import { Link } from 'react-router-dom';

const PaginationButton = (props) => {

    const { disabled } = props;

    let classes = 'bg-tertiary text-primary cursor-pointer'
    if(disabled){
        classes = 'bg-gray text-black cursor-not-allowed'
    }

    return (
        <Link to={props.link}
            className={`hover:text-white mx-2 p-2 rounded-full w-10 font-bold transition-all duration-200 ${classes}`}
        >
            {props.children}
        </Link>
    );
};

export default PaginationButton;
