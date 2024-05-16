import React, { useContext, useState } from "react";
import Context from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import { db } from "../../config/firebase";
import {
  Timestamp,
  addDoc,
  collection,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import Swal from "sweetalert2";

const Checkout = () => {
  const [user, setUser] = useState({
    name: "",
    phone: "",
    city: "",
    email: "",
    repeatedEmail: "",
  });
  const [emailMatch, setEmailMatch] = useState(true);
  const [error, setError] = useState({});
  const { cart, getTotal, clearCart } = useContext(Context);
  const updateUser = (event) => {
    setUser((user) => ({
      ...user,
      [event.target.name]: event.target.value,
    }));
  };
  const navigate = useNavigate();
  const validateEmails = () => {
    if (user.email === user.repeatedEmail) {
      setEmailMatch(true);
    } else {
      setEmailMatch(false);

      Swal.fire({
        title: "Error",
        text: `Los email no coinciden`,
        icon: "error",
        confirmButtonText: "Confirmar",
      });
    }
  };
  const validateForm = () => {
    const errors = {};
    if (!user.name) {
      errors.name = "Tenes que agregar un Nombre";
    }
    if (user.phone.length < 10 || user.phone.length > 14) {
      errors.phone = "Ingrese un numero valido";
    }
    if (!user.city) {
      errors.city = "Tenes que agregar una Ciudad";
    }
    if (!emailMatch) {
      errors.emailMatch = "Los email deben coincidir";
    }
    setError(errors);
    return Object.keys(errors).length === 0;
  };
  const getOrder = async () => {
    const isFormValid = validateForm();
    if (isFormValid) {
      validateEmails();
      if (emailMatch) {
        const ordersCollection = collection(db, "orders");
        let orderDocRef;
        try {
          for (const item of cart) {
            const productRef = doc(db, "productos", item.id);
            const productDoc = await getDoc(productRef);
            const currentStock = productDoc.data().stock;
            if (currentStock >= item.quantity) {
              await updateDoc(productRef, {
                stock: currentStock - item.quantity,
              });
            } else {
              Swal.fire({
                title: "Error de compra",
                text: `No hay suficiente stock de: ${item.nombre}`,
                icon: "error",
                confirmButtonText: "Confirmar",
              });
            }
          }
          const order = {
            buyer: user,
            cart: cart,
            total: getTotal(),
            fechaDeCompra: Timestamp.now(),
          };
          orderDocRef = await addDoc(ordersCollection, order);
          Swal.fire({
            title: "Gracias por tu compra",
            text: `El número de orden es: ${orderDocRef.id}`,
            icon: "success",
            confirmButtonText: "Confirmar",
          }).then(() => {
            clearCart();
            navigate("/");
          });
        } catch (error) {
          console.error("Error al procesar la compra:", error);
        }
      }
    } else {
      Swal.fire({
        title: "Error de compra",
        text: `Completa los campos de manera correcta!!`,
        icon: "error",
        confirmButtonText: "Confirmar",
      });
    }
  };
  
  return (
    <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
      <form action="#" className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12 xl:gap-16">
          <div className="min-w-0 flex-1 space-y-8">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Detalles de envío
              </h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="tu_nombre"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Tu nombre{" "}
                  </label>
                  <input
                    type="text"
                    name="name"
                    onChange={updateUser}
                    id="tu_nombre"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                    placeholder="Lexa"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="tu_correo"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Tu correo electrónico*{" "}
                  </label>
                  <input
                    type="email"
                    name="email"
                    onChange={updateUser}
                    id="tu_correo"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                    placeholder="nombre@gmail.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="tu_correo"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Repite tu correo electrónico*{" "}
                  </label>
                  <input
                    type="email"
                    name="repeatedEmail"
                    onChange={updateUser}
                    id="tu_correo"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                    placeholder="nombre@gmail.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="numero_telefono"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Número de teléfono*{" "}
                  </label>
                  <div className="flex items-center">
                    <input
                      type="tel"
                      name="phone"
                      onChange={updateUser}
                      id="numero_telefono"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      placeholder="234 567 8910"
                      required
                    />
                  </div>
                </div>
                <div>
                  <div className="mb-2 flex items-center gap-2">
                    <label
                      htmlFor="select-pais-input"
                      className="block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      País*{" "}
                    </label>
                  </div>
                  <select
                    id="select-pais-input"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                  >
                    <option defaultValue="Argentina">Argentina</option>
                    <option value="Brasil">Brasil</option>
                    <option value="Colombia">Colombia</option>
                    <option value="Guyana">Guyana</option>
                    <option value="Surinam">Surinam</option>
                    <option value="Venezuela">Venezuela</option>
                    <option value="Bolivia">Bolivia</option>
                    <option value="Chile">Chile</option>
                    <option value="Ecuador">Ecuador</option>
                    <option value="Pero">Peru</option>
                    <option value="Uruguay">Uruguay</option>
                  </select>
                </div>
                <div>
                  <div className="mb-2 flex items-center gap-2">
                    <label
                      htmlFor="select-ciudad-input"
                      className="block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Ciudad*{" "}
                    </label>
                  </div>
                  <div>
                    <input
                      type="text"
                      name="city"
                      onChange={updateUser}
                      id="tu_nombre"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      placeholder="Cordoba"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          type="button"
          onClick={(event) => getOrder(event)}
          className="mt-6 w-full py-3 text-white text-sm font-medium rounded-lg bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-400"
        >
          Finalizar la compra
        </button>
      </form>
    </section>
  );
};
export default Checkout;
