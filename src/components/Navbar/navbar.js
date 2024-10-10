import React from 'react'
import './navbar.scss'
import logo from '../../images/logo.png'
import Menu from '../../images/menu.png';


const Navbar = () => {



    return (
        <nav>
            <div class="left">
                <a class="logo" href="/">
                    <img src={logo} alt="" />
                    <span>State</span>
                </a>

                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Contact</a>
                <a href="/">Agents</a>
            </div>
            <div class="right">
                <a href="/">Sign In</a>
                <a class="register" href="/"> Sign Up </a>
                <div className="menuIcon">
                    <img src={Menu} alt="" />
                </div>



                <div className="menu">
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