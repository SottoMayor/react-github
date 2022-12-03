import React from 'react';
import { BsArrowRight } from 'react-icons/bs'

const UserCard = (props) => {
  return (
    <section className='flex justify-between items-center max-w-[540px] w-full mx-auto border-tertiary border-2 rounded px-[2%] py-5 mb-9 hover:border-white transition-all duration-200 cursor-default'>
        <h1>ID: # {props.id}</h1>
        <h1>{props.login}</h1>
        <BsArrowRight cursor='pointer'/>
    </section>
  )
}

export default UserCard