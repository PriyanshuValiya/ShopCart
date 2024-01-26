import "./Category.scss";
import Product from "../Products/Product/Product";
import { useParams } from "react-router-dom";
import { Popular } from "../data";

const Category = () => {
    const { id } = useParams();

    return(
        <>
        <div className="category-main-content">
            <div className="layout">
                <div className="category-title">
                { (id == 1) ? "Headphone" : ""}
                { (id == 2) ? "Earbuds" : ""}
                { (id == 3) ? "Smart Watches" : ""}
                { (id == 4) ? "Speakers" : ""}
                </div>
                <div className="products">
                {Popular.map((item) => (
                  (id == item.id1) ? <Product img={item.img} name={item.name} detail={item.detail} price={item.price}/> : ""
                ))}
                </div>
             </div>
        </div>
        </>
    );
};

export default Category;