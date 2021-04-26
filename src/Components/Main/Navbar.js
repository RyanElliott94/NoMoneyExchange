const Navbar = ({

}) => {
    return (
        <nav className="navbar-custom">
            <div className="navbar-main">
                <div className="navbar-logo">
                    <p>NoMoney<span className="logo-span">eXchange</span></p>
                </div>

                <div className="navbar-links">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Features</a></li>
                        <li><a href="/">Search</a></li>
                        <li><a href="/">About Us</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;