// Strings are like the magic scrolls 📜 of your code—they store all your text-based data and messages.
// With Dart, you can craft and manipulate text using strings!
// Definition of a string:
// A string is a data type used to represent a sequence of characters, such as letters, numbers, symbols, and spaces. Strings are typically used to store and manipulate text in programming.
// In most programming languages, strings are enclosed in quotation marks, either single (' ') or double (" ").

void main() {
  // lets work with string data type and variables
  String name = "john Doe";
  String city = "Nairobi";
  String favfood = "Rice";
  // lets print this
  print("My name is $name  and my city is $city. I love eating $favfood ");
  print("My favorite food is ${favfood}");
  // length of strings(property of the string)
  print(city.length);
  // refer to specific character in the string using its index
  print(city[6]);
  print(city[5]);
  // string functions (uppercase, lowercase)
  print(city.toUpperCase());
  print(city.toLowerCase());
  // see if a character is inside the string

  print(city.indexOf("b"));
  print(name.indexOf("o"));
  print(name.contains("p"));

  // string concatenation- adding two or more string variables
  String greeting = "Hello";
  String greeting2 = " World";
  print(greeting + greeting2);
  print(greeting + " " + greeting2);

  // string interpolation -adding string variables to a string/sentence
  // print("The greeting of each language is ${greeting + greeting2}");
  var myname = "John";
  print("My name is $myname");

  // 🔮 Crafting string code
  String coderName = "Ada Lovelace";
  String favoriteLanguage = "Dart";
  String favoriteEmoji = "💻";

  // 🧙‍♀️ Combine strings using string interpolation (the power of `${}`!)
  print(
      "👩‍💻 Hello, my name is $coderName, and I code in $favoriteLanguage $favoriteEmoji");

  String question = "How do we combine int and double?";
  print(question);
  String answer =
      "You capture as double because once you perfom an operation using a decimal and a whole number you get a decimal";
  print(question + "" + "" + answer);
}
