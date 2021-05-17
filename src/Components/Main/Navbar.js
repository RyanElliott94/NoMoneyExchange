import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
const $ = require("jquery");

const Navbar = ({

}) => {
    const [isMobile, setIsMobile] = useState(false);
    const [showMobileLinks, setShowMobileLinks] = useState(false);

    useEffect(() => {
        if(/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            setIsMobile(true);
          }else{
            setIsMobile(false);
          }
    }, []);

    useEffect(() => {
        $(".animated-icon1").toggleClass("open");
    }, [showMobileLinks]);

    return (
        <nav className="navbar-custom">
            <div className="navbar-main">
                <div className="navbar-logo">
                    <p>NoMoney<span className="logo-span">eXchange</span></p>
                </div>

                <div className="navbar-links" hidden={isMobile && !showMobileLinks ? true : false}>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Features</a></li>
                        <li><a href="/messages">Messages</a></li>
                        <li><a href="/">Search</a></li>
                        <li><a href="/">About Us</a></li>
                        {showMobileLinks ? <li>
                            <div className="mobile-user-options">
                            <button className="login-btn">Login</button>
                            <button className="register-btn">Signup</button>
                            </div>
                        </li> : null}
                    </ul>
                </div>

                <div className="navbar-options">
                    {!isMobile ? <div className="user-options">
                    <button className="login-btn">Login</button>
                    <button className="register-btn">Signup</button>
                    </div> : <div className="animated-icon1" onClick={() => !showMobileLinks ? setShowMobileLinks(true) : setShowMobileLinks(false)}><span></span><span></span><span></span></div>}
                </div>
            </div>
        </nav>
    )
}

export default Navbar;