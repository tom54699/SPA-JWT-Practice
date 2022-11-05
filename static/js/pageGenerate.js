import {getLoginButtons} from "./login.js"
import {getEnterGamePageButtons} from "./success.js"
import {getGameButton,getZombieButton,getVampireButton,getCaveButton,getBackGamePageButton} from "./game.js"
// 產生logon頁面
function loginPageGenerate(status){
    let htmlTitleNode = document.getElementById("htmlTitle")
    let indexMainNode = document.getElementById("indexMain")
    let bannerTitleNode = document.getElementById("bannerTitle")
    let htmlTitle = `JWT DEMO`
    let cssNode = document.getElementById("css")
    cssNode.setAttribute("href","/static/css/index.css")
    let bannerTitle = `JWT LOGIN`
    let loginPage = `    <div>
    <div>Secret Password</div>
    <div>
        <input id="passwordInput" type="text" name="password" placeholder="輸入錯誤會通往地獄"/>
        <button id="loginButton">確定進入</button>
    </div>
</div>` 
    // pushstate要在title改變前 不然會記錄到錯誤的title
    if(status == "popstate"){
        // pass
    }
    else{
        window.history.pushState("/","JWT DEMO","/")
    }
    htmlTitleNode.innerHTML = htmlTitle
    bannerTitleNode.innerHTML = bannerTitle
    indexMainNode.innerHTML = loginPage 
    getLoginButtons()
}
// 產生error頁面的function
function errorPageGenerate(problem,status="normal"){
    console.log("生成錯誤畫面")
    let htmlTitleNode = document.getElementById("htmlTitle")
    let indexMainNode = document.getElementById("indexMain")
    let bannerTitleNode = document.getElementById("bannerTitle")
    let htmlTitle = `ERROR`
    let bannerTitle = `Ready To Die?`
    let errorPage = `<div class="shake-crazy shake-freeze">
    <div>FATAL ERROR</div>
    <div>
        <div>${problem}</div>
    </div>
    </div>`
    if(status == "popstate"){
        // pass
    }
    else{
        window.history.pushState("error","ERROR","error")
    }
    htmlTitleNode.innerHTML = htmlTitle
    bannerTitleNode.innerHTML = bannerTitle
    indexMainNode.innerHTML = errorPage
}

// 產生成功進入的頁面
function successPageGenerate(status){
    let htmlTitleNode = document.getElementById("htmlTitle")
    let indexMainNode = document.getElementById("indexMain")
    let bannerTitleNode = document.getElementById("bannerTitle")
    let htmlTitle = `Success`
    let cssNode = document.getElementById("css")
    cssNode.setAttribute("href","/static/css/success.css")
    let bannerTitle = `Are You Ready?`
    let successPage = `<div>
    <div class="shake-crazy">Choose Or Die!!!</div>
    <div>
        <div id="enterGame">Play A Game</div>
        <div id="divination">Divination</div>
        <div id="toDoList">Death List</div>
    </div>
    <button id="logoutButton">I'm Gonna Leave !!</button>
</div>`
    if(status == "popstate"){
        // pass
    }else{
        window.history.pushState("enterGamePage","Success","enterGamePage")
    }
    htmlTitleNode.innerHTML = htmlTitle
    bannerTitleNode.innerHTML = bannerTitle
    indexMainNode.innerHTML = successPage
    getEnterGamePageButtons()  
}
// 產生遊戲頁面
function gamePageGenerate(status){
    let htmlTitleNode = document.getElementById("htmlTitle")
    let indexMainNode = document.getElementById("indexMain")
    let bannerTitleNode = document.getElementById("bannerTitle")
    let htmlTitle = `Play 殺虫 Game`
    let cssNode = document.getElementById("css")
    cssNode.setAttribute("href","/static/css/playGame.css")
    let bannerTitle = `Do You Want To Play A Game?`
    let gamePagePage = `<div>
    <div>Choose Your Destination</div>
    <section>
        <img id="graveyard" class="shake" src="/static/pic/graveyard.jpg"/>
        <img id="castle" class="shake" src="/static/pic/castle.jpg"/>
        <img id="cave" class="shake" src="/static/pic/cave.jpg"/>
    </section>
    <a class="shake" id="homepage">Home Page</a>
    </div>`
    if(status == "popstate"){
        // pass
    }
    else{
        window.history.pushState("gamePage","Play 殺虫 Game","gamePage")
    }
    htmlTitleNode.innerHTML = htmlTitle
    bannerTitleNode.innerHTML = bannerTitle
    indexMainNode.innerHTML = gamePagePage
    getGameButton()
}



export {errorPageGenerate, successPageGenerate, gamePageGenerate,loginPageGenerate}


// 遊戲畫面渲染

export function zombiePageGenerate(){
    let indexMainNode = document.getElementById("indexMain")
    let bannerTitleNode = document.getElementById("bannerTitle")
    let cssNode = document.getElementById("css")
    cssNode.setAttribute("href","/static/css/game.css")
    let bannerTitle = `殭屍來了`
    let gamePagePage = `<div>
    <section>
        <img id="graveyard" class="shake" src="/static/pic/zombie.jpg"/>
    </section>
    <div>You Choose...</div>
    <div>
        <div><div id="run" class="shake">Run</div></div>
        <div><div id="fight" class="shake">Fight</div></div>
    </div>
    </div>`
    bannerTitleNode.innerHTML = bannerTitle
    indexMainNode.innerHTML = gamePagePage
    getZombieButton()
}

export function vampirePageGenerate(){
    let indexMainNode = document.getElementById("indexMain")
    let bannerTitleNode = document.getElementById("bannerTitle")
    let cssNode = document.getElementById("css")
    cssNode.setAttribute("href","/static/css/game.css")
    let bannerTitle = `Treasure Fond`
    let gamePagePage = `<div>
    <section>
        <img id="graveyard" class="shake" src="/static/pic/treasure.jpg"/>
    </section>
    <div>You Choose...</div>
    <div>
        <div><div id="take" class="shake">Take It</div></div>
        <div><div id="run" class="shake">Run</div></div>
    </div>
    </div>`
    bannerTitleNode.innerHTML = bannerTitle
    indexMainNode.innerHTML = gamePagePage
    getVampireButton()
}

export function cavePageGenerate(){
    let indexMainNode = document.getElementById("indexMain")
    let bannerTitleNode = document.getElementById("bannerTitle")
    let cssNode = document.getElementById("css")
    cssNode.setAttribute("href","/static/css/game.css")
    let bannerTitle = `你看到了湯婆婆`
    let gamePagePage = `<div>
    <section>
        <img id="graveyard" class="shake" src="/static/pic/oldwoman.jpg"/>
    </section>
    <div>You Choose...</div>
    <div>
        <div><div id="work" class="shake">Surrender</div></div>
        <div><div id="run" class="shake">Run</div></div>
    </div>
    </div>`
    bannerTitleNode.innerHTML = bannerTitle
    indexMainNode.innerHTML = gamePagePage
    getCaveButton()
}

// 死掉或活下來事件渲染

export function diePageGenerate(jpg,words){
    let indexMainNode = document.getElementById("indexMain")
    let bannerTitleNode = document.getElementById("bannerTitle")
    //let cssNode = document.getElementById("css")
    //cssNode.setAttribute("href","/static/css/game.css")
    let bannerTitle = `You Died`
    let gamePagePage = `<div>
    <section>
        <img id="graveyard" class="shake" src="/static/pic/${jpg}"/>
    </section>
    <div>${words}</div>
    <a class="shake" id="gamePage">Game Page</a>
    </div>`
    bannerTitleNode.innerHTML = bannerTitle
    indexMainNode.innerHTML = gamePagePage
    getBackGamePageButton()
}

export function livePageGenerate(){
    let indexMainNode = document.getElementById("indexMain")
    let bannerTitleNode = document.getElementById("bannerTitle")
    //let cssNode = document.getElementById("css")
    //cssNode.setAttribute("href","/static/css/game.css")
    let bannerTitle = `You Survived`
    let gamePagePage = `<div>
    <section>
        <img id="graveyard" class="shake" src="/static/pic/zombie_fight.jpg"/>
    </section>
    <div>You Win The Battle, But Lose Your Right Arm!</div>
    <a class="shake" id="gamePage">Game Page</a>
    </div>`
    bannerTitleNode.innerHTML = bannerTitle
    indexMainNode.innerHTML = gamePagePage
    getBackGamePageButton()
}

export function richPageGenerate(){
    let indexMainNode = document.getElementById("indexMain")
    let bannerTitleNode = document.getElementById("bannerTitle")
    //let cssNode = document.getElementById("css")
    //cssNode.setAttribute("href","/static/css/game.css")
    let bannerTitle = `You Survived`
    let gamePagePage = `<div>
    <section>
        <img id="graveyard" class="shake" src="/static/pic/greedy.jpg"/>
    </section>
    <div>Always Greedy , Never Hungry!</div>
    <a class="shake" id="gamePage">Game Page</a>
    </div>`
    bannerTitleNode.innerHTML = bannerTitle
    indexMainNode.innerHTML = gamePagePage
    getBackGamePageButton()
}

export function namePageGenerate(){
    let indexMainNode = document.getElementById("indexMain")
    let bannerTitleNode = document.getElementById("bannerTitle")
    //let cssNode = document.getElementById("css")
    //cssNode.setAttribute("href","/static/css/game.css")
    let bannerTitle = `You Lose Your Name`
    let gamePagePage = `<div>
    <section>
        <img id="graveyard" class="shake" src="/static/pic/work.jpg"/>
    </section>
    <div>不管你是誰，你以後都叫做小千了</div>
    <a class="shake" id="gamePage">Game Page</a>
    </div>`
    bannerTitleNode.innerHTML = bannerTitle
    indexMainNode.innerHTML = gamePagePage
    getBackGamePageButton()
}

