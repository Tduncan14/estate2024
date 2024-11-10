import React, { useState } from 'react'
import './navbar.scss'
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom';
import Menu from '../../images/menu.png';
import { userData } from '../../lib/dummydata';

const Navbar = () => {


    const [open, setOpen] = useState(false)
    const user = true;



    return (
        <nav>
            <div class="left">
                <a class="logo" href="/">
                    <img src={logo} alt="" />
                    <span>State</span>
                </a>

                <Link to="/profile">Home</Link>
                <Link to="/1">About</Link>
                <Link to="/">Contact</Link>
                <Link to="/">Agents</Link>
            </div>
            <div class="right">
                {user ? (<div className="user">
                    <img src={userData.img} alt="userProfile" />
                    <span>{userData.name}</span>
                    <Link className="profile" to="/profile">
                        <div className="notification">3</div>
                        <span>Profile</span>
                    </Link>
                </div>) : (<><a href="/">Sign In</a>
                    <a class="register" href="/"> Sign Up </a>
                    <div className="menuIcon">
                        <img src={Menu} alt="" onClick={() => setOpen((prev) => !prev)} />
                    </div> </>)

                }



                <div className={open ? "menu active" : "menu"}>
                    <a href="">Home</a>
                    <a href="">About</a>
                    <a href="">Contact</a>
                    <a href="">Agents</a>
                    <a href="">Sign in</a>
                    <a href="">Sign up</a>
                </div>

            </div>


        </nav>

    )






}



export default Navbar