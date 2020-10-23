import axios from 'axios';
import baseUrl from '../utils/constant';
const instance = axios.create({
  baseURL: baseUrl + `api/`,
});


instance.interceptors.request.use(
    function(config) {
      const token = localStorage.getItem("access_token");
      if (token) {
        config.headers["Authorization"] = 'Bearer ' + token;
      }
      return config;
    },
    function(error) {
      return Promise.reject(error);
    }
  );

  export default instance;
