// add event listener to box.  if click is odd
//add player 1 if click is even add player 2
console.log("working");
// var appendImg = document.querySelector("#col1");
var clickNumber = 0;
var boxPos = 0

var p1Board = new Array();
var p2Board = new Array();

// getCol(); takes each click and adds a 1 to the same click position on each players board,
// then getCol(); adds the rows columns and diagonals and when they reach 3 a winner is declared
// and the hidden win div is shown based on who won and how.
var getCol = function() {
    for (var k = 1; k <= 9; k++) {


        document.querySelector(".col" + k).addEventListener("click", function(event) {
            clickNumber++
            if (clickNumber % 2 === 0) {
                event.target.classList.add("ninja-cat");
                boxPos = Number(event.target.id.substr(5, 1));
                rowPos = Number(event.target.id.substr(3, 1));
                p2Board[rowPos][boxPos] = 1
            } else {
                event.target.classList.add("ninja-dog");
                boxPos = Number(event.target.id.substr(5, 1));
                rowPos = Number(event.target.id.substr(3, 1));
                p1Board[rowPos][boxPos] = 1
            }

            p1RowWin(); // if p1 gets 3 across
            p2RowWin(); // if p2 gets 3 across
            p1ColWin(); // if p1 gets 3 in one column
            p2ColWin(); // if p2 gets 3 in one column
            p1DiagWin(); // if p1 has a diagonal win
            p2DiagWin(); // if p2 has a diagonal win
            noWin(); // tie scenario


        })
    }
}

getCol();


var buildPlayerBoards = function() {
    var iMax = 3;
    var jMax = 3;

    for (i = 0; i < iMax; i++) {
        p1Board[i] = new Array();
        for (j = 0; j < jMax; j++) {
            p1Board[i][j] = 0;
        }
    }
    for (i = 0; i < iMax; i++) {
        p2Board[i] = new Array();
        for (j = 0; j < jMax; j++) {
            p2Board[i][j] = 0;
        }
    }
}

buildPlayerBoards(); //creates 2 boards for each player

// functions used in getCol(); 

var p1RowWin = function() {

    var p1Row0Total = 0;
    var p1Row1Total = 0;
    var p1Row2Total = 0;
    for (var l = 0; l <= 2; l++) {
        p1Row0Total = p1Row0Total + p1Board[0][l]
        p1Row1Total = p1Row1Total + p1Board[1][l]
        p1Row2Total = p1Row2Total + p1Board[2][l]
    }

    //determins which has 3 in a row for across winner and calls a function to display who won
    if (p1Row0Total === 3) {
        handNinjaWin(); // adds ninja dance gif and winner css to the win div
        changeP1Score();
    } else if (p1Row1Total === 3) {
        handNinjaWin();
        changeP1Score();
    } else if (p1Row2Total === 3) {
        handNinjaWin();
        changeP1Score();
    }

}

var p2RowWin = function() {
    var p2Row0Total = 0;
    var p2Row1Total = 0;
    var p2Row2Total = 0;
    for (var m = 0; m <= 2; m++) {
        p2Row0Total = p2Row0Total + p2Board[0][m];
        p2Row1Total = p2Row1Total + p2Board[1][m];
        p2Row2Total = p2Row2Total + p2Board[2][m];
    }

    //determins which has 3 in a row for across winner and calls a function to display who won
    if (p2Row0Total === 3) {
        handNinjaWin();// adds cat ninja gif and winner css to the win div
        changeP2Score();
    } else if (p2Row1Total === 3) {
        handNinjaWin();
        changeP2Score();
    } else if (p2Row2Total === 3) {
        handNinjaWin();
        changeP2Score();
    }

}

var p1ColWin = function() {

    var p1Col0Total = 0;
    var p1Col1Total = 0;
    var p1Col2Total = 0;

    for (var n = 0; n <= 2; n++) {
        p1Col0Total = p1Col0Total + p1Board[n][0];
    }
    for (var o = 0; o <= 2; o++) {
        p1Col1Total = p1Col1Total + p1Board[o][1];
    }
    for (var p = 0; p <= 2; p++) {
        p1Col2Total = p1Col2Total + p1Board[p][2];
    }

    //determins which has 3 in a row for column winner and calls a function to display who won
    if (p1Col0Total === 3) {
        handNinjaWin();  //adds lego ninja gif to win div
        changeP1Score();
    } else if (p1Col1Total === 3) {
        handNinjaWin();
        changeP1Score();
    } else if (p1Col2Total === 3) {
        handNinjaWin();
        changeP1Score();
    }

}

var p2ColWin = function() {
    var p2Col0Total = 0;
    var p2Col1Total = 0;
    var p2Col2Total = 0;

    for (var u = 0; u <= 2; u++) {
        p2Col0Total = p2Col0Total + p2Board[u][0];
    }
    for (var v = 0; v <= 2; v++) {
        p2Col1Total = p2Col1Total + p2Board[v][1];
    }
    for (var w = 0; w <= 2; w++) {
        p2Col2Total = p2Col2Total + p2Board[w][2];
    }

    //determins which has 3 in a row for column winner and calls a function to display who won
    if (p2Col0Total === 3) {
        handNinjaWin();  //adds hand ninja gif to win div
         changeP2Score();
    } else if (p2Col1Total === 3) {
        handNinjaWin();
        changeP2Score();
    } else if (p2Col2Total === 3) {
        handNinjaWin();
        changeP2Score();
    }

}

var p1DiagWin = function() {
    var p1Diag1 = 0;
    var p1Diag2 = 0;

    for (var q = 0; q <= 2; q++) {
        p1Diag1 = p1Diag1 + p1Board[q][q];
    }

    for (var r = 0, x = 2; r <= 2, x >= 0; r++, x--) {
        p1Diag2 = p1Diag2 + p1Board[r][x]
    }


    //determins which has 3 in a row for diagonal winner and calls a function to display who won
    if (p1Diag1 === 3) {
        handNinjaWin();        changeP1Score();
    } else if (p1Diag2 === 3) {
        handNinjaWin();
        changeP1Score();
    }

}

var p2DiagWin = function() {
    var p2Diag1 = 0;
    var p2Diag2 = 0;

    for (var s = 0; s <= 2; s++) {
        p2Diag1 = p2Diag1 + p2Board[s][s];
    }

    for (var r = 0, x = 2; r <= 2, x >= 0; r++, x--) {
        p2Diag2 = p2Diag2 + p2Board[r][x]
    }

    if (p2Diag1 === 3) {
        handNinjaWin();
        changeP2Score();
    } else if (p2Diag2 === 3) {
        handNinjaWin();
        changeP2Score();
    }
}


var noWin = function(){
    if (clickNumber === 9){
        handNinjaWin();
    }
}
// functions that display hidden win div for each win scenario

var winnerDiv = document.querySelector(".win") // to find hidden winner div
var p1BoardSquares = document.querySelectorAll(".col")
var p2BoardSquares = document.querySelectorAll(".col")
var restartDiv = document.querySelector(".restart-info")// find hidden <p> to add restart info
var gameBoard = document.querySelector(".game-board")// find game board div to change zIndex
var newWinnerDiv = document.querySelector("#win") //find win div with id that never changes
var p1CurrScore = document.querySelector(".p1-score-num") //location of current p1 score on score board
var p2CurrScore = document.querySelector(".p2-score-num") //location of current p2 score on score board
var roundNum = document.querySelector(".round-num")



var handNinjaWin = function() {
    winnerDiv.style.zIndex = "0"
    winnerDiv.classList.toggle("hand-ninja");
    gameBoard.style.zIndex = "-1";
    restartDiv.style.zIndex = "0";
}


//changes player score on the score board
var changeP1Score = function() {
     var p1NewNum = Number(p1CurrScore.textContent) + 1; //add one to player score
     p1CurrScore.innerHTML = p1NewNum.toString();
}

var changeP2Score = function() {
     var p2NewNum = Number(p2CurrScore.textContent) + 1; //add one to player score
     p2CurrScore.innerHTML = p2NewNum.toString();
}

//function to count the number of rounds
var roundCounter = function(){
     var newNum = Number(roundNum.textContent) + 1; //add one to player score
     roundNum.innerHTML = newNum.toString();
}




// reset player board

var resetPlayerBoard = function() {
    newWinnerDiv.addEventListener("click", function() {
        winnerDiv.classList.remove("hand-ninja");
        winnerDiv.style.zIndez = "-1"
        restartDiv.style.zIndex = "-1";
        gameBoard.style.zIndex = "0";
        clickNumber = 0;
        roundCounter();

        //loop through ninja classes and remove each added ninja elem
        for (var e = 0; e < 9; e++) {
           p2BoardSquares[e].classList.remove("ninja-cat");
           p1BoardSquares[e].classList.remove("ninja-dog");
        }

        for (var d = 0; d<= 2; d++){
            //changes p1 board back to zero
            p1Board[0][d] = 0;
            p1Board[1][d] = 0;
            p1Board[2][d] = 0;
            //changes p2 board back to zero
            p2Board[0][d] = 0;
            p2Board[1][d] = 0;
            p2Board[2][d] = 0;
        }

    })
}
resetPlayerBoard();





