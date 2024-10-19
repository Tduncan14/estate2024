import React from 'react'
import './Homepage.scss'
import bg from '../../images/bg.png'
import Searchbar from '../../components/Navbar/searchbar/Searchbar'

const Homepage = () => {
    return (
        <div class="homePage">
            <div className="textContainer">
                <div class="wrapper">
                    <h1 class="title ">Find Real Estate & Get Your Dream Place
                    </h1>

                    <p>
                        Selling a real estate property effectively requires a well-planned strategy. First, start by pricing the property correctly through a market analysis to ensure it’s competitive yet realistic.
                    </p>

                    <Searchbar />


                    <div className="boxes">
                        <div className="box">
                            <h1>16+</h1>
                            <h2>Years of Experience</h2>
                        </div>
                        <div className="box">
                            <h1>200</h1>
                            <h2>Award Gained</h2>
                        </div>
                        <div className="box">
                            <h1>2000+</h1>
                            <h2>Property Ready</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="imgContainer">
                <img src={bg} />
            </div>

        </div>
    )
}

export default Homepage
