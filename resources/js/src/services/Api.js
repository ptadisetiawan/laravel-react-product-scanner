import axios from 'axios';

export default axios.create({
  baseURL: `https://verifapp.herokuapp.com/`
});
