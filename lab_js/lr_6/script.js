const wrap = document.querySelector('wrap')
const section = document.querySelector('section')

const requestURL = 'https://ruslantuz.github.io/lab_js/lr_6/json/example.json';
const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';

request.send();

request.onreadystatechange = (e) => {
    const productList = request.response;
    generateProducts(productList);
}

function generateProducts(productList){
    productList.products.forEach(
        (product) => {
            const article = document.createElement('article');

            const memberName = document.createElement('h2');
            memberName.textContent = member.name;
            
            const secretIdentity = document.createElement('p');
            secretIdentity.textContent = "Secret Identity: " + member.secretIdentity;
            
            const age = document.createElement('p');
            age.textContent = "Age: " + member.age;
            
            const superPowersHead = document.createElement('p');
            superPowersHead.textContent = "Superpowers:";
            
            const powerList = document.createElement('ul');

            member.powers.forEach((power) => {
                const powerInfo = document.createElement('li');
                powerInfo.textContent = power;
                powerList.appendChild(powerInfo);
            })

            article.append(memberName, secretIdentity, age, superPowersHead, powerList);
            section.appendChild(article);
        }); 
}


// CART


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


