import React from 'react';
import './index.css';
import {Link} from 'react-scroll';

const Nevbar = () => {
    return (<>
    
        <nav className="navbar sticky-top py-4 navbar-expand-lg navbar-dark bg-dark">

        <div className="mx-auto">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item  ml-5">
                        <Link className="nav-link" activeClass="active" to="Home" smooth={true} duration={1000}>HOME</Link>
                    </li>
                    <li className="nav-item ml-5">
                        <Link className="nav-link"  to="About" smooth={true} duration={1000}>ABOUT</Link>
                    </li>
                    <li className="nav-item ml-5">
                        <Link className="nav-link" to="Room" smooth={true} duration={1000}>ROOM</Link>
                    </li>
                    <li className="nav-item ml-5">
                        <Link className="nav-link" to="Service" smooth={true} duration={1000}>SERVICE</Link>
                    </li>
                    <li className="nav-item ml-5">
                        <Link className="nav-link" to="Gallery" smooth={true} duration={1000}>GALLERY</Link>
                    </li>
                    <li className="nav-item ml-5">
                        <Link className="nav-link" to="see" smooth={true} duration={1000}>SEE & DO</Link>
                    </li>
                    <li className="nav-item ml-5">
                        <Link className="nav-link" to="contact" smooth={true} duration={1000}>CONTACT</Link>
                    </li>
                    <button type="button" className="btn btn-outline-danger ml-5">Book A Room</button>


                </ul>

            </div>
            </div>
        </nav>
        
    </>);
}

export default Nevbar;