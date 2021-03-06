import HomeSlides from "./HomeSlides";
import Navbar from "./Navbar";
import { BiDevices, BiConversation } from "react-icons/bi";
import { MdUpdate } from "react-icons/md";
import { useEffect, useState } from "react";
import Footer from "./Footer";
import Hermes from "../../Assets/Images/TempImages/Sponsors/Hermeslogo.png";
import Royal from "../../Assets/Images/TempImages/Sponsors/royal-mail.png";
import IT from "../../Assets/Images/TempImages/Sponsors/rj2.png";
import Commerce from "../../Assets/Images/TempImages/Sponsors/e-commo.png";
import Market from "../../Assets/Images/TempImages/Sponsors/market.png";
import Aos from "aos";
import CustomModal from "../Extras/CustomModal";
const $ = require("jquery");

export default function Home() {
    const [selectedQuote, setSelectedQuote] = useState("classified ads not working? ... this will");
    const [showQuickRegister, setShowQuickRegister] = useState(false);
    const [showNotification, setShowNotification] = useState(false);

    const banner = [
        "you may not need money to get what you want",
        "classified ads not working? ... this will",
        "don't trash it ... get something else for it",
        "swap just about anything ... for anything else"
    ];

    const sponsors = [{
        type: "courier",
        name: "Hermes",
        title: "Who Are we?",
        image: Hermes
    },
    {
        type: "courier",
        name: "Hermes",
        title: "Who Are we?",
        image: Royal
    }];

    const [tabContent, setTabContent] = useState(sponsors.length ? sponsors : []);

    useEffect(() => {
        Aos.init({
            delay: 50,
            duration: 500
        });

        setInterval(() => {
            for(var i = 0; i < banner.length; i++) {
              setSelectedQuote(banner[Math.round(Math.random() * i)]);
            }
        }, 5000);

        $(document).on("keydown", eve => {
            if(eve.ctrlKey && eve.keyCode == 13) {
                window.location.href = "/upload-example";
            }
        });
        
    }, []);

    const handleTabs = eve => {
        const tabID = $(eve.target).attr("id");
        switch(tabID) {
            case "courier":
                toggleActiveTab(`#${tabID}`);
                setTabContent(
                    [{
                        type: "courier",
                        name: "Hermes",
                        title: "Who Are we?",
                        image: Hermes
                    },
                    {
                        type: "courier",
                        name: "Hermes",
                        title: "Who Are we?",
                        image: Royal
                    }]
                )
            break;
            case "it":
                toggleActiveTab(`#${tabID}`);
                setTabContent(
                    [{
                        type: "it",
                        name: "Hermes",
                        title: "Who Are we?",
                        image: IT
                    }]
                )
            break;
            case "sales":
                toggleActiveTab(`#${tabID}`);
                setTabContent(
                    [{
                        type: "it",
                        name: "Hermes",
                        title: "Who Are we?",
                        image:Commerce
                    }]
                )
            break;
            case "marketing":
                toggleActiveTab(`#${tabID}`);
                setTabContent(
                    [{
                        type: "marketing",
                        name: "Hermes",
                        title: "Who Are we?",
                        image: Market
                    }]
                )
            break;
        }
    }

    const toggleActiveTab = element => {
        $(".sponsor-tab-item").removeClass("active-tab");
        $(element).parent().addClass("active-tab");
    }

    return (
        <div className="home-page">
            <CustomModal showModal={showNotification} closeModal={() => setShowNotification(false)} />
            <div className="home-page-top">
            <Navbar />
            <div className="home-banner">
                <p>{selectedQuote}</p>
            </div>
            <div className="home-slide-main">
                {showQuickRegister ? <div className="quick-signup">
                    <div className="close-quick-signup">
                        <button onClick={() => setShowQuickRegister(false)}>Close</button>
                    </div>

                    <div className="quick-title">
                        <p>Quick Registration</p>
                    </div>
                    <div className="quick-content">
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="text" placeholder="Enter your email address..."></input>
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" placeholder="Enter a unique password..."></input>
                        </div>

                        <div className="form-group">
                            <button className="signup-btn">Register</button>
                        </div>
                    </div>
                </div> : <div className="quick-signup-short" onClick={() => showQuickRegister ? setShowQuickRegister(false) : setShowQuickRegister(true)}>
                        <p>Quick registration</p>
                        </div>}
            <HomeSlides />
            </div>
            </div>

            <div className="home-main">
            <div className="sponsored-clients">
                <div className="sponsor-title">
                <p>Our Sponsored Clients!</p>
                <p className="lead">Need help with shipping? or help with finding correct service provider for you?... Then checkout our sponsored clients</p>
                </div>

                <div className="sponsored-clients-main">
                <div className="sponsored-clients-tabs">
                        <div className="sponsor-tab-item active-tab">
                            <p onClick={handleTabs} id="courier">Couriers Companies</p>
                        </div>
                        <div className="sponsor-tab-item">
                            <p onClick={handleTabs} id="it">I.T Companies</p>
                        </div>
                        <div className="sponsor-tab-item">
                            <p onClick={handleTabs} id="sales">Sales Companies</p>
                        </div>
                        <div className="sponsor-tab-item">
                            <p onClick={handleTabs} id="marketing">Marketing Companies</p>
                        </div>
                    </div>
                    <div className="tab-content">
                    {tabContent.map((item,key) => {
                        return <div className="tab-content-card">
                        <div className="card-image">
                            <img src={item.image} />
                        </div>

                        <div className="card-content">
                            <h2>{item.title}</h2>
                            <p>Takimata rebum diam dolor ipsum dolor diam accusam. Diam takimata sanctus dolor nonumy ipsum tempor eos, sadipscing sadipscing eos clita lorem sanctus ipsum kasd diam.</p>
                        </div>
                    </div>
                    })}
                </div>
                </div>
                </div>
                
                <div className="website-features">
                    <div className="features-title">
                        <p>What are the benefits of NoMoney<span className="logo-span">eXchange</span>?</p>
                    </div>
                        <div className="feature-item" data-aos="slide-left">
                        <div className="feature-type">
                        <BiDevices fontSize="15rem" />
                            <p>Mobile Friendly</p>
                        </div>

                        <div className="feature-info">
                        <p>We are working towards the ultimate mobile user experience</p>
                        </div>
                        </div>


                        <div className="feature-item feature-middle" data-aos="slide-right">
                        <div className="feature-info">
                        <p>As new items are added, our views are refreshed. Subscribe to our notifications service</p>
                        </div>

                        <div className="feature-type">
                            <MdUpdate fontSize="15rem" />
                            <p>Constant Updates</p>
                        </div>
                        </div>

                        <div className="feature-item mt-5" data-aos="slide-left">
                        <div className="feature-type">
                            <BiConversation fontSize="15rem" />
                            <p>Mobile Friendly</p>
                        </div>

                        <div className="feature-info">
                        <p>Maintain one-to-one privacy when engaged in a conversation with multiple people</p>
                        </div>
                        </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

{/* <div className="home-features">
                    <div className="features-item">
                        <div className="feature-type">
                            <BiDevices fontSize="11rem" />
                            <p>Mobile Friendly</p>
                        </div>
                        <div className="feature-info">
                        <p>We are working towards the ultimate mobile user experience</p>
                        </div>
                    </div>

                    <div className="features-item">
                        <div className="feature-type">
                            <MdUpdate fontSize="11rem" />
                            <p>Constant Updates</p>
                        </div>
                        <div className="feature-info">
                        <p>As new items are added, our views are refreshed. Subscribe to our notifications service</p>
                        </div>
                    </div>

                    <div className="features-item">
                        <div className="feature-type">
                            <BiConversation fontSize="11rem" />
                            <p>Mobile Friendly</p>
                        </div>

                        <div className="feature-info">
                        <p>Maintain one-to-one privacy when engaged in a conversation with multiple people</p>
                        </div>
                    </div>
                    </div> */}