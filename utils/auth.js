const tokenKey = 'JK-token'

export const setToken =(token)=>{
  //微信版setlocalStorage
    uni.setStorageSync(tokenKey,token)
}
export const getToken=()=>{
   //微信版setlocalStorage
  return uni.getStorageSync(tokenKey)||null
}
export const removeToken =  ()=>{
  uni.setStorageSync(tokenKey,'');
}