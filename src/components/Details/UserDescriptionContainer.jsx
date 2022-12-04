import React from 'react';
import KeyValueParagraph from '../UI/KeyValueParagraph';

const UserDescriptionContainer = (props) => {
    return (
        <div className="flex justify-evenly items-center flex-col md:flex-row">
            {props.userInfoArray.map((info) => (
                <KeyValueParagraph
                    key={info.identifier}
                    identifier={info.identifier}
                    value={info.value}
                />
            ))}
        </div>
    );
};

export default UserDescriptionContainer;
