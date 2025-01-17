// DART-WEEK-ONE

void main() {
  // Question 1: Define and initialize variables of various types.
  int intValue = 10; // Integer type variable
  double doubleValue = 5.5; // Double type variable
  String stringValue = 'Hello, Dart!'; // String type variable
  bool boolValue = true; // Boolean type variable
  List<int> intList = [1, 2, 3, 4, 5]; // List of integers

  // Display the initialized variables
  print("Integer Value: $intValue");
  print("Double Value: $doubleValue");
  print("String Value: $stringValue");
  print("Boolean Value: $boolValue");
  print("List of Integers: $intList");

  // Question 2: Type Conversion

  // 2A. Function to convert a String to int and double
  String strNumber = '25';
  int convertedInt = int.parse(strNumber); // Convert String to int
  double convertedDouble = double.parse(strNumber); // Convert String to double
  print("\nString to Int: $convertedInt");
  print("String to Double: $convertedDouble");

  // 2B. Function to convert an int to String and double
  int intNumber = 15;
  String intToString = intNumber.toString(); // Convert int to String
  double intToDouble = intNumber.toDouble(); // Convert int to double
  print("\nInt to String: $intToString");
  print("Int to Double: $intToDouble");

  // Question 3: convertAndDisplay function
  convertAndDisplay('42');

  // Question 4: Control Flow - If-Else Statements

  // Question 4a: Function to check if a number is positive, negative, or zero
  checkNumberSign(
      16); // Check positive number - Output: "The number is positive."
  checkNumberSign(
      -7); // Check negative number - Output: "The number is negative."
  checkNumberSign(0); // Check zero - Output: "The number is zero."

  // Question 4b: Function to determine voting eligibility based on age.
  checkVotingEligibility(20); // Check if eligible to vote

  // Question 5: Switch Case - Day of the week
  printDayOfWeek(3); // Example for Wednesday

  // Question 6: Loops
  printNumbersUsingLoops();

  // Question 7: Complex Example
  List<int> numberList = [5, 12, 105, 2, 45, 75];
  processNumberList(numberList);
}

// Question 3: Function that takes a String, converts it to int and double, and displays results.
void convertAndDisplay(String numberStr) {
  int numberInt = int.parse(numberStr);
  double numberDouble = double.parse(numberStr);

  print("\nConvertAndDisplay Results:");
  print("String to Int: $numberInt");
  print("String to Double: $numberDouble");
}

// Question 4a: Function to check if a number is positive, negative, or zero.
void checkNumberSign(int number) {
  if (number > 0) {
    print("\nThe number is positive.");
  } else if (number < 0) {
    print("\nThe number is negative.");
  } else {
    print("\nThe number is zero.");
  }
}

// Question 4b: Function to determine voting eligibility based on age.
void checkVotingEligibility(int age) {
  if (age >= 18) {
    print("Eligible to vote.");
  } else {
    print("Not eligible to vote.");
  }
}

// Question 5: Switch statement to print day of the week.
void printDayOfWeek(int day) {
  switch (day) {
    case 1:
      print("\nMonday");
      break;
    case 2:
      print("\nTuesday");
      break;
    case 3:
      print("\nWednesday");
      break;
    case 4:
      print("\nThursday");
      break;
    case 5:
      print("\nFriday");
      break;
    case 6:
      print("\nSaturday");
      break;
    case 7:
      print("\nSunday");
      break;
    default:
      print("\nInvalid day number");
  }
}

// Question 6: Loops - For, While, and Do-While
void printNumbersUsingLoops() {
  print("\nFor Loop (1 to 10):");
  for (int i = 1; i <= 10; i++) {
    print(i);
  }

  print("\nWhile Loop (10 to 1):");
  int j = 10;
  while (j >= 1) {
    print(j);
    j--;
  }

  print("\nDo-While Loop (1 to 5):");
  int k = 1;
  do {
    print(k);
    k++;
  } while (k <= 5);
}

// Question 7: Complex Example - Processing a list of numbers with control flow.
void processNumberList(List<int> numbers) {
  for (int number in numbers) {
    print("\nNumber: $number");

    // Check if the number is even or odd
    if (number % 2 == 0) {
      print("Even");
    } else {
      print("Odd");
    }

    // Categorize the number as "small", "medium", or "large"
    void categorizeNumber(int number) {
      if (number >= 1 && number <= 10) {
        print("Category: Small");
      } else if (number >= 11 && number <= 100) {
        print("Category: Medium");
      } else if (number >= 101) {
        print("Category: Large");
      }

      // switch (number) {
      //   case (>= 1 && <= 10):
      //     print("Category: Small");
      //     break;
      //   case (>= 11 && <= 100):
      //     print("Category: Medium");
      //     break;
      //   case (>= 101):
      //     print("Category: Large");
      //     break;
      //   default:
      //     print("Number out of range");
      // }
    }

    categorizeNumber(number);
  }
}
