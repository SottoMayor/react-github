import React from 'react';

const KeyValueParagraph = (props) => {
    return (
        <h1 className="text-2xl">
            {props.identifier}: <strong>{props.value}</strong>
        </h1>
    );
};

export default KeyValueParagraph;
