import axiosInstance from '@/axios-app'

const getAccount = (accountCallback) => {
  axiosInstance.get('api/account').then(function (response) {
    console.log(response.data)
  }).catch(error => {
    console.log(error)
  })
}

export default {
  getAccount
}
