document.addEventListener("DOMContentLoaded", function () {
    var shoppingCartIcon = document.getElementById("shoppingCart");
    var cartItemCount = document.getElementById("cartItemCount");

    var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    updateCartItemCount();

    shoppingCartIcon.addEventListener("click", function () {
        if (cartItems.length === 0) {
            alert("Корзина пуста");
        } else {
            window.location.href = "cart/index.html";
        }
    });

    document.querySelectorAll(".avl").forEach(function (button) {
        button.addEventListener("click", function () {
            var productName = button.parentElement.parentElement.querySelector('.prod a').innerText;
            var productLink = button.parentElement.parentElement.querySelector('.prod a').href;
            var productPrice = getPrice(button.parentElement.parentElement.querySelector('.price'));

            var quantity = prompt("Вкажіть кількість:");
            if (quantity !== null && quantity !== "") {
                addToCart(productLink, quantity, productName, productPrice);
                alert("Товар додано");
                updateCartItemCount();
            }
        });
    });

    function updateCartItemCount() {
        cartItemCount.innerText = getUniqueItemCount();
    }

    function addToCart(productLink, quantity, productName, productPrice) {
        var item = {
            link: productLink,
            quantity: parseInt(quantity),
            name: productName,
            price: productPrice
        };
        cartItems.push(item);
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }

    function getUniqueItemCount() {
        var uniqueItems = [];
        cartItems.forEach(function (item) {
            if (!uniqueItems.some(function (uniqueItem) {
                return uniqueItem.link === item.link;
            })) {
                uniqueItems.push(item);
            }
        });
        return uniqueItems.length;
    }

    function getPrice(element) {
        var priceString = element.innerText.trim().replace("грн", "");
        return parseFloat(priceString);
    }
});