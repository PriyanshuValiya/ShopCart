import { useEffect, useContext } from "react";

import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
import { Context } from "../../utils/context";

const Home = () => {

    return(
        <>
        <Banner />
        <div className="main-content">
            <div className="layout">
             <Category />
             <Products/>
            </div>
        </div>
        </>
    )
};

export default Home;