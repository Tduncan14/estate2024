import React from 'react'
import './Profile.scss'

const Profile = () => {
    return (
        <div className='Profile'>
            <div className="details">
                <div className="wrapper">
                    <div className="title">
                        <h1>User Info</h1>
                        <button>Update Profile</button>
                    </div>


                    <div className="title">
                        <h1>My List</h1>
                        <button>Create New Post</button>
                    </div>



                    <div className="title">
                        <h1>Saved List</h1>

                    </div>

                </div>

            </div>

            <div className="chatContainer">
                <div className="wrapper">

                </div>

            </div>
        </div>
    )
}

export default Profile
