import React, { useState } from 'react';
import './Profile.scss';
import Card from "../../components/card/Card";
import profileImg from '../../assets/DSC_3900.JPG'
import PageMenu from '../../components/pageMenu/PageMenu';

const initialState = {
  name: "Justina",
  email: "tina@gmail.com",
  phone: "1234567890",
  bio: " ",
  photo: " ",
  role: " ",
  isVerified: false,
};

const Profile = () => {

  const [profile, setProfile] = useState(initialState);
  
  const handleImageChange = () => {};

  const handleInputChange = () => {}; 

  return (
    <>
      <div className="container">
        <PageMenu />
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
                onChange={handleInputChange}
              />
            </p>
            <p>
              <label>Email:</label>
                <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleInputChange}
                disabled
              />
            </p>
            <p>
              <label>Phone:</label>
                <input
                type="text"
                name="phone"
                value={profile.phone}
                onChange={handleInputChange}
              />
            </p>
            <p>
            <label>Bio:</label>
              <textarea
              name="bio"
              value={profile?.bio}
              onChange={handleInputChange}
              cols="30"
              rows="10"
              ></textarea>
            </p>
            <p>
              <button className="--btn --btn-primary --btn-block">
                Update Profile
              </button>
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