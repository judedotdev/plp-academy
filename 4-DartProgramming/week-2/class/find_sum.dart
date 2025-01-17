// add two numbers without using a function

// void main() {
//   int num1 = 100;
//   double num2 = 12.5;
//   double sum = num1 + num2;
//   print(sum);
// }

// Use a Function To Find Sum of Two Numbers
void findSum(double num1, double num2) {
  double sum = num1 + num2;
  print("The sum of $num1 and $num2 is: $sum");
}

void main() {
  // Calling the function with two numbers
  findSum(10, 20.8);
}
