import axiosInstance from '@/axios-app'

function logIn (data, callBack) {
  axiosInstance.post('auth/login', data).then(callBack).catch(error => {
    console.log(error)
  })
}

async function logOut () {
  await axiosInstance.post('auth/logout').then().catch(error => {
    throw new Error(error)
  })
  return 'logout success'
}

export default { logIn, logOut }
