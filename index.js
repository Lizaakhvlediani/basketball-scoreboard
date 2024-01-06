let homeScoreBtnOne = document.getElementById("home-score-btn-1")
let homeStoreEl = document.getElementById("home-score")
let homeScoreSecondEl = document.getElementById("home-score1")
let homeScore = 0

function increaseHomeScoreOne(){
    homeScore += 1
    homeStoreEl.textContent = homeScore
}
function increaseHomeScoreTwo(){
    homeScore += 2
    homeStoreEl.textContent = homeScore
}
function increaseHomeScoreThree(){
    homeScore += 3
    homeStoreEl.textContent = homeScore
}


function increaseHomeScoreF() {
    homeScore += 1 
    homeScoreSecondEl.textContent = homeScore
}
function increaseHomeScoreS() {
    homeScore += 2 
    homeScoreSecondEl.textContent = homeScore
}
function increaseHomeScoreTh() {
    homeScore += 3 
    homeScoreSecondEl.textContent = homeScore
}

let scoreDelete = document.getElementById("score-delete")

function scoreDlt() {
    homeScore = 0 
    homeStoreEl.textContent = homeScore
    homeScoreSecondEl.textContent = homeScore
}