import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductsById } from '../Data/asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const { productId } = useParams()

    useEffect(() => {
        getProductsById(productId)
            .then((prod) => setProducto(prod))
            .catch((error) => console.error(error))
    }, [productId])

    

    return (
        <div className="bg-gray-400">
            <div className="mx-0 w-full px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10">
                    {producto && Object.keys(producto).length > 0 && <ItemDetail {...producto} />}
                </div>
            </div>
        </div>
    )
}

export default ItemDetailContainer
