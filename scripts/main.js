let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'GithubLogo.png'){
        myImage.setAttribute('src','GithubLogo2.png');
    } else {
        myImage.setAttribute('src', 'GithubLogo.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'I know your name, ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'I know your name, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}