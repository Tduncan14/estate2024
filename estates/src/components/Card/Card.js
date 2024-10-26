import './Card.scss';
import { Link } from 'react-router-dom';
import React from 'react'
import pin from '../../images/pin.png';

const Card = ({ item }) => {
    return (
        <div class="card">

            <Link to={`/${item.id}`} className="imageContainer">
                <img src={item.img} alt="properties" />

            </Link>


            <div className="textContainer">
                <h2 className="title">
                    <Link to={`/${item.id}`}>{item.title}</Link>
                </h2>


                <p className="address">
                    <img src={pin} />
                    <span>{item.address}</span>
                </p>

            </div>


        </div>
    )
}

export default Card

