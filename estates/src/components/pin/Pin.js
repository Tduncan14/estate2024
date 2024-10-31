import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import "./pin.scss";
import { Link } from 'react-router-dom';

const Pin = ({ item }) => {
    return (
        <Marker position={[item.latitude, item.longitude]}>
            <Popup>
                <div className="popupContainer">
                    <img src={item.img || '/default-image.jpg'} alt={item.title || 'Property Image'} />
                    <div className="textContainer">
                        <Link to={`/${item.id}`}>{item.title || 'Untitled Property'}</Link>
                        <span className="bed">{item.bedroom ? `${item.bedroom} bedroom` : 'N/A'}</span>
                        <b>${item.price || 'Price not available'}</b>
                    </div>
                </div>
            </Popup>
        </Marker>
    );
};

export default Pin;
