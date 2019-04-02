import axios from '@/axios-app'

const login = (callback) => {
  axios.get('/').then( callback ).catch( error => {
    console.log(error);
  });
}

export default {
    login
}