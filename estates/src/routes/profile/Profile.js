import React from 'react'
import './Profile.scss'
import { userData } from '../../lib/dummydata'
import List from '../../components/List/List'
import Chat from '../../components/Chat/Chat'

const Profile = () => {
    return (
        <div className='profilePage'>
            <div className="details">
                <div className="wrapper">
                    <div className="title">
                        <h1>User Info</h1>
                        <button>Update Profile</button>
                    </div>


                    <div className="info">
                        <span> Avatar:<img src={userData.img} /> </span>

                        <span>Username: <b>Jack Sparrow</b></span>
                        <span>Email: <b>sparrowEstate.@gmail.com</b></span>
                    </div>


                    <div className="title">
                        <h1>My List</h1>
                        <button>Create New Post</button>
                    </div>


                    <List />



                    <div className="title">
                        <h1>Saved List</h1>

                    </div>


                    <List />


                </div>

            </div>

            <div className="chatContainer">
                <div className="wrapper">

                    <Chat />

                </div>

            </div>
        </div>
    )
}

export default Profile
