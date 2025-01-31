import { createContext, useState } from "react"; 
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null); // ✅ Named Export

const StoreContextProvider = ({ children }) => {  // ✅ Destructure props
    const [cartItems, setCartItems] = useState({});

    const addToCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: prev[itemId] ? prev[itemId] + 1 : 1, // ✅ Single setState logic
        }));
    };

    const removeFromCart = (itemId) => {
        if (cartItems[itemId] > 1) {
            setCartItems((prev) => ({
                ...prev,
                [itemId]: prev[itemId] - 1,
            }));
        } else {
            const newCart = { ...cartItems };
            delete newCart[itemId]; // ✅ Remove item if 0
            setCartItems(newCart);
        }
    };

    const getTotalCartAmount = () => {
        return Object.keys(cartItems).reduce((total, itemId) => {
            const itemInfo = food_list.find((product) => product._id === itemId);
            return total + (itemInfo ? itemInfo.price * cartItems[itemId] : 0);
        }, 0);
    };

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
