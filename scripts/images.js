let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox2.png') {
      myImage.setAttribute('src','images/firefox.png');
    } else {
      myImage.setAttribute('src','images/firefox2.png');
    }
}
