import './singlePage.scss';
import Slider from '../slider/Slider';
import { singlePostData } from '../../lib/dummydata';
import chat from '../../images/chat.png';
import chat from '../../images/save.png';
import Map from '../Map/Map';



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
                    <p className="title">General</p>
                    <div className="listVertical"></div>
                    <p className="title">Sizes</p>
                    <div className="sizes"></div>
                    <p className="title">Nearby Places</p>
                    <div className="listHorizontal"></div>
                    <p className="title">Location</p>
                    <div className="mapContainer">
                        <Map items={[singlePostData]} />
                    </div>

                    <div className="buttons">
                        <button>
                            <img src={chat} alt="" />
                            Send a message
                        </button>


                        <button>
                            <img src={save} alt="" />
                            Save the place
                        </button>
                    </div>


                </div>
            </div>

        </div>
    )
}

export default SinglePage
