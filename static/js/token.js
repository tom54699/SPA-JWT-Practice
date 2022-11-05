// 存放access_token到sessionStorage
function storeAccessToken(data){
    window.sessionStorage.setItem("access_token",data)
}
// 拿access_token到sessionStorage
function getAccessToken(){
    const access_token = window.sessionStorage.getItem("access_token")
    return access_token
}

export {storeAccessToken,getAccessToken}
