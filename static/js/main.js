import {checkStatus} from "./checkStatus.js"
import {getLoginButtons} from "./login.js"
import {getEnterGamePageButtons} from "./success.js"
import {errorPageGenerate,successPageGenerate,loginPageGenerate,gamePageGenerate} from "./pageGenerate.js"

// 註冊檢查有無登入狀態
window.addEventListener("DOMContentLoaded",function(){
    getLoginButtons()
    window.history.replaceState("/","JWT DEMO","/")  // 剛登入length就會是1，所以用replace
    checkUrl()
    //checkStatus()
})


// checkUrl
export function checkUrl(status = "normal"){
    try{
        let url = document.getElementById("url")
        console.log(url.innerHTML)
        if(url.innerHTML == "/error"){
            errorPageGenerate(status)
        }
        if(url.innerHTML == "/gamePage"){
            gamePageGenerate(status)
        }
        if(url.innerHTML == "/enterGamePage"){
            successPageGenerate(status)
        }
    }
    catch(err){
        console.log("Something Wrong:",err)
        let problem = err
        errorPageGenerate(problem,status)
    }

}

// popstate 如果status是popstate改成replacestate
window.addEventListener('popstate',function () {
    console.log("觸發popstate")
    let popstate = "popstate"
    try{
        if(window.location.href == "http://127.0.0.1:5000/"){
            //checkStatus(popstate)
            loginPageGenerate(popstate)
        }
        if(window.location.href == "http://127.0.0.1:5000/enterGamePage"){
            checkStatus(popstate)
            //successPageGenerate(popstate)
        }
        if(window.location.href == "http://127.0.0.1:5000/gamePage"){
            checkStatus(popstate)
            //gamePageGenerate(popstate)
        }
        if(window.location.href == "http://127.0.0.1:5000/error"){
            errorPageGenerate("error",popstate)
        }
    }
    catch(err){
        console.log("Something Wrong:",err)
        let problem = err
        errorPageGenerate(problem,popstate)
    }
})