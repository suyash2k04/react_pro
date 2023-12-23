import React from "react";
import { MdClose } from "react-icons/md";
import "./CartItem.scss";
import prod from "../../../assets/products/hammer2.png";

const CartItem = ({ item, handleRemoveFromCart, handleCartProductQuantity }) => {
    return (
        <div className="cart-products">
            <div className="cart-product">
                <div className="image-container">
                    <img src={prod} alt="" />
                </div>

                <div className="prod-details">
                    <span className="name">Product Name</span>
                    <MdClose
                        className="close-btn"
                    />
                    <div className="quantity-buttons">
                        <span>-</span>
                        <span>5</span>
                        <span>+</span>
                    </div>

                    <div className="text">
                            <span>3</span>
                            <span>x</span>
                            <span className="highlight">
                                <span>&#8377;4567</span>
                            </span>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
