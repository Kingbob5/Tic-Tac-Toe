var turn = 1;
var tieCheck = 0;
var topLeft = '';
var topMiddle = '';
var topRight = '';
var middleLeft = '';
var middleMiddle = '';
var middleRight = '';
var bottomLeft = '';
var bottomMiddle = '';
var bottomRight = '';

function restart() {
    $('.top-left').removeClass('x').removeClass('o');
    $('.top-middle').removeClass('x').removeClass('o');
    $('.top-right').removeClass('x').removeClass('o');
    $('.middle-left').removeClass('x').removeClass('o');
    $('.middle-middle').removeClass('x').removeClass('o');
    $('.middle-right').removeClass('x').removeClass('o');
    $('.bottom-left').removeClass('x').removeClass('o');
    $('.bottom-middle').removeClass('x').removeClass('o');
    $('.bottom-right').removeClass('x').removeClass('o');
topLeft = '';
topMiddle = '';
topRight = '';
middleLeft = '';
middleMiddle = '';
middleRight = '';
bottomLeft = '';
bottomMiddle = '';
bottomRight = ''; 
tieCheck = 0;
}

function check() {
    if((topLeft === 'X' && topMiddle === 'X' && topRight === 'X') || (middleLeft === 'X' && middleMiddle === 'X' && middleRight === 'X') || (bottomLeft === 'X' && bottomMiddle === 'X' && bottomRight === 'X') || (topLeft === 'X' && middleLeft === 'X' && bottomLeft === 'X') || (topMiddle === 'X' && middleMiddle === 'X' && bottomMiddle === 'X')|| (topRight === 'X' && middleRight === 'X' && bottomRight === 'X')|| (topLeft === 'X' && middleMiddle === 'X' && bottomRight === 'X') || (topRight === 'X' && middleMiddle === 'X' && bottomLeft === 'X')) {
        alert('x wins');
        restart();
    }
    if((topLeft === 'O' && topMiddle === 'O' && topRight === 'O') || (middleLeft === 'O' && middleMiddle === 'O' && middleRight === 'O') || (bottomLeft === 'O' && bottomMiddle === 'O' && bottomRight === 'O') || (topLeft === 'O' && middleLeft === 'O' && bottomLeft === 'O') || (topMiddle === 'O' && middleMiddle === 'O' && bottomMiddle === 'O')|| (topRight === 'O' && middleRight === 'O' && bottomRight === 'O')|| (topLeft === 'O' && middleMiddle === 'O' && bottomRight === 'O') || (topRight === 'O' && middleMiddle === 'O' && bottomLeft === 'O')) {
        alert('O wins');
        restart();
    }
    if (tieCheck === 9) {
        alert('It\'s a tie');
        restart();
    }
}

function click() {
$('.top-left').on('click', function() {
        turn++;
        if ((turn%2) === 0) {
            $('.top-left').addClass('x'); 
            tieCheck++;
            topLeft = 'X';
        } 
        else if (((turn%2) === 1) && (topLeft !== 'X')) {
            $('.top-left').addClass('o');  
            tieCheck++;
            topLeft = 'O';
        }  
        setTimeout(function() {check()}, 500);
    });
    
$('.top-middle').on('click', function() {
        turn++;
        if ((turn%2) === 0) {
            $('.top-middle').addClass('x'); 
            tieCheck++;
            topMiddle = 'X';
       
        }
        else if (((turn%2) === 1) && (topMiddle !== 'X')) {
            $('.top-middle').addClass('o');  
            tieCheck++;
            topMiddle = 'O';
       
        }
        setTimeout(function() {check()}, 500);
    });
    
$('.top-right').on('click', function() { 
        turn++;
        if ((turn%2) === 0) {
            $('.top-right').addClass('x'); 
            tieCheck++;
            topRight = 'X';
       
        }
        else if (((turn%2) === 1) && (topRight !== 'X')) {
            $('.top-right').addClass('o');  
            tieCheck++;
            topRight = 'O';
       
        }
        setTimeout(function() {check()}, 500);
    });

$('.middle-left').on('click', function() { 
        turn++;
        if ((turn%2) === 0) {
            $('.middle-left').addClass('x'); 
            tieCheck++;
            middleLeft = 'X';
       
        }
        else if (((turn%2) === 1) && (middleLeft !== 'X')) {
            $('.middle-left').addClass('o');  
            tieCheck++;
            middleLeft = 'O';
        }
        setTimeout(function() {check()}, 500);
    });
    
$('.middle-middle').on('click', function() { 
        turn++;
        if ((turn%2) === 0) {
            $('.middle-middle').addClass('x'); 
            tieCheck++;
            middleMiddle = 'X';
        }
        else if (((turn%2) === 1) && (middleMiddle !== 'X')) {
            $('.middle-middle').addClass('o');  
            tieCheck++;
            middleMiddle = 'O';
        }
        setTimeout(function() {check()}, 500);
    });

$('.middle-right').on('click', function() { 
        turn++;
        if ((turn%2) === 0) {
            $('.middle-right').addClass('x'); 
            tieCheck++;
            middleRight = 'X';
       
        }
        else if (((turn%2) === 1) && (middleRight !== 'X')) {
            $('.middle-right').addClass('o');  
            tieCheck++;
            middleRight = 'O';
        }
        setTimeout(function() {check()}, 500);
    });    

$('.bottom-left').on('click', function() { 
        turn++;
        if ((turn%2) === 0) {
            $('.bottom-left').addClass('x'); 
            bottomLeft = 'X';
            tieCheck++;
       
        }
        else if (((turn%2) === 1) && (bottomLeft !== 'X')) {
            $('.bottom-left').addClass('o');  
            tieCheck++;
            bottomLeft = 'O';
        }
        setTimeout(function() {check()}, 500);
    });
    
$('.bottom-middle').on('click', function() { 
        turn++;
        if ((turn%2) === 0) {
            $('.bottom-middle').addClass('x'); 
            tieCheck++;
            bottomMiddle = 'X';
        }
        else if (((turn%2) === 1) && (bottomMiddle !== 'X')) {
            $('.bottom-middle').addClass('o');  
            tieCheck++;
            bottomMiddle = 'O';
        }
        setTimeout(function() {check()}, 500);
    });
    
$('.bottom-right').on('click', function() { 
        turn++;
        if ((turn%2) === 0) {
            $('.bottom-right').addClass('x'); 
            tieCheck++;
            bottomRight = 'X';
        }
        else if (((turn%2) === 1) && (bottomRight !== 'X')) {
            $('.bottom-right').addClass('o');  
            tieCheck++;
            bottomRight = 'O';
        }
        setTimeout(function() {check()}, 500);
    });

}

function main () {
click();
check();
}
$(document).ready(main);