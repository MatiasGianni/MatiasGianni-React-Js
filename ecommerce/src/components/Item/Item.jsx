import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Item = ({ nombre, precio, img, categoria, id,stock }) => {
    const [valid,setValid] = useState(true)

    useEffect(() =>{
      const NotStock = () => {
        if(stock === 0){
          setValid(false)
        } else{
          setValid(true)
        }
      }
      NotStock()
    })

  return (
    <div className="group relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <img
          src={img}
          alt={nombre}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-900">
            {categoria}
          </h3>
        </div>
        <p className="text-sm font-medium text-gray-900">Stock:${stock}</p>
        <p className="text-sm font-medium text-gray-900">${precio}</p>

        {
          valid ?
        <button className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-1 px-1 rounded">
          <Link to={`/producto/${id}`} className="text-white cursor-pointer">
            Ver info
          </Link>
        </button>
        :
        <button
          className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-1 px-1 rounded cursor-not-allowed"
          disabled
        >
          Sin Stock
        </button>

        }

      </div>
    </div>
  );
};

export default Item;
