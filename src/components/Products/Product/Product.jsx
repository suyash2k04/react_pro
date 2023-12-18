import "./Product.scss";
import prod from "../../../assets/products/Tyre.png"
const Product = () => {
    return <div className="product-card">
            <div className="thumbnail">
                <img
                    src={prod} alt="name"
                />
            </div>
            <div className="prod-details">
                <span className="name">Product Name</span>
                <span className="price">&#8377;999</span>
            </div>
        </div>
};

export default Product;