var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

document.addEventListener("DOMContentLoaded", function () {
    
    displayCartItems();
});


function displayCartItems() {
    var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    var cartTableBody = document.getElementById("cartTableBody");

    cartTableBody.innerHTML = "";


    cartItems.forEach(function (item, index) {
        var row = document.createElement("tr");
        var productName = item.name;
        var productLink = item.link;
        var productPrice = item.price;
        var total = item.quantity * productPrice;

        row.innerHTML = "<td>" + (index + 1) + "</td><td><a href='" + productLink + "'>" + productName + "</a></td><td>" + productPrice + " грн</td><td><input type='number' value='" + item.quantity + "' min='1' onchange='updateQuantity(" + index + ", this.value)'></td><td>" + total + " грн</td><td><button class='delete-btn' onclick='deleteItem(" + index + ")'>Видалити</button></td>";
        cartTableBody.appendChild(row);
    });
}

function updateQuantity(index, newQuantity) {
    if (newQuantity > 0) {
        cartItems[index].quantity = parseInt(newQuantity);
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        displayCartItems(); // Refresh the displayed cart items
    }
}
function checkout() {
    alert("Оплата успішно виконана!");

    localStorage.removeItem("cartItems");
    displayCartItems(); 
}

function deleteItem(index) {
    var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    cartItems.splice(index, 1);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    displayCartItems();
    location.reload();
}
// function displayCartItems() {
//     var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
//     var cartTableBody = document.getElementById("cartTableBody");

//     cartTableBody.innerHTML = "";

//     cartItems.forEach(function (item, index) {
//         var row = document.createElement("tr");
//         var productName = item.name;
//         var total = item.quantity * item.price;

//         row.innerHTML = "<td>" + (index + 1) + "</td><td><a href='" + item.link + "'>" + productName + "</a></td><td>" + item.price + " грн</td><td>" + item.quantity + "</td><td>" + total + " грн</td><td><button class='delete-btn' onclick='deleteItem(" + index + ")'>Видалити</button></td>";
//         cartTableBody.appendChild(row);
//     });
// }


