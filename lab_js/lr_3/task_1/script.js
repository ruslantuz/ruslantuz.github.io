function fahrenheitToCelsius(fahrenheit) {
    return (5/9) * (fahrenheit - 32);
}

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

const fahrenheitInput = document.getElementById("fahrenheitInput");
const celsiusInput = document.getElementById("celsiusInput");

fahrenheitInput.addEventListener("input", function() {
    const fahrenheit = parseFloat(fahrenheitInput.value);
    if (!isNaN(fahrenheit)) {
        const celsius = fahrenheitToCelsius(fahrenheit);
        celsiusInput.value = celsius.toFixed(2);
    }
});

celsiusInput.addEventListener("input", function() {
    const celsius = parseFloat(celsiusInput.value);
    if (!isNaN(celsius)) {
        const fahrenheit = celsiusToFahrenheit(celsius);
        fahrenheitInput.value = fahrenheit.toFixed(2);
    }
});