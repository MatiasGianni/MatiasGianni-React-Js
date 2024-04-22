import React from 'react';

const ItemDetail = ({ nombre, precio, categoria, stock, descripcion, img }) => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="group relative w-3/4">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">{nombre}</h3>
        <div className="lg:flex lg:justify-between">
          {/* División para pantallas medianas y grandes */}
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
            <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail
