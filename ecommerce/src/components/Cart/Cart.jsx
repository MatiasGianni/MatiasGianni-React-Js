import React, { useContext } from "react";
import Context from "../../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, getTotal, removeItem, clearCart } = useContext(Context);
  if (cart.length === 0) {
    return (
      <div className="text-3xl font-bold mb-8 text-center mt-10">
        <h2>Todavia no agregaste productos.</h2>
        <button className="text-xl font-semibold bg-gray-800 text-white py-2 px-4 rounded-lg mt-4">
          <Link to="/">Ver productos!!!</Link>
        </button>
      </div>
    );
  } else {
    return (
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 text-gray-300">
                Producto
              </th>
              <th scope="col" className="px-6 py-3 text-gray-300">
                Cantidad
              </th>
              <th scope="col" className="px-6 py-3 text-gray-300">
                Precio
              </th>
              <th scope="col" className="px-6 py-3 text-gray-300">
                Subtotal
              </th>
              <th scope="col" className="px-6 py-3 text-gray-300"></th>
            </tr>
          </thead>
          <tbody className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            {cart.map((prod) => (
              <tr key={prod.id}>
                <td className="px-6 py-4 text-gray-300">{prod.nombre}</td>
                <td className="px-6 py-4 text-gray-300">{prod.quantity}</td>
                <td className="px-6 py-4 text-gray-300">${prod.precio}</td>
                <td className="px-6 py-4 text-gray-300">
                  ${prod.precio * prod.quantity}
                </td>
                <td className="px-6 py-4 text-gray-300">
                  <button onClick={() => removeItem(prod.id)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-center items-center mt-4 space-x-4">
          <p className="text-black-300">Total: ${getTotal()}</p>
          <button
            onClick={() => clearCart()}
            className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-600"
          >
            Vaciar Carrito
          </button>
          <button className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-600">
            <Link to="/checkout">
            Finalizar compra
            </Link>
          </button>
        </div>
      </div>
    );
  }
};
export default Cart;
