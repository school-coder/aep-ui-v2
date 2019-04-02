import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://google.co.in/'
})

export default instance