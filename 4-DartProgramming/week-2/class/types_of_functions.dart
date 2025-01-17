// 1. No Parameter and No Return Type:
// A function that neither takes any input nor returns any value 🤷‍♂️.
void noParameterNoRetunType() {
  print("This Function takes no parameters, and also retuns nothing");
}

// 2. Parameter and No Return Type:
// A function that takes inputs but doesn’t give anything back 🎁.
void parameterAndNoReturnType(var param) {
  print("\nThis Function takes the parameter '${param}', but retuns nothing");
}

// 3. No Parameter and Return Type:
// A function that returns something but doesn’t need any input 💬.
int noParameterButHasReturnType() {
  int integerLocalVariable = 20;
  return integerLocalVariable;
}

// 4. Parameter and Return Type:
// A function that takes inputs and gives back a result 🎯.

// Function to ADD two integers and return the sum
int findSum(int a, int b) {
  return a + b;
}

// 5. Anonymous Functions: see the main() function

// 6. Arrow Functions
int multiply(int a, int b) => a * b;

// 7. Higher-Order Functions
// Higher-order functions are functions that take other functions as parameters or return a function.
// They are useful for functional programming.

double getQuotient(double a, double b) => a / b;
void printResult(
    double Function(double, double) operation, double a, double b) {
  print(operation(a, b));
}

// 8. Recursive Functions
// A recursive function is one that calls itself until a specified condition is met.
// This is commonly used for operations like calculating factorials.

int factorial(int n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

// 9. Named Parameters
// Dart functions can have named parameters, allowing for optional parameters in any order.
// Named parameters are wrapped in curly braces {}.

void greet({String name = 'Guest', int age = 18}) {
  print('Hello, $name. You are $age years old.');
}

// 10. Optional Positional Parameters
// Optional positional parameters are wrapped in square brackets [].
// They are optional and can have default values.

void greetUser(String name, [String message = 'Welcome!']) {
  print('$message, $name!');
}

// 11. Getter and Setter Functions
// Dart provides getter and setter functions for encapsulating access to properties.

class Circle {
  double radius;

  Circle(this.radius);

  // getter function
  double get area => 3.14 * radius * radius;

  // setter function
  set updateRadius(double newRadius) => radius = newRadius;
}

// 12. Static Functions
// Static functions belong to the class rather than an instance of the class and are called using the class name.
class MathOperations {
  static int square(int num) {
    return num * num;
  }
}

// 13. Async and Await Functions
// Dart has asynchronous functions, which are marked with the async keyword and often return a Future.
// They allow non-blocking operations, such as network requests.

// Future<void> fetchData() async {
//   var data = await fetchFromApi();
//   print(data);
// }

void main() {
  // 1. No Parameter and No Return Type
  noParameterNoRetunType();

  // 2. Parameter and No Return Type
  parameterAndNoReturnType(["apple", "banana", "orange"]);

  // 3. No Parameter and Return Type
  var returnValue = noParameterButHasReturnType();
  print(
      "\nThis Function takes no parameters, but retuns the return value '${returnValue}'");

  // 4. Parameter and Return Type
  int num1 = 5;
  int num2 = 101;
  int result = findSum(num1, num2);
  print(
      "\nThis is a function to find the sum of two integer numbers. \nIt take the parameters ${num1} and ${num2} and the sum is: ${result}\n");

  // 5. Anonymous Functions
  // Also known as lambda or inline functions, anonymous functions are functions without a name. They are often used as arguments to other functions.
  var numbers = [1, 2, 3];
  numbers.forEach((number) {
    print(number);
  });

  // 6. Arrow Functions
  print(multiply(10, 3));

  // 7. Higher-Order Functions
  printResult(getQuotient, 3, 4); // Output: 0.75

  // 8. Recursive Functions
  print("3 factorial (3!) is: ${factorial(3)}");

  // 9. Named Parameters
  greet(name: 'Alice', age: 25); // Hello, Alice. You are 25 years old.

  // 10. Optional Positional Parameters
  greetUser('Bob'); // Output: Welcome!, Bob!

  // 12. Static Functions
  print(MathOperations.square(5)); // Output: 25
}
