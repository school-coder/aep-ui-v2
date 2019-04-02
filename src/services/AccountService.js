import axiosInstance from '@/axios-app'

const getAccount = (accountCallback) => {
  axiosInstance.get('api/account').then(accountCallback
  ).catch(error => {
    console.log(error)
  })
}

export default {
  getAccount
}
