import React, { useState } from 'react'
import './Chat.scss'
import { userData } from '../../lib/dummydata'

const Chat = () => {

    const [chat, setChat] = useState(null)


    return (
        <div className='chat'>



            <div className="messages">

                <h1>Message</h1>


                <div className="message" onClick={() => setChat(true)} >

                    <img src={userData.img} alt="images" />
                    <span>Jack</span>
                    <p>
                        When are you trying to look at the property?
                    </p>
                </div>


                <div className="message" onClick={() => setChat(true)}>

                    <img src={userData.img} alt="images" />
                    <span>Jack</span>
                    <p>
                        When are you trying to look at the property?
                    </p>
                </div>



                <div className="message" onClick={() => setChat(true)} >

                    <img src={userData.img} alt="images" />
                    <span>Jack</span>
                    <p>
                        When are you trying to look at the property?
                    </p>
                </div>



                <div className="message">

                    <img src={userData.img} alt="images" />
                    <span>Jack</span>
                    <p>
                        When are you trying to look at the property?
                    </p>
                </div>
            </div>

            {chat && (
                <div className="chatBox">
                    <div className="top">
                        <div className="user">
                            <img src={userData.img} alt="" />
                            <span>Jack</span>
                        </div>
                        <span className="close" onClick={() => setChat(null)}>X</span>
                    </div>
                    <div className="center">
                        <div className="chatMessage">
                            <p> Probably this Thursday</p>
                            <span> 1 hour ago</span>
                        </div>


                        <div className="chatMessage  own">
                            <p> Probably this Thursday</p>
                            <span> 1 hour ago</span>
                        </div>



                        <div className="chatMessage">
                            <p> Probably this Thursday</p>
                            <span> 1 hour ago</span>
                        </div>


                        <div className="chatMessage own">
                            <p> Probably this Thursday</p>
                            <span> 1 hour ago</span>
                        </div>



                        <div className="chatMessage ">
                            <p> Probably this Thursday</p>
                            <span> 1 hour ago</span>
                        </div>
                    </div>
                    <div className="bottom">
                        <textarea></textarea>
                        <button>send</button>
                    </div>
                </div>
            )}


        </div>
    )
}

export default Chat
