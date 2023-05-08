import React, { useState } from 'react';
import './ChangePassword.scss';
import Card from "../../components/card/Card";
import PageMenu from '../../components/pageMenu/PageMenu';
import PasswordInput from '../../components/passwordInput/PasswordInput';

const initialState = {
  oldPassword: "",
  password: "",
  password2: "",
};

const ChangePassword = () => {

  const [formData, setFormData] = useState(initialState);
  const { oldPassword, password, password2} = formData


  const handleInputChange = () => {}; 

  return (
    <>
      <div className="container">
        <PageMenu />
        <h2>Change Password</h2>
        <div className="--flex-start profile">
        <Card cardClass={"card"}>
          <div>
            <form> 
            <p>
                <label> Current password</label>
                <PasswordInput 
                        placeholder="Old Password"
                        name="oldPassword"
                        value={oldPassword}
                        onChange={handleInputChange}
                />
            </p>
            <p>
                <label>New Password</label>
                <PasswordInput
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={handleInputChange}
                />
            </p>
            <p>
                <label>Confirm New Password</label>
                <PasswordInput 
                    placeholder="Confirm Password"
                    name="password2"
                    value={password2}
                    onChange={handleInputChange}
                />
            </p>            
            <p>
              <button className="--btn --btn-danger --btn-block">
                Change Password
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

export default ChangePassword;