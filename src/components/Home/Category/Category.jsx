import "./Category.scss";
import cat1 from "../../../assets/category/cat1.jpg"
import cat2 from "../../../assets/category/cat2.jpg"
import cat3 from "../../../assets/category/cat3.jpeg"
import cat4 from "../../../assets/category/cat4.jpeg"

const Category = () => {
  return (
    <div className="shop-by-category">
      <div className="categories">
        <div className="category">
          <img className="img1" src={cat1} alt="Category 1" />
        </div>
        <div className="category">
          <img className="img2" src={cat2} alt="Category 2" />
        </div>
        <div className="category">
          <img className="img3" src={cat3} alt="Category 3" />
        </div>
        <div className="category">
          <img className="img4" src={cat4} alt="Category 4" />
        </div>
      </div>
    </div>
  );
};

export default Category;
