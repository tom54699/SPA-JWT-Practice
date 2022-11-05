import {errorPageGenerate,gamePageGenerate,loginPageGenerate,successPageGenerate} from "./pageGenerate.js"
import {getAccessToken,storeAccessToken} from "./token.js"

console.log("success.js執行")
/*
function clock(){
    window.setInterval(( () => console.log("Hello!success") ), 5000)
}
clock()
*/
// 註冊成功畫面的進入遊戲按鈕+ // Logout Button
export function getEnterGamePageButtons(){
    console.log("註冊成功畫面按鈕")
    let enterGame = document.getElementById("enterGame")
    enterGame.addEventListener("click",function(){
        enterGamePage()
    })
    let logoutButton = document.getElementById("logoutButton")
    logoutButton.addEventListener("click",function(){
        logout()
    })
}


// 遊戲頁面api判斷資格
export async function enterGamePage(){
    try{
        let headers = {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization" : `Bearer ${getAccessToken()}`,
        }
        console.log(headers)
        let config = {
            method: "GET",
            headers: headers,
        }
        let response = await fetch("/enterGamePage",config)
        let enterGamePageData = await response.json()
        console.log("後端enterGamePage回傳的資料",enterGamePageData)
        // 回傳資料如果status是error
        if(enterGamePageData["status"] == "error"){
            let problem = enterGamePageData["problem"]
            errorPageGenerate(problem)
        }
        if(enterGamePageData["status"] == "success"){
            gamePageGenerate()
        }
        if(enterGamePageData["msg"] == "Token has expired" || enterGamePageData["msg"] == "Not enough segments"){
            refreshAccessToken()
            enterGamePage()
        }
    }
    catch(err){
        console.log("Something Wrong:",err)
        let problem = err
        errorPageGenerate(problem)
    }
}



export async function logout(){
    try{
        let headers = {
            "Content-Type": "application/json",
            "Accept": "application/json",
        }
        let config = {
            method: "GET",
            headers: headers,
        }
        let response = await fetch("/logout",config)
        let loginData = await response.json()
        console.log("後端logout回傳的資料",loginData)
        // 回傳資料如果status是error
        if(loginData["status"] == "error"){
            let problem = loginData["problem"]
            errorPageGenerate(problem)
        }
        if(loginData["status"] == "success"){
            loginPageGenerate()
        }
    }
    catch(err){
        console.log("Something Wrong:",err)
        let problem = err
        errorPageGenerate(problem)
    }
}

// 換發access_token
export async function refreshAccessToken(){
    try{
        let headers = {
            "Content-Type": "application/json",
            "Accept": "application/json",
        }
        let config = {
            method: "GET",
            headers: headers,
        }
        let response = await fetch("/refresh",config)
        let refreshData = await response.json()
        console.log("後端refresh回傳的資料",refreshData)
        let access_token = refreshData["access_token"]
        if(refreshData["status"] == "success"){
            storeAccessToken(access_token)
        }
        else{
            let problem = "UNKNOWN ERROR !! YOU HAVE BEEN CURSED !!!!"
            errorPageGenerate(problem)
        }
    }
    catch(err){
        console.log("Something Wrong:",err)
        let problem = err
        errorPageGenerate(problem)
    }
}



