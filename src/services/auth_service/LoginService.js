import axiosInstance from '@/axios-app'

function logIn (data, callBack) {
  axiosInstance.post('auth/login', data).then(callBack).catch(error => {
    console.log(error)
  })
}

export default { logIn }
