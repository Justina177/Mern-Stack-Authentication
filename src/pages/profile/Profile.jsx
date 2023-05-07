import React, { useState } from 'react';
import './Profile.scss';
import Card from "../../components/card/Card";
import profileImg from '../../assets/DSC_3900.JPG'

const initialState = {
  name: "Justina",
  email: "tina@gmail.com",
  phone: "1234567890",
  bio: " ",
  photo: " ",
  role: " ",
  isVerified: " ",
};

const Profile = () => {

  const [profile, setProfile] = useState(initialState);
  
  const handleImageChange = () => {};
  return (
    <>
      <div className="container">
        <h2>Profile</h2>
        <div className="--flex-start profile">
        <Card cardClass={"card"}>
          <div>
            <div className="profile-photo">
              <div className="">
              <img src={profileImg} alt="profileImg" />
              <h3>Role: Admin</h3>
              </div>
            </div>
            <form>
            <p>
              <label>Change Photo:</label>
                <input
                type="file"
                  accept="image/*"
                  name="image"
                  onChange={handleImageChange}
              />
            </p>
            <p>
              <label>Name:</label>
                <input
                type="text"
                name="name"
                value={profile.name}
                onChange={''}
              />
            </p>

            </form>
          </div>
        </Card>

        </div>


      </div>

     

    </>
  )
}

export default Profile