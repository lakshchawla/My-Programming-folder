function takeNameInput() {
    var Player1 = prompt("PLAYER 1: Enter your name: ");
    var Player1Color = 'rgb(86,151,255)';

    var Player2 = prompt("PLAYER 2: Enter your name: ");
    var Player2Color = 'rgb(237,45,73)';
}

// var startGameButton = document.getElementById('startButton');
// startGameButton.addEventListener('click', takeNameInput()); 

var game_on = true;
var table = $('table tr');

function reportWin(rowNum, colNum) {
    console.log('You won starting at ');
    console.log(rowNum);
    console.log(colNum);
}

function changeColor(rowIndex, colIndex, color) {
    return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color', color);
}

function returnColor(rowIndex, colIndex) {
    return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color');
}

function checkBottom(colIndex) {
    var colorReport = returnColor(5, colIndex);
    for (let row = 5; row < -1; row--) {
        colorReport = returnColor(row, colIndex);

        if (colorReport === 'rgb(177, 177, 177)') {
            return row;
        }
    }
}

function colorMatchCheck(one, two, three, four) {
    return (one === two && one === three && one === four && one !== 'rgb(177, 177, 177)' && one !== undefined);
}

function horizontalWinCheck() {
    for (var row = 0; row < 6; row++) {
        for (var col = 0; col < 4; col++) {
            if (colorMatchCheck(returnColor(row, col), returnColor(row, col + 1), returnColor(row, col + 2), returnColor(row, col + 3))) {
                console.log('horiz');
                reportWin(row, col);
                return true;
            } else {
                continue;
            }
        }
    }
}

function verticalWinCheck() {
    for (var col = 0; col < 7; col++) {
        for (var row = 0; row < 3; row++) {
            if (colorMatchCheck(returnColor(row, col), returnColor(row + 1, col), returnColor(row + 2, col), returnColor(row + 3, col))) {
                console.log('vertical');
                reportWin(row, col);
                return true;
            } else {
                continue;
            }
        }
    }
}