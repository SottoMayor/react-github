import React from 'react';
import PaginationButton from '../UI/PaginationButton';

const PaginationBox = (props) => {
    return (
        <section className="flex items-center justify-center">
            <PaginationButton>{props.previous}</PaginationButton>
            <PaginationButton>{props.next}</PaginationButton>
        </section>
    );
};

export default PaginationBox;
