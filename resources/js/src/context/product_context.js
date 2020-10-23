import React, { createContext, useState, useEffect } from 'react';
import Api from '../services/Api'
export const productContext = createContext({});
const initialProduct = {id: null, name:null, imageUrl: 'https://cdni.iconscout.com/illustration/premium/thumb/your-cart-is-empty-2161427-1815069.png', harga:0}
const ProductProvider = ({ children }) => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState(initialProduct)
  const [error, setError] = useState(null)
  const setProductListData = (data) => {
      if(data){
        setProductList(data);
      }else{
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
        // console.log(resp.data)
        setProduct({
            id: resp.data.id,
            name: resp.data.name,
            imageUrl: 'https://cdni.iconscout.com/illustration/premium/thumb/your-cart-is-empty-2161427-1815069.png',
            harga: resp.data.harga
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
