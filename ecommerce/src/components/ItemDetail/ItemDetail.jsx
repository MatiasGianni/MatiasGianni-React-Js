import React, { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import Context from "../../context/CartContext";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useCounter from "../../Hooks/useCounter";

const ItemDetail = ({
  nombre,
  precio,
  categoria,
  stock,
  descripcion,
  img,
  id,
  currentQuantity
}) => {
  const initialValue = 1;
 const [ quantity, setQuantity] = useState(0)
  const { addItem } = useContext(Context);

  const onAdd = (quantity) => {
    const item = {
      id,
      nombre,
      precio,
      stock,
      img
    };
    setQuantity(quantity)
    addItem(item, quantity);
    toast(`Agregaste ${quantity} unidades`);
  };

  const maxAvailable = stock - currentQuantity;

  return (
    <div className="flex justify-center items-center h-full">
      <div className="group relative w-3/4">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">{nombre}</h3>
        <div className="lg:flex lg:justify-between">
          <div className="w-full lg:w-1/2 mb-4 lg:mr-4">
            <img
              src={img}
              alt={nombre}
              className="h-auto w-full object-cover rounded-md shadow-md"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <p className="text-gray-750 mb-2">{descripcion}</p>
            <p className="text-gray-750 mb-2">Stock: {stock}</p>
            <p className="text-gray-800 font-bold">Precio: ${precio}</p>
            
            {
              quantity > 0 ?
              <div className="flex space-x-4">
              <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded transition duration-300">
                <Link to="/cart" className="no-underline text-white">
                  Ir al carrito
                </Link>
              </button>
              <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded transition duration-300">
                <Link to="/" className="no-underline text-white">
                  Seguir comprando
                </Link>
              </button>
            </div>
              :
              <ItemCount stock={stock} initialValue={1} onAdd={onAdd} maxAvailable={maxAvailable}/>
            }
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
export default ItemDetail;
