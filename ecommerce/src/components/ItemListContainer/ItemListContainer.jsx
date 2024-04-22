import React, { useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from "../Data/asyncMock";
import ItemmList from "../ItemmList/ItemmList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ title }) => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams()

  useEffect(() => {
    const fetchData = async () => {
        try {
            const dataProductos = categoryId ? await getProductsByCategory(categoryId) : await getProducts();
            setProducts(dataProductos);
        } catch (error) {
            console.log(error);
        }
    };

    fetchData();
}, [categoryId]);

  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold mt-8">{title}</h1>
      
      <ItemmList products={products} />
    </div>
  );
};

export default ItemListContainer;
