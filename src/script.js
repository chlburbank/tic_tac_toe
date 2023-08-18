const allEqual = arr => arr.every(val => val === arr[0]);
const notEmpty = arr => arr.every(val => val !== "")

// Variable that determines each players turn
let playerChange = 0

// Function that changes the players turn
function playerChoice(cell) {
    if (cell.value == "") {
        (playerChange % 2 == 0) ? cell.value = "X" : cell.value = "O"  
    }
    playerChange++
}

// Winning Conditions
function cellCheck() {
    let cell1 = document.getElementById("b1").value
    let cell2 = document.getElementById("b2").value
    let cell3 = document.getElementById("b3").value
    let cell4 = document.getElementById("b4").value
    let cell5 = document.getElementById("b5").value
    let cell6 = document.getElementById("b6").value
    let cell7 = document.getElementById("b7").value
    let cell8 = document.getElementById("b8").value
    let cell9 = document.getElementById("b9").value

    //Top horizontal
    if (allEqual([cell1, cell2, cell3]) && notEmpty([cell1, cell2, cell3])) {
        document.getElementsByTagName("h4")[0].innerText = "Player " + (playerChange % 2) + " Wins"
    }
    //Middle horizontal
    if (allEqual([cell4, cell5, cell6]) && notEmpty([cell4, cell5, cell6])) {
        document.getElementsByTagName("h4")[0].innerText = "Player " + (playerChange % 2) + " Wins"
    }
    //Bottom horizontal
    if (allEqual([cell7, cell8, cell9]) && notEmpty([cell7, cell8, cell9])) {
        document.getElementsByTagName("h4")[0].innerText = "Player " + (playerChange % 2) + " Wins"
    }
    //Left vertical
    if (allEqual([cell1, cell4, cell7]) && notEmpty([cell1, cell4, cell7])) {
        document.getElementsByTagName("h4")[0].innerText = "Player " + (playerChange % 2) + " Wins"
    }
    //Middle vertical
    if (allEqual([cell2, cell5, cell8]) && notEmpty([cell2, cell5, cell8])) {
        document.getElementsByTagName("h4")[0].innerText = "Player " + (playerChange % 2) + " Wins"
    }
    //Right vertical
    if (allEqual([cell3, cell6, cell9]) && notEmpty([cell3, cell6, cell9])) {
        document.getElementsByTagName("h4")[0].innerText = "Player " + (playerChange % 2) + " Wins"
    }
    //Diagonal 1
    if (allEqual([cell1, cell5, cell9]) && notEmpty([cell1, cell5, cell9])) {
        document.getElementsByTagName("h4")[0].innerText = "Player " + (playerChange % 2) + " Wins"
    }
    //Diagonal 2
    if (allEqual([cell3, cell5, cell7]) && notEmpty([cell3, cell5, cell7])) {
        document.getElementsByTagName("h4")[0].innerText = "Player " + (playerChange % 2) + " Wins"
    }
}