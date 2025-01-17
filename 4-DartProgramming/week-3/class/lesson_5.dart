// EXTENSION METHODS

/**
 * What Are Extension Methods? Imagine having a magic wand that allows you to
 * sprinkle a little extra sparkle on your existing classes in Dart!
 * That’s exactly what extension methods do! They let you add brand-new methods to
 * classes or interfaces without changing their original design.
 * So, if you’ve ever wished for more powers in a class you didn’t create,
 * extension methods are your new best friends!
 */

// Extending the String class with an extension method
extension StringExtensions on String {
  // Method to capitalize the first letter of a string
  String capitalizeFirstLetter() {
    if (this.isEmpty) {
      return this;
    }
    return this[0].toUpperCase() + this.substring(1);
  }

  // Method to capitalize the second letter of a string
  String capitalizeSecondLetter() {
    if (this.isEmpty) {
      return this;
    }
    return this[0] + this[1].toUpperCase() + this.substring(2);
  }
}

void main() {
  // Create a String object
  String message = "hello, world!";

  // Use the extension method to capitalize the first letter
  String capitalizedMessage = message.capitalizeFirstLetter();
  // Use the extension method to capitalize the first letter
  String capitalizedMessage2 = message.capitalizeSecondLetter();

  // Print the result
  print(capitalizedMessage); // Output: Hello, world!
  print(capitalizedMessage2); // Output: hEllo, world!
}
