
import { MdClose } from "react-icons/md";
import "./Search.scss";
import prod from "../../../assets/products/hammer2.png"

const Search = ({ setShowSearch }) => {
    return (
        <div className="search-modal">
            <div className="form-field">
                <input
                    autoFocus
                    type="text"
                    placeholder="Search for products"
                />
                <MdClose
                    onClick={() => setShowSearch(false)}
                />
            </div>
            <div className="search-result-content">
                <div className="search-results">
                    <div
                        className="search-result-item"
                    >
                        <div className="image-container">
                            <img src={prod} alt="" />
                        </div>

                        <div className="prod-details">
                            <span className="name">Product Name
                            </span>
                            <span className="desc">Product Desc
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;