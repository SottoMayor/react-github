import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const Main = () => {
  return (
    <main>
        <Header/>
        <section>
            <Outlet/>
        </section>
    </main>
  )
}

export default Main