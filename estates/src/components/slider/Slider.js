import React from 'react'
import './Slider.scss'
import arrow from '../../images/arrow.png';



const Slider = ({ images }) => {
    return (
        <div className="slider">
            <div className="fullSlider">
                <img src={arrow} />
                <div className="imgContainer">
                    <img src={images[0]} />
                </div>
                <img src={arrow} />

            </div>
            <div className="bigImage">
                <img src={images[0]} alt='' />

            </div>

            <div className="smallImages">
                {
                    images.slice(1).map((image, index) => (
                        <img src={image} alt="" key={index} />
                    ))
                }
            </div>

        </div>
    )
}

export default Slider
