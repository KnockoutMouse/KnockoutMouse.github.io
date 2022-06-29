let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'GithubLogo.png'){
        myImage.setAttribute('src','GithubLogo2.png');
    } else {
        myImage.setAttribute('src', 'GithubLogo.png');
    }
}