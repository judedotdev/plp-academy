// these are decimal numbers
// A double is a data type used to represent floating-point numbers with double precision, meaning it can store numbers with higher precision (more decimal points) than a single-precision floating-point (often called a float).
// Double precision generally uses 64 bits (8 bytes) to store values, which provides a larger range and greater accuracy, especially for very large or very small numbers. This makes doubles ideal for scientific calculations, graphics, and applications where precision is crucial.

void main() {
  double num1 = 20.5;
  double num2 = 15.7;

  //add two numbers
  double sum = num1 + num2;

  //subtract second number from first number
  double difference = num1 - num2;

  //multiply two numbers
  double multiplication = num1 * num2;
  print(num1);
  print(num2);
  print(sum);
  print(multiplication);
  print(difference);
}
