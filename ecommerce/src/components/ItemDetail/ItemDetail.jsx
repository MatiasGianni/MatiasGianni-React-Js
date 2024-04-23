import React from "react";
import useCounter from "../../Hooks/useCounter";

const ItemDetail = ({ nombre, precio, categoria, stock, descripcion, img }) => {
  const initialValue = 1;
  const { count, incrementar, decrementar } = useCounter(initialValue, stock);

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

            <div className="flex items-center justify- mt-4">
              <button
                onClick={decrementar}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mx-2"
              >
                -
              </button>
              <p className="text-gray-800 font-semibold pr-2 pl-2">{count}</p>
              <button
                onClick={incrementar}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mx-2"
              >
                +
              </button>
            </div>

            <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
