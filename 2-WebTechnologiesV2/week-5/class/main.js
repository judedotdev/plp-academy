// array holding countries
let countries = ["Kenya", "Nigeria", "South Africa", "Tanzania", "Zimbabwe"];

// variable holding the dropdown
let dropdown = document.getElementById("countries");

// iterate through the countries array using the forEach() method
countries.forEach(function (country) {
    // create the option element
    const option = document.createElement('option');

    // populate each option with the country
    option.value = country;
    option.text = country;

    // populate the dropdown
    dropdown.appendChild(option);
});