/**
 * https://chatgpt.com/c/66f1ae16-90b0-800c-8684-ae70ed4004d6
 * IDEA: Creating a WebPage with only Javascript.
 * Running this main.js file using Node.js.
 * Simulate the DOM in Node.js:
 * If you want to run this in a Node.js environment (for example, for server-side rendering or testing purposes),
 * you can use a DOM simulation library like jsdom to create a virtual DOM.
 * Install jsdom:
 * npm install jsdom
 * const jsdom = require("jsdom");
 * const { JSDOM } = jsdom;
 * Set CSS styles for an element using JavaScript
 * You can set CSS styles for an element using JavaScript. There are two common methods to do this:
 * 1. Using style property:
 * You can directly manipulate the style property of an HTML element to set inline CSS styles.
 * ```
 * // Select the element
 * let element = document.getElementById("myElement");
 * 
 * // Set the CSS style
 * element.style.color = "blue";        // Set the text color to blue
 * element.style.backgroundColor = "yellow"; // Set the background color to yellow
 * element.style.fontSize = "20px";     // Set the font size to 20px
 * ```
 * 2. Using setProperty() method:
 * You can use the setProperty() method to set CSS properties with custom property names or when using CSS variables.
 * ```
 * // Select the element
 * let element = document.getElementById("myElement");
 * 
 * // Set the CSS style using setProperty()
 * element.style.setProperty("color", "blue");
 * element.style.setProperty("background-color", "yellow");
 * ```
 * 
 * Important Notes:
 * JavaScript styles are camel-cased. For example, background-color in CSS becomes backgroundColor in JavaScript.
 * Inline styles set using JavaScript will override any styles set in a stylesheet unless !important is used in the CSS.
 * This is useful for dynamic styling or when you want to alter styles based on user interaction or certain events in your application.
 * Check `scriptNode.js` for an example implementation
 */


// npm install jsdom
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

// Simulate a browser environment
const { document } = (new JSDOM(`<!DOCTYPE html><select id="countries"></select>`)).window;

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

// Output the updated HTML
console.log(document.body.innerHTML);
