import React from 'react';

const PaginationButton = (props) => {
    return (
        <button
            type={props.type || 'button'}
            onclick={props.onclick}
            className="bg-tertiary text-primary hover:text-white mx-2 p-2 rounded-full w-10 font-bold transition-all cursor-pointer duration-200 cursor-default"
        >
            {props.children}
        </button>
    );
};

export default PaginationButton;
