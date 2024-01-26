import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const Context = createContext({
    handleAddToCart: () => {}, handleRemoveFromCart: () => {}   
});

const AppContext = ({children}) => {
    const [cartItems, setCartItems] = useState([]);
    const [cartSubTotal, setCartSubTotal] = useState(0);
    const location = useLocation();

    useEffect(() => {}, [cartItems])

    const handleAddToCart = (product, quantity) => {
        let items = [...cartItems];
        items = [product, ...items];
        setCartItems(items);
    }

    const handleRemoveFromCart = (product) => {
        let items = [...cartItems];
        items = items.filter(p => p.id2 !== product.id2);
        setCartItems(items);
    }

    return(
        <Context.Provider value={{cartItems, setCartItems, cartSubTotal, setCartSubTotal, handleAddToCart, handleRemoveFromCart}}>
            {children}
        </Context.Provider>
    )
}

export default AppContext
