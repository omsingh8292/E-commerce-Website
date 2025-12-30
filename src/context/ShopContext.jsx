import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
export const ShopContext = createContext();
import { toast } from "react-toastify";
const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState("");
  const [showsearch, setShowSearch] = useState(false);

  const [cartItems, setCartItems] = useState({});
  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error("select product size");
      return;
    }
    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      if (cartItems[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    setCartItems(cartData);
  };
  const getCartCount = () => {
    let totalCount = 0;
 for(const items in cartItems){
  for(const item in cartItems[items]){
    try{
      if(cartItems[items][item]>0){
        totalCount += cartItems[items][item];
      }
      
    }
    catch(error){

    }
  }
 }
 return totalCount;
  };
  const value = {
    getCartCount,
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showsearch,
    setShowSearch,
    cartItems,
    addToCart,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
