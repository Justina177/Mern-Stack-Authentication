import React, { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Card from '../../components/card/Card';
import PasswordInput from '../../components/passwordInput/PasswordInput';
import styles from "./auth.module.scss"

const Forgot = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const handleInputChange = () => {};

    const loginUser = () => {};

  return (
    <div className={`container ${styles.auth}`}>
        <Card>
        <div className={styles.form}>
            <div className="--flex-center">
                <AiOutlineMail size={35} color="#999" />
            </div>
            <h2>Forgot Password</h2>            
            <form onSubmit={loginUser}>
            <input
              type="email"
              placeholder="Email"
              required
              name="email"
              value={email}
              onChange={handleInputChange}
              />
              <small style={{color: 'red', fontSize:'13px'}}>Enter email associated with your account.</small>
            <button type="submit" className="--btn --btn-primary --btn-block">
              Get Reset Email
            </button>
            <div className={styles.links}>
                <p>
                <Link to="/">- Home</Link>
                </p>
                <p>
                <Link to="/login">- Login</Link>
                </p>
            </div>
            </form>
        </div>
        </Card>
    </div>
  )
}

export default Forgot