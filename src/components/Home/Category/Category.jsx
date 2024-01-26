import "./Category.scss";
import cat1 from "../../../assets/category/cat-1.jpg";
import cat2 from "../../../assets/category/cat-2.jpg";
import cat3 from "../../../assets/category/cat-3.jpg";
import cat4 from "../../../assets/category/cat-4.jpg";
import { useNavigate } from "react-router-dom"
import { Top } from "../../data";

const Category = () => {
  const navigate = useNavigate();
  return (
  <>
  <p>Categories</p>
    <div className="shop-by-category">
      <div className="categories">
        <img src={cat1} alt="" onClick={() => navigate(`/category/1`)}/>
        <img src={cat4} alt="" onClick={() => navigate(`/category/2`)}/>
        <img src={cat3} alt="" onClick={() => navigate(`/category/3`)}/>
        <img src={cat2} alt="" onClick={() => navigate(`/category/4`)}/>
      </div>
    </div>
  </>
  );
};

export default Category; 
