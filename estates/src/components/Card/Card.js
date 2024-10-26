import './Card.scss';
import { Link } from 'react-router-dom';
import React from 'react'
import pin from '../../images/pin.png';
import bed from '../../images/bed.png';
import bath from '../../images/bath.png';
import save from '../../images/save.png';
import chat from '../../images/chat.png'


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

                <p className="price">${item.price}</p>

                <div className="bottom">
                    <div className="features">
                        <div className="feature">
                            <img src={bed} alt="" />
                            <span>{item.bedroom} bedroom</span>

                        </div>


                        <div className="feature">
                            <img src={bath} alt="" />
                            <span>{item.bathroom} bathroom</span>

                        </div>
                    </div>
                    <div className="icons">
                        <div className="icon">
                            <img src={save} alt="" />
                        </div>

                        <div className="icon">
                            <img src={chat} alt="" />
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Card

