// Qusetion 2:
// Type Conversion: Implement functions to: Convert a String to int and double. Convert an int to String and double.
void main() {
  // 1. A function to convert String to int
  int convertStringToInt(String yourString) {
    return int.parse(yourString);
  }

  String str = "50";
  int integer = convertStringToInt(str);
  print(
      "The String ${str} with data type ${str.runtimeType} has been converted to the int ${integer} with data type ${integer.runtimeType}");

  // 2. A function to convert String to double
  double convertStringToDouble(String yourString) {
    return double.parse(yourString);
  }

  double decimal = convertStringToDouble(str);
  print(
      "The String ${str} with data type ${str.runtimeType} has been converted to the double ${decimal} with data type ${decimal.runtimeType}");

  // 3. A function to convert int to String
  String convertIntToString(int yourInteger) {
    return yourInteger.toString();
  }

  int myInt = 30;
  String myStr = convertIntToString(myInt);
  print(
      "The int ${myInt} with data type ${myInt.runtimeType} has been converted to the String ${myStr} with data type ${myStr.runtimeType}");

  // 4. A function to convert int to double
  double convertIntToDouble(int yourInteger) {
    return yourInteger.toDouble();
  }

  double myDouble = convertIntToDouble(myInt);
  print(
      "The int ${myInt} with data type ${myInt.runtimeType} has been converted to the double ${myDouble} with data type ${myDouble.runtimeType}");

  // 5. Function for Conversion: Write a function convertAndDisplay that: Takes a String representing a number.
  // Converts the String to int and double. Prints the results.
  convertAndDisplay(String number) {
    int integer = int.parse(number);
    double doubleVar = double.parse(number);
    List result = [integer, doubleVar];
    print("The result is: ${result}");
  }

  String numStr = "80";
  convertAndDisplay(numStr);
}
