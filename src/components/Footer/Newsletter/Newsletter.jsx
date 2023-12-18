import React from "react";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";
import "./Newsletter.scss";
const Newsletter = () => {
    return (
        <div className="newsletter-section">
            <div className="newsletter-content">
                <span className="big-text">
                    Sign up for latest updates and offers
                </span>
                <div className="form">
                    <input type="text" placeholder="Email Address" />
                    <button>Subscribe</button>
                </div>
                <span className="text">
                    Will be used in accordance with our Privacy Policy
                </span>
                <span className="social-icons">
                    <div className="icon">
                        <FaLinkedinIn size={18} />
                    </div>
                    <div className="icon">
                        <FaFacebookF size={18} />
                    </div>
                    <div className="icon">
                        <FaTwitter size={18} />
                    </div>
                    <div className="icon">
                        <FaInstagram size={18} />
                    </div>
                </span>
            </div>
        </div>
    );
};

export default Newsletter;