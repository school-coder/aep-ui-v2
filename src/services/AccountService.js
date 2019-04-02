import axiosInstance from '@/axios-app'

const getAccount = (accountCallback) => {
  axiosInstance.get('api/account').then(accountCallback
  ).catch(error => {
    console.log(error)
  })
}

const createAccount = async (user) => {
  await axiosInstance.post('api/register', user).catch(error => {
    throw new Error(error)
  })
  return 'Account created'
}

export default {
  getAccount, createAccount
}
