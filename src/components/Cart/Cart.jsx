import "./Cart.scss";
import CartItem from "./CartItem/CartItem"
import { MdClose } from "react-icons/md"
import { BsCartX } from "react-icons/bs"
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

const Cart = ({setShowCart}) => {
    const navigate = useNavigate();
    return(
        <>
        <div className="container">
        <div className="sub-title">
         <p className="title">Shopping Cart</p>
         <MdClose className="closebtn" onClick={() => navigate("/")}/>
         </div>

          <CartItem />
          <div className="cart-footer">
            <div className="subtitle">
                <span className="text">Subtotal : </span>
                <span className="text total">&#8377; 1799</span>
            </div>
            <Button variant="contained" className="checkout-cta">CheckOut</Button>
          </div>
         </div>
        </>
    );
};

export default Cart;