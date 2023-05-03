import React from 'react';
// import './Header.scss';
// import {BiLogin} from 'react-icons/bi';
import {FaUserCircle} from 'react-icons/fa'
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';


const activeLink = ({isActive}) => (isActive ? "active" : "");
const Header = () => {
    const activeLink = []
  return (
    <header className="header">
        <nav>
            <div className="logo">
                {/* <BiLogin /> */}
                <span>AUTH:J</span>               
            </div>

            <ul className="home-links">
                <li className="--flex-center">
                    <FaUserCircle size={20} />
                    <p className="--color-white">Hi, JTina |</p>
                </li>
                <li>
                    <button className="--btn --btn--primary">
                        <Link to="/login">Login</Link>
                    </button>
                </li>
                <li> 
                    <NavLink to="/profile" className={activeLink}>Profile</NavLink>
                </li>
                <li>
                    <button className="--btn --btn--secondary">
                    </button>
                </li>
            </ul>
        </nav>

    </header>
  )
}

export default Header