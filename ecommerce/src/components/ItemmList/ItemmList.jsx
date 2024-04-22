import React from "react";
import Item from "../Item/Item";
const ItemmList = ({ products }) => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
          {products.map((elem) => (
            <div key={elem.id}>
              <h2 className="text-xl font-bold mb-2">{elem.nombre}</h2>
              <Item {...elem} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemmList;
