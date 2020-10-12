import React, { createContext, useState, useEffect } from 'react';

export const authContext = createContext({});

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ loading: true, access_token: null, user: null });

  const setAuthData = (data) => {
      if(data){
        setAuth({access_token: data.access_token, user: data.user});
      }else{
          setAuth({access_token: null, user: null });
      }
  };

  useEffect(() => {
    setAuth({ loading: false, access_token: JSON.parse(window.localStorage.getItem('access_token')),
    user : JSON.parse(window.localStorage.getItem('user'))
    });
  }, []);
//2. if object with key 'authData' exists in localStorage, we are putting its value in auth.data and we set loading to false.
//This function will be executed every time component is mounted (every time the user refresh the page);

  useEffect(() => {
    window.localStorage.setItem('access_token', JSON.stringify(auth.access_token));
    window.localStorage.setItem('user', JSON.stringify(auth.user));
  }, [auth]);
// 1. when **auth.data** changes we are setting **auth.data** in localStorage with the key 'authData'.

  return (
    <authContext.Provider value={{ auth, setAuthData }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;
