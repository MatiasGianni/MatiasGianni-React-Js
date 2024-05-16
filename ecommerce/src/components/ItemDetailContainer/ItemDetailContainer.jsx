import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductsById } from "../Data/asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { PacmanLoader } from "react-spinners";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebase";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});
  const [loading, setLoading] = useState(true);
  const { productId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getProduct = async () => {
      const quereRef = doc(db, "productos", productId);
      const response = await getDoc(quereRef);
      const newItem = {
        ...response.data(),
        id: response.id,
      };
      setProducto(newItem);
      setLoading(false);
    };
    getProduct();
  }, [productId]);

  return (
    <>
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
        <div className="bg-gray-400">
          <div className="mx-0 w-full px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10">
              {producto && Object.keys(producto).length > 0 && (
                <ItemDetail {...producto} />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ItemDetailContainer;
