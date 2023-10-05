function func(){
    for(let i = 1; i < 10; i++){
        for(let j = 1; j < 10; j++){
            document.write(i + " * " + j + " = " + (i*j)+ "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;");
        }
        document.write("<br>");
    }
}
window.addEventListener('load', func());