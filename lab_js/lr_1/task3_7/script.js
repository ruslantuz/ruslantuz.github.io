function calc(){
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    document.write("Найбільше число: " + Math.max(num1, num2));
}