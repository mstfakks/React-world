import React, {useState} from "react";
import '../App.css';
import './Upnavbar.css';
import { Link } from "react-router-dom";

const Upnavbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return(
        <nav className="navbar">
            <div className="navbar-container">
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? "fas fa-times" : "fas fa-bars"} />
                </div>

                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link
                        to="/cryptocurrencies"
                        className="nav-links"
                        onClick={closeMobileMenu}
                        >
                            Cryptocurrencies
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/news" className="nav-links" onClick={closeMobileMenu}>
                            News
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default Upnavbar;