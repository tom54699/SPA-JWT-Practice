import { checkUrl } from "./main.js"
import {errorPageGenerate,successPageGenerate,loginPageGenerate} from "./pageGenerate.js"


async function checkStatus(status = "normal"){
    try{
        let headers = {
            "Content-Type": "application/json",
            "Accept": "application/json",
        }
        let config = {
            method: "GET",
            headers: headers,
        }
        let response = await fetch("/login",config)
        let checkStatusData = await response.json()
        console.log("後端checkStatus回傳的資料",checkStatusData)
        // 回傳資料如果status是error
        let popstate = "popstate"
        if(checkStatusData["status"] == "success"){
            //checkUrl(status)
            if(window.location.href == "http://127.0.0.1:5000/gamePage"){
                gamePageGenerate(popstate)
            }
            if(window.location.href == "http://127.0.0.1:5000/enterGamePage"){
                successPageGenerate(popstate)
            }
        }
        if(checkStatus["status"] == "error"){
            loginPageGenerate(status)
        }
    }
    catch(err){
        console.log("Something Wrong:",err)
    }
}
export{checkStatus}

