
const buttons = document.querySelectorAll('.container .fa')

for (let i = 0; i<buttons.length; i++){
    
    buttons[i].addEventListener("click", function (){
        buttons[i].parentNode.style.display = "none";
    })
}

