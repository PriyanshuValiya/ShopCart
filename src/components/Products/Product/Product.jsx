import "./Product.scss";
import { useNavigate } from "react-router-dom"
// import { Popular } from "../../data";

const Product = ({ img, name, more, price, id}) => {
    const navigate = useNavigate();

    return(
        <>
         <div className="product-card" onClick={() => navigate(`/product/${id}`)}>
            <div className="thumbnail">
                <img src={img} alt=""/>
            </div>
            <div className="product-details">
                <span className="name">{name}</span><br/><br/>
                <span className="price">&#8377; {price}</span>
            </div>
         </div>
        </>
    )
};

export default Product;
