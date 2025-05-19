import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar/>
                this is main layout 
                <div className="">
                    <Outlet/>
                </div>
                <Footer/>
        </div>
    );
};

export default MainLayout;