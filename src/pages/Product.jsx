import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/Shopcontext";

const Product = () => {
  const { productId } = useParams;
  const { products } = useContext(ShopContext);
  const { productData, setProductData } = useState(flase);
  const fetchProductData = async () => {};

  useEffect(() => {
    fetchProductData();
  }, [productId]);
  return <div></div>;
};

export default Product;
