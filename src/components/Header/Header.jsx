import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom"
import "./Header.scss";
import { FaSearch, FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { BsCart2 } from "react-icons/bs";
import Search from "./Search/Search";
 import Cart from "../Cart/Cart";

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [liked, setLiked] = useState(false);
  const navigate = useNavigate();

    return(
        <>
          <header className="main-header">
            <div className="header-content">
                <ul className="left">
                    <li onClick={() => navigate("/")}>Home</li>
                    <li>About</li>
                    <li>Categories</li>
                </ul>
                <div className="center">ShopCart</div>
                <div className="right">
                 <FaSearch onClick={() => {setShowSearch(!showSearch)}}/>
                 {(liked === false) ? <FaRegHeart onClick={() => setLiked(!liked)}/> : <FaHeart onClick={() => setLiked(!liked)} />}
                 <BsCart2 className="cart-icon" onClick={() => navigate("/cart")} />
                </div>
            </div>
          </header>
          {showSearch && <Search setShowSearch={setShowSearch}/>}
        </>
    )
};

export default Header;