import React from "react";

import "./Banner.scss";
import BannerImg from "../../../assets/Hero/banner3.png";

const Banner = () => {
    return (
        <div className="hero-banner">
            <div className="content">
                <div className="text-content">
                    <h1>SALES !!</h1>
                    <p>
                    "Revolutionize your ride with unbeatable deals! Elevate your journey with premium automotive products at prices you can't resist. Hurry, shop the sale at RevUpHub.com!"
                    </p>
                    <div className="ctas">
                        <div className="banner-cta">Read More</div>
                        <div className="banner-cta v2">Shop Now</div>
                    </div>
                </div>
                <img className="banner-img" src={BannerImg} />
            </div>
        </div>
    );
};

export default Banner;