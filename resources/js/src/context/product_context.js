import React, { createContext, useState, useEffect } from 'react';
import Api from '../services/Api'
export const productContext = createContext({});
const initialProduct = { id: null,
    name: null,
    imageUrl: 'https://cdni.iconscout.com/illustration/premium/thumb/your-cart-is-empty-2161427-1815069.png',
    harga: 0,
    partai_1: null,
    harga_partai_1: null,
    partai_2: null,
    harga_partai_2:null,
    unit: null
}
const ProductProvider = ({ children }) => {
    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [product, setProduct] = useState(initialProduct)
    const [error, setError] = useState(null)
    const setProductListData = (data) => {
        if (data) {
            setProductList(data);
        } else {
            setProductList([]);
        }
    };

    const fetchProductApi = () => {
        setLoading(true)
        Api.get('/product').then((resp) => {
            setProductList(resp.data)
            setLoading(false)
            setError(null)
        }).catch((e) => {
            setError('Terjadi kesalahan mohon dicoba kembali')
            setLoading(false)
        })
    }

    const showProductApi = (id) => {
        setLoading(true)
        Api.get('/product/' + id).then((resp) => {
            setProduct({
                id: resp.data.id,
                name: resp.data.name,
                imageUrl: 'https://cdni.iconscout.com/illustration/premium/thumb/your-cart-is-empty-2161427-1815069.png',
                harga: resp.data.harga,
                partai_1: resp.data.partai_1,
                harga_partai_1: resp.data.harga_partai_1,
                partai_2: resp.data.partai_2,
                harga_partai_2: resp.data.harga_partai_2,
                unit: resp.data.unit
            })
            setLoading(false)
        }).catch((e) => {
            setError('Terjadi kesalahan mohon dicoba kembali')
            setLoading(false)
        })
    }

    return (
        <productContext.Provider value={{ productList, setProductListData, fetchProductApi, showProductApi, product, loading, error }}>
            {children}
        </productContext.Provider>
    );
};

export default ProductProvider;
