import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/Shopcontext";

const RelatedProduct = ({ category, subcategory }) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let productsCopy = products.slice();
      productsCopy = productsCopy.filter((item) => category == item.category);
      productsCopy = productsCopy.filter((item) => subcategory == item.subcategory);
      console.log(productsCopy.slice(0, 5));
    }
  }, [products]);
  return <div></div>;
};

export default RelatedProduct;
