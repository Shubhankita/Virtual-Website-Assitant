import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => (
    <nav>
          <div className="nav-wrapper">
            <Link to={'/'} className="brand-logo"  style={{ marginLeft: 20 }}>CourseX</Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><Link to={'/shop'}>Learn</Link></li>
                <li><Link to={'/about'} style={{ marginLeft: 20 }}>About us</Link></li>
            </ul>
        </div>
    </nav>
)

export default Header;