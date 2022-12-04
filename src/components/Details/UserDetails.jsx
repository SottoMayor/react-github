import React from 'react';
import UserDescriptionContainer from './UserDescriptionContainer';

const UserDetails = (props) => {
  return (
    <section>
                <figure className="mx-auto max-w-[300px] border-tertiary border-4 rounded-full mb-10 md:mb-24">
                    <img
                        className="w-full rounded-full p-3"
                        src={props.avatar}
                        alt="avatar"
                    />
                </figure>

                <UserDescriptionContainer userInfoArray={props.userInfoArray}/>

                <div className="bg-tertiary py=1 w-full h-1 rounded"></div>
            </section>
  )
}

export default UserDetails