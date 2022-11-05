import { zombiePageGenerate,diePageGenerate,livePageGenerate,richPageGenerate,vampirePageGenerate, namePageGenerate,cavePageGenerate,successPageGenerate,gamePageGenerate } from "./pageGenerate.js"

// 註冊第一頁按鈕

export function getGameButton(){
    let graveyard = document.getElementById("graveyard")
    let castle = document.getElementById("castle")
    let cave = document.getElementById("cave")
    let homepage = document.getElementById("homepage")

    graveyard.addEventListener("click",function(){
        zombiePageGenerate()
    })
    castle.addEventListener("click",function(){
        vampirePageGenerate()
    })
    cave.addEventListener("click",function(){
        cavePageGenerate()
    })
    homepage.addEventListener("click",function(){
        successPageGenerate()
    })
}

// 註冊遊戲事件按鈕
export function getZombieButton(){
    let fight = document.getElementById("fight")
    let run = document.getElementById("run")

    fight.addEventListener("click",function(){
        livePageGenerate()
    })
    run.addEventListener("click",function(){
        let jpg = "die.jpg"
        let words = "Never Run from a Fight!"
        diePageGenerate(jpg,words)
    })
}

export function getVampireButton(){
    let take = document.getElementById("take")
    let run = document.getElementById("run")

    take.addEventListener("click",function(){
        richPageGenerate()
    })
    run.addEventListener("click",function(){
        let jpg = "vampire_kill.jpg"
        let words = "You Killed By A Vampire!"
        diePageGenerate(jpg,words)
    })
}

export function getCaveButton(){
    let work = document.getElementById("work")
    let run = document.getElementById("run")

    work.addEventListener("click",function(){
        namePageGenerate()
    })
    run.addEventListener("click",function(){
        let jpg = "pig.jpg"
        let words = "You Become A Pig!"
        diePageGenerate(jpg,words)
    })
}

// 遊戲結束返回遊戲頁面首頁按鈕
export function getBackGamePageButton(){
    let gamePage = document.getElementById("gamePage")

    gamePage.addEventListener("click",function(){
        gamePageGenerate()
    })
}