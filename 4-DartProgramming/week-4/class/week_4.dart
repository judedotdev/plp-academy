import 'dart:io';
import 'package:intl/intl.dart';

void main() async {
  // Question 1: String Manipulation
  String str1 = "Hello";
  String str2 = "World";
  print("Question 1: String Manipulation");

  // 1a) Concatenation
  String concatenated = str1 + " " + str2;
  print("Concatenation: $concatenated");

  // 1b) Interpolation
  String interpolated = "Interpolated string: $str1 $str2!";
  print(interpolated);

  // 1c) Substring extraction
  String substring = concatenated.substring(0, 4);
  print("Substring (first 4 characters): $substring"); // Output: 'Hell'

  // 1d) Case conversion
  String upperCase = concatenated.toUpperCase();
  String lowerCase = concatenated.toLowerCase();
  print("Uppercase: $upperCase");
  print("Lowercase: $lowerCase");

  // 1e) Reverse the string
  String reversed = concatenated.split('').reversed.join('');
  print("Reversed: $reversed");

  // 1f) Length of the string
  int length = concatenated.length;
  print("Length: $length");

  // Question 2: Collections (Lists, Sets, Maps)
  print("\nQuestion 2: Collections (Lists, Sets, Maps)");

  // 2a) List: Ordered collection, allows duplicates
  print("2a) List: Ordered collection, allows duplicates");
  List<String> fruits = ['Apple', 'Banana', 'Mango'];
  print("Original list: $fruits");

  // Adding items to the list
  fruits.add('Orange');
  print("After adding Orange: $fruits");

  // Removing an item
  fruits.remove('Banana');
  print("After removing Banana: $fruits");

  // Iterating over the list
  print("Iterating over list:");
  for (var fruit in fruits) {
    print(fruit);
  }

  // 2b) Set: Unordered collection, no duplicates
  print("\n2b) Set: Unordered collection, no duplicates");
  Set<int> uniqueNumbers = {1, 2, 3, 4};
  print("Original set: $uniqueNumbers");

  // Adding items to the set
  uniqueNumbers.add(3); // Won't add because 3 is already in the set
  uniqueNumbers.add(5);
  print("After adding 5 and attempting to add duplicate 3: $uniqueNumbers");

  // Removing an item
  uniqueNumbers.remove(2);
  print("After removing 2: $uniqueNumbers");

  // Iterating over the set
  print("Iterating over set:");
  for (var number in uniqueNumbers) {
    print(number);
  }

  // 2c) Map: Key-value pairs, great for lookup
  print("\n2c) Map: Key-value pairs, great for lookup");
  Map<String, String> capitals = {
    'France': 'Paris',
    'Japan': 'Tokyo',
    'USA': 'Washington D.C.'
  };
  print("Original map: $capitals");

  // Adding an item to the map
  capitals['Italy'] = 'Rome';
  print("After adding Italy: $capitals");

  // Removing an item
  capitals.remove('Japan');
  print("After removing Japan: $capitals");

  // Iterating over the map
  print("Iterating over map:");
  capitals.forEach((country, capital) {
    print("The capital of $country is $capital");
  });

  // Question 3: File Handling
  print("\nQuestion 3: File Handling");

  // Specify the file paths
  final inputFile = File('input.txt'); // the file that the content will be read
  final outputFile = File('output.txt');

  try {
    if (await inputFile.exists()) {
      // Read content from the input file
      String content = await inputFile.readAsString();
      print("Content of input file:\n$content");

      // Write new data to the output file
      String newData =
          "This is new content being written to the output file.\n";
      await outputFile.writeAsString(newData);

      // Append the original content from input file to the output file
      await outputFile.writeAsString(content, mode: FileMode.append);
      print("Content written to output file successfully.");
    } else {
      print("Input file does not exist.");

      // create the file 'input.txt' and add data to it
      String inputFileData = "This is the content of the input file.\n";
      await inputFile.writeAsString(inputFileData);

      // Read content from the input file
      String content = await inputFile.readAsString();
      print("Content of input file:\n$content");

      // Write new data to the output file
      String newData =
          "This is new content being written to the output file.\n";
      await outputFile.writeAsString(newData);

      // Append the original content from input file to the output file
      await outputFile.writeAsString(content, mode: FileMode.append);
      print("Content written to output file successfully.");
    }
  } catch (e) {
    print("An error occurred during file operations: $e");
  }

  // Question 4: Date and Time
  print("\nQuestion 4: Date and Time");

  // Current date and time
  DateTime now = DateTime.now();
  print("Current Date and Time: $now");

  // Formatting date
  String formattedDate = DateFormat('yyyy-MM-dd – kk:mm').format(now);
  print("Formatted Date: $formattedDate");

  // Parsing date from a string
  String dateStr = "2024-11-06";
  DateTime parsedDate = DateTime.parse(dateStr);
  print("Parsed Date: $parsedDate");

  // Adding days to a date
  DateTime futureDate = now.add(Duration(days: 5));
  print("Date after adding 5 days: $futureDate");

  // Subtracting days from a date
  DateTime pastDate = now.subtract(Duration(days: 5));
  print("Date after subtracting 5 days: $pastDate");

  // Calculating the difference between two dates
  DateTime anotherDate = DateTime(2024, 11, 1); // A specific date
  Duration difference = now.difference(anotherDate);
  print("Difference between $now and $anotherDate: ${difference.inDays} days");

  /**
   * Question 5: Exercise: Combine the above utilities to build a small application.
   * This application should: Perform string manipulation on user input.
   * Store the results in a collection. Save the data to a file.
   * Use the date and time utilities to log when each entry was made.
   */
  print(
      "\nQuestion 5: Exercise: Combine the above utilities to build a small application.");

  // A list to store results
  List<String> results = [];

  while (true) {
    print("Enter a string (or type 'exit' to quit):");
    String? userInput = stdin.readLineSync();

    if (userInput == null || userInput.toLowerCase() == 'exit') {
      break; // Exit the loop if the user types 'exit'
    }

    // 1. String Manipulation
    String reversed = reverseString(userInput);
    String upperCase = userInput.toUpperCase();
    String lowerCase = userInput.toLowerCase();
    int length = userInput.length;

    // Create a result entry
    String resultEntry =
        'Input: $userInput | Reversed: $reversed | Uppercase: $upperCase | Lowercase: $lowerCase | Length: $length';
    results.add(resultEntry);

    // Print the result
    print(resultEntry);

    // Log date and time
    String logEntry = logDateTime();
    results.add(logEntry);
    print(logEntry);
  }

  // File Handling
  writeResultsToFile(results);
}

// Function to reverse a string
String reverseString(String input) {
  return input.split('').reversed.join('');
}

// Function to log the current date and time
String logDateTime() {
  DateTime now = DateTime.now();
  return 'Logged at: ${now.toLocal()}';
}

// Function to write results to a file
void writeResultsToFile(List<String> results) {
  final file = File('results.txt');

  try {
    // Write each result to the file
    for (String result in results) {
      file.writeAsStringSync(result + '\n', mode: FileMode.append);
    }
    print('Results have been written to results.txt');
  } catch (e) {
    print('Error writing to file: $e');
  }
}
