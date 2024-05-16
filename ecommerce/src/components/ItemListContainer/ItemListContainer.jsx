import React, { useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from "../Data/asyncMock";
import ItemmList from "../ItemmList/ItemmList";
import { useParams } from "react-router-dom";
import { PacmanLoader } from 'react-spinners';
import { db } from "../../config/firebase";
import { collection, query, where, getDocs, doc } from "firebase/firestore";

const ItemListContainer = ({ title }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true)

    const getData = async () => {
      let coleccion = collection(db, "productos")

      const queryRef = !categoryId ? 
      coleccion 
      : 
      query(coleccion, where('categoria', '==', categoryId))

      const response = await getDocs(queryRef)

      const productos = response.docs.map((doc) => {
        const newItem = {
          ...doc.data(),
          id: doc.id
        }
        return newItem
      })
      setProducts(productos)
      setLoading(false)
    }
    getData()
  }, [categoryId])

  return (
    <div className="text-center bg-gray-400">
      <h1 className="text-2xl font-bold mt-8">{title}</h1>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
        <PacmanLoader
        color="#2d3748"
        cssOverride={{}}
        loading
        margin={7}
        size={50}
        speedMultiplier={2}
        />
        </div>
      ) : (
        <ItemmList products={products} />
      )}
    </div>
  );
};

export default ItemListContainer;
