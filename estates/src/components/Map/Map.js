import React from 'react'
import './map.scss';
import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import Pin from '../pin/Pin';








// Set up the default icon for markers
const DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
});


L.Marker.prototype.options.icon = DefaultIcon;


const Map = ({ items }) => {
    return (

        <MapContainer center={[52.4747, -1.90269]} zoom={7} scrollWheelZoom={false} className="map">
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />


            {
                items.map(item => (
                    <Pin item={item} key={item.id} />

                ))}

        </MapContainer>

    )
}

export default Map
