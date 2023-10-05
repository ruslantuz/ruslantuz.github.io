function func(){
    if(confirm("Повідомлення")){
        alert("Натиснуто ОК");
    }
    else{
        alert("Натиснуто відміну");
    }

}
window.addEventListener('load', func());