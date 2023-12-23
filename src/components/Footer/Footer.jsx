import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/Hero/payments.png";
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title1">About</div>
                    <div className="text1">
                        "At RevUpHub, we're more than just an automotive marketplace; we're enthusiasts dedicated to transforming your driving experience. With a commitment to quality, a curated selection of premium products, and a user-friendly platform, we bring you the best in automotive innovation. Explore our passion for performance, style, and exceptional service – because your journey deserves nothing less."
                    </div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">
                            Siddhivinyak Colony , Near Anand hospital , Warje Rd ,
                            Pune, 411058
                        </div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">Phone: 0123 456 7890</div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">Email: store@revuphub.com</div>
                    </div>
                </div>
                <div className="col">
                    <div className="title">Categories</div>
                    <span className="text">Tires and Wheels</span>
                    <span className="text">Parts and Accessories</span>
                    <span className="text">Electronics</span>
                    <span className="text">Oils & Car Care Product</span>
                    <span className="text">Exterior Accessories</span>
                    <span className="text">Tools & Equipment</span>
                </div>
                <div className="col">
                    <div className="title2">Pages</div>
                    <span className="text">Home</span>
                    <span className="text">About</span>
                    <span className="text">Privacy Policy</span>
                    <span className="text">Returns</span>
                    <span className="text">Terms & Conditions</span>
                    <span className="text">Contact Us</span>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">

                    <img src={Payment} alt="payment"/>
                </div>
            </div>
        </div>
    );
};

export default Footer;