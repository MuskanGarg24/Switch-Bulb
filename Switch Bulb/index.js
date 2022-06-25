let switchPosition = document.querySelector('#switch');

switchPosition.addEventListener('click', changePosition);

function changePosition(){
    if(switchPosition.textContent == "ON"){
        document.querySelector('h1').textContent = "SWITCHED ON";
        document.querySelector('img').setAttribute("src", "images/onbulb.png");
        document.querySelector('#switch').textContent = "OFF";
    }
    else{
        document.querySelector('h1').textContent = "SWITCHED OFF";
        document.querySelector('img').setAttribute("src", "images/offbulb.png");
        document.querySelector('#switch').textContent = "ON";
    }
}