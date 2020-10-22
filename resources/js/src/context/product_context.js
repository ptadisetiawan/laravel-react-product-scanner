import React, { createContext, useState, useEffect } from 'react';
import Api from '../services/Api'
export const productContext = createContext({});

const ProductProvider = ({ children }) => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(false);

  const setProductListData = (data) => {
      if(data){
        //   console.log(data)
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
    }).catch((e) => {
        console.log(e.response)
        setLoading(false)
    })
  }

  return (
    <productContext.Provider value={{ productList, setProductListData, fetchProductApi, loading }}>
      {children}
    </productContext.Provider>
  );
};

export default ProductProvider;
