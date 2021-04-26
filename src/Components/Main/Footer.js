export default function Footer(props){
    return (
        <footer>
            <div className="footer-top">
                <div className="footer-signup">
                    <p>Exchange Services & Signup FREE!</p>
                    <div className="form-group">
                        <input type="email" id="quick-email-register" placeholder="start with your email..."></input>
                        <button>Signup</button>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>Copyright&copy; {new Date().getFullYear()}</p>
                <p>NoMoney<span className="logo-span">eXchange</span></p>
                <div className="footer-links-bottom">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Features</a></li>
                        <li><a href="/">Search</a></li>
                        <li><a href="/">About Us</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}