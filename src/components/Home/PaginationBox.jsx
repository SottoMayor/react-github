import React from 'react';
import PaginationButton from '../UI/PaginationButton';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';

const PaginationBox = (props) => {
    return (
        <section className="flex items-center justify-center">
            <PaginationButton
                disabled
                link={`${props.previous}`}
            >
                <BsArrowLeft size={23} />
            </PaginationButton>
            <PaginationButton
                link={`${props.next}`}
            >
                <BsArrowRight size={23}/>
            </PaginationButton>
        </section>
    );
};

export default PaginationBox;
