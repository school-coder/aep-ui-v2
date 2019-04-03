import axios from '@/axios-app'

const create = (hackathon, callback) => {
  axios.post('/api/hackathons', hackathon)
    .then(callback)
    .catch(error => console.log(error))
}

const list = (hackathon, callback) => {
  axios.get('/api/hackathons', hackathon)
    .then(callback)
    .catch(error => console.log(error))
}

export default {
  create, list
}
