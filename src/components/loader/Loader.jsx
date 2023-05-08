import React from 'react';
import './Loader.scss';
import ReactDOM from "react-dom";
import loaderImg from '../../assets/loader.gif';

const Loader = () => {
  return ReactDOM.createPortal(
      <div className="wrapper">
          <img src={loaderImg} alt="Loading..." />
      </div>,
      document.getElementById("loader")
  )
}

// export const Spinner = () => {
//     return (
//         <div className="--center-all">
//             <img src={loaderImg} alt="Loading..." />

//         </div>
//     )

// }

export default Loader