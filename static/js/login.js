
import {errorPageGenerate,successPageGenerate,loginPageGenerate,gamePageGenerate} from "./pageGenerate.js"
import {getAccessToken,storeAccessToken} from "./token.js"


console.log("index.js執行")
/*
function clock(){
    window.setInterval(( () => console.log("Hello!index") ), 5000)
}
clock()
*/
// 註冊登入按鈕click事件 和 input內容
export function getLoginButtons(){
    let passwordInput = document.getElementById("passwordInput")
    let loginButton = document.getElementById("loginButton")
    let password
    passwordInput.addEventListener("input",function(e){
        password = e.target.value
    })

    loginButton.addEventListener("click",function(){
        login(password)
    })
}

// login API 用 
export async function login(password){
    try{
        let access_token = getAccessToken()
        let headers = {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization" : `Bearer ${access_token}`
        }
        let content = {
            "status": "ok",
            "password": password
        }
        let config = {
            method: "POST",
            headers: headers,
            body: JSON.stringify(content)
        }
        let response = await fetch("/login",config)
        let loginData = await response.json()
        console.log("後端login回傳的資料",loginData)
        // 回傳資料如果status是error
        if(loginData["status"] == "error"){
            let problem = loginData["problem"]
            errorPageGenerate(problem)
        }
        if(loginData["status"] == "success"){
            storeAccessToken(loginData["access_token"])
            // 音樂放起來
            let playaudio =document.getElementById("playAudio")
            playaudio.play();
            successPageGenerate()
            function clock(){
                window.setTimeout(( () => console.log("Token has expired") ), 60000)
            }
            clock()
        }
    }
    catch(err){
        console.log("Something Wrong:",err)
        let problem = err
        errorPageGenerate(problem)
    }
}


