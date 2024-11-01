import './singlePage.scss';
import Slider from '../slider/Slider';
import { singlePostData } from '../../lib/dummydata';
import Menu from '../../images/pin.png';



import React from 'react'

const SinglePage = () => {
    return (
        <div className="singlePage">
            <div className="details">
                <div className="wrapper">
                    <Slider images={singlePostData.images} />

                    <div className="info">
                        <div className="top">
                            <div className="post">
                                <h1>{singlePostData.title}</h1>
                                <div className="address">
                                    <img src={pin} alt="" />
                                    <span>{singlePostData.address}</span>
                                </div>

                                <div className="price">
                                    {singlePostData.price}
                                </div>
                            </div>
                            <div className="user"></div>
                        </div>
                        <div className="bottom">bottom</div>
                    </div>
                </div>
            </div>
            <div className="features">
                <div className="wrapper">

                </div>
            </div>

        </div>
    )
}

export default SinglePage