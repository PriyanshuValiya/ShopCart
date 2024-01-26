import "./Products.scss";
import Product from "./Product/Product"
import { Top, Popular } from "../data"; 

const Products = () => {
    return(
     <>
     <br/><br/>
     <span>Top Products</span>
      <div className="products-container">
        <div className="sec-heading"></div>
        <div className="products">
          {Top.map((item) => (
              <Product img={item.img} name={item.name} detail={item.detail} price={item.price} id={item.id2}/>
          ))}
        </div>
      </div><br/><br/><br/>

      <span >Popular Products</span>
      <div className="products-container">
        <div className="sec-heading"></div>
        <div className="products">
          {Popular.map((item) => (
              <Product img={item.img} name={item.name} more={item.more} price={item.price} id={item.id2}/>
          ))}
        </div>
      </div>
    </>
    )
};

export default Products;