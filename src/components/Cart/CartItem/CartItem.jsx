import "./CartItem.scss";
import { MdDelete } from "react-icons/md"
import prod from "../../../assets/products/headphone-prod-1.webp"
import { cartItems } from "../../data"
import { useContext } from "react";
import { Context } from "../../../utils/context";

const CartItem = () => {
    const {handleRemoveFromCart} = useContext(Context);

    return(
    <>
     <div className="cart-products">
      {cartItems.map((item) => (
        <div key={item.id2} className="cart-product">
           <div className="img-container">
            <img src={item.img} alt=""/>
           </div>
           <div className="prod-details">
             <div className="prod-detail">
            <span className="name">{item.name}</span>
            <span className="price">&#8377; {item.price}</span></div>
            <MdDelete className="closebtn" onClick={() => {handleRemoveFromCart(item)}}/>
           </div>
        </div>
      ))}
     </div>
    </>
    );
};

export default CartItem;

// import "./CartItem.scss";
// import { MdDelete } from "react-icons/md"
// import prod from "../../../assets/products/headphone-prod-1.webp"
// import { Popular } from "../../data"

// const CartItem = () => {

//     return(
//     <>
//      <div className="cart-products">
//         <div className="cart-product">
//            <div className="img-container">
//             <img src={Popular[8].img} alt=""/>
//            </div>
//            <div className="prod-details">
//             <span className="name">{Popular[8].name}</span>
//             <MdDelete className="closebtn" />
//            </div>
//         </div>
//      </div>
//     </>
//     );
// };

// export default CartItem;
