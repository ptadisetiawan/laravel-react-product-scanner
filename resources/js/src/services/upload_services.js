import Axios from 'axios'
import baseUrl from '../utils/constant';
const upload = (file, onUploadProgress) => {
  let formData = new FormData();

  formData.append("file", file);
  const token = localStorage.getItem("access_token");
  return Axios.post(baseUrl + `api/product/import`, formData, {
    headers: {
        "Content-Type" : "multipart/form-data",
        "Authorization" : 'Bearer ' + token
    },
    onUploadProgress,
  });
};

// const getFiles = () => {
//   return http.get("/files");
// };

export default {
  upload,
//   getFiles,
};
