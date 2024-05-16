import React from "react";
import useCounter from "../../Hooks/useCounter";

const ItemCount = ({ stock, initialValue, onAdd, maxAvailable }) => {
  const { count, incrementar, decrementar } = useCounter(initialValue, stock, maxAvailable);

  return (
    <div className="flex items-center justify-center mt-4">
      <button
        onClick={decrementar}
        className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-l mx-1"
      >
        -
      </button>
      <p className="text-gray-800 font-semibold">{count}</p>
      <button
        onClick={incrementar}
        className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-r mx-1"
      >
        +
      </button>
      <button
        className="ml-4 bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded"
        onClick={() => onAdd(count)}
      >
        
          Agregar al carrito
        
      </button>
    </div>
  );
};

export default ItemCount;
