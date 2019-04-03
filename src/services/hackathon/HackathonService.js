import axios from '@/axios-app'

const create = (hackathon, callback) => {
  axios.post('/api/hackathons', hackathon)
    .then(callback)
    .catch(error => console.log(error))
}

const list = (callback) => {
  axios.get('/api/hackathons')
    .then(callback)
    .catch(error => console.log(error))
    .then(() => {
      console.log('done invocation')
    })
}

export default {
  create, list
}
