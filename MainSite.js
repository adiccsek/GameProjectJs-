var button1 = document.querySelector('#but3');
var button2 = document.querySelector('#but4');
var button3 = document.querySelector('#but5');

var buttonValue;
button1.addEventListener('click', () => {
    buttonValue = 3;
    window.alert("Sikeresen kiválasztottad a 3x3-as sémát." );
});

button2.addEventListener('click', () => {
    buttonValue = 4;
    window.alert("Sikeresen kiválasztottad a 4x4-as sémát.");
});

button3.addEventListener('click', () => {
    buttonValue = 5;
    window.alert("Sikeresen kiválasztottad a 5x5-as sémát." );
});

var Start = document.querySelector('.StartButton');

Start.addEventListener('click', () => {
    if (User1Name.value == '' || User2Name.value == ''){
        window.alert("Kérem adjon meg nevet!");
    } else {
        location.href="MainSite.html?player1=" + encodeURIComponent(User1Name.value) + "&player2=" + encodeURIComponent(User2Name.value)
    }
   
    let user1 = User1Name.value;
    let user2 = User2Name.value;
    let fieldSize = buttonValue;
    localStorage.setItem('user1', user1);
    localStorage.setItem('user2', user2);
    localStorage.setItem('fieldsize', fieldSize);
    window.location.href='GameField.html';
  
});



