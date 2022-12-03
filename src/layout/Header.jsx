import React from 'react';
import { BsGithub } from 'react-icons/bs'

const Header = () => {
  return (
    <header className="py-4 px-[2%] flex items-center flex-col md:justify-between md:flex-row bg-secondary ">
        <BsGithub color="white" className="mb-2 md:mb-0" size={38}/>
        <h1 className="text-white text-2xl">React GitHub</h1>
    </header>
  )
}

export default Header