import React from "react";
import { Link } from "react-router-dom";


const Item = ({ nombre, precio, img, categoria, id }) => {



  return (
    <div className="group relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <img
          src={img}
          alt="Front of men&#039;s Basic Tee in black."
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            {categoria}
          </h3>
        </div>
        <p className="text-sm font-medium text-gray-900">${precio}</p>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded">
          <Link to={`/producto/${id}`} className="text-white cursor-pointer">
            Ver info
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Item;
