import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const Main = () => {
  return (
    <main>
        <Header/>
        <section className='py-4 px-[2%] bg-primary min-h-screen text-white'>
            <Outlet/>
        </section>
    </main>
  )
}

export default Main