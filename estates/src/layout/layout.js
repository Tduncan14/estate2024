
import React from 'react'
import Homepage from '../routes/Home/Homepage';
import Navbar from '../components/Navbar/navbar';
import './layout.scss';
import { Outlet } from 'react-router-dom';

const layout = () => {
    return (
        <div className="layout">
            <div className="navbar">
                <Navbar />
            </div>
            <div className="content">
                <Outlet />
            </div>
        </div>
    )
}

export default layout
