import "./SingleProduct.scss";
import { IoCartOutline } from "react-icons/io5"
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Top, Popular } from "../data";
import { Context } from "../../utils/context";

const SingleProduct = () => {
    const { id } = useParams();
    const [quantity, setQuantity] = useState(1);
    const {handleAddToCart} = useContext(Context);

    const inc = () => {
        setQuantity((prevState) => prevState + 1);
    }

    const dec = () => {
        setQuantity((prevState) => {
            if(prevState === 1) {
                return 1;
            } else {
                return prevState - 1;
            }
        });
    }

    return(
        <>
        <div className="single-product-main-content">
          {Top.map((item) => (
             (id == item.id2) ? 
            <div className="layout">
                <div className="single-product-page">
                    <div className="left">
                        <img src={item.img} alt=""/>
                    </div>

                    <div className="right">
                        <span className="name">{item.name}</span>
                        <span className="price">&#8377; {item.price * quantity}</span>
                        <span className="desc">{item.detail}</span>
                        <div className="cart-buttons">
                            <div className="quantity-buttons">
                            <ButtonGroup variant="outlined" aria-label="outlined button group" style={{width: "100px"}}>
                              <Button onClick={dec}>-</Button>
                              <Button>{quantity}</Button>
                              <Button onClick={inc}>+</Button>
                            </ButtonGroup>
                            </div>
                        <Button variant="contained" onClick={() => {handleAddToCart(item, quantity)}}><IoCartOutline className="icon"/>ADD TO CART</Button>
                        </div><hr className="hr"/>
                        <div className="info-item">
                            <span className="text-bold">Category :</span>
                            <span>{item.category}</span>
                        </div>
                    </div>    
            </div>
                
            </div> : ""
            ))}
        </div>

        <div className="single-product-main-content">
          {Popular.map((item) => (
             (id == item.id2) ? 
            <div className="layout">
                <div className="single-product-page">
                    <div className="left">
                        <img src={item.img} alt=""/>
                    </div>

                    <div className="right">
                        <span className="name">{item.name}</span>
                        <span className="price">&#8377; {item.price * quantity}</span>
                        <span className="desc">{item.detail}</span>
                        <div className="cart-buttons">
                            <div className="quantity-buttons">
                            <ButtonGroup variant="outlined" aria-label="outlined button group" style={{width: "100px"}}>
                              <Button onClick={dec}>-</Button>
                              <Button>{quantity}</Button>
                              <Button onClick={inc}>+</Button>
                            </ButtonGroup>
                            </div>
                        <Button variant="contained" onClick={() => alert(`${item.name} Added To Cart.`)}><IoCartOutline className="icon"/>ADD TO CART</Button>
                        </div><hr className="hr"/>
                        <div className="info-item">
                            <span className="text-bold">Category : </span>
                            <span>{item.category}</span>
                        </div>
                    </div>    
            </div>               
            </div> : ""
            ))}
        </div>
        </>
    );
};

export default SingleProduct;

