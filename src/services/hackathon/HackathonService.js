import axios from '@/axios-app'

const create = (hackathon, callback) => {
  axios.post('/api/hackathons', hackathon)
    .then(callback)
    .catch(error => console.log(error))
}

export default {
  create
}
