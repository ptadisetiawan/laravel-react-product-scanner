import axios from 'axios';
const instance = axios.create({
  baseURL: `api/`,
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
