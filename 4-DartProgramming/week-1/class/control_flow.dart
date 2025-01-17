// Control Flow in Dart
// What is Control Flow? -
// Categories of Control Flow in Dart:
// Control flow statements in Dart can be divided into three exciting categories:
// 1. Decision-Making Statements 🧠 (Make choices based on conditions)
// 2. Looping Statements 🔄 (Repeat code over and over)
// 3. Jump Statements 🏃‍♂️ (Hop around different parts of the code)

void main() {
  // Decision-Making Statements: 1. If Statement
  var age = 10;

  if (age > 18) {
    print("🗳️ Mariam is Eligible to vote!");
  }
  print("👧 Mariam is still too young to vote.");

  // Decision-Making Statements: 2. If-else Statements
  if (age > 18) {
    print("🗳️ Mariam is a voter in Kenya!");
  } else {
    print("👧 Mariam is still too young to vote.");
  }

  // Decision-Making Statements: 3. If else if Statement
  if (age > 18) {
    print("🗳️ Mariam can vote in Kenya!");
  } else if (age == 18) {
    print("🎉 Mariam is just old enough to vote in Kenya!");
  } else {
    print("👧 Mariam is still too young to vote.");
  }

  // Decision-Making Statements: 4. Switch Case Statement
  // you can say that this is a more organized way of using if..else if..else
  int day = 3;

  switch (day) {
    case 1:
      print("🌞 Monday: Let's code!");
      break;
    case 2:
      print("🚀 Tuesday: Keep coding!");
      break;
    case 3:
      print("🐪 Wednesday: Halfway through!");
      break;
    default:
      print("🎉 Time for the weekend!");
  }

  // Looping Statements: 1. for loop
  for (int i = 1; i <= 5; i++) {
    print("🔁 This is loop iteration $i");
  }

  // Looping Statements: 2. for…in loop
  var list1 = [10, 20, 30, 40, 50];
  for (var i in list1) // for..in loop to print list element
  {
    print(i); // to print the number
  }

  // Looping Statements: 3. while loop
  // A FOR loop is used for definite iteration, while a WHILE loop is used for indefinite iteration.
  int i = 0; // Initialize index

  while (i < list1.length) {
    // Loop until i is less than the length of the list
    print(list1[i]); // Print the current element at index i
    i++; // Increment the index
  }

  // Looping Statements: 4. do-while loop
  var a = 1;
  var maxnum = 10;
  do {
    print("The value is: ${a}");
    a = a + 1;
  } while (a < maxnum);

  // Jump Statements: 1. break
  // The break statement immediately stops the closest enclosing loop (for, while, or do-while) or switch statement and moves to the next part of the program outside that loop or switch.
  for (int i = 0; i < 5; i++) {
    if (i == 3) {
      print("The loop stopped at index ${i}");
      break; // Stops the loop when i equals 3
    }
    print(i);
  }
  print("We are ouside the loop!");
  // Output: 0, 1, 2

  // Jump Statements: 2. continue
  // The continue statement skips the current iteration of the loop and proceeds to the next iteration. It is often used within for, while, or do-while loops to bypass specific conditions without stopping the entire loop.
  for (int i = 1; i <= 5; i++) {
    if (i == 2) {
      continue; // Skips the rest of the loop for i = 2
    }
    print(i);
  }
  // Output: 1, 3, 4, 5

  // Jump Statements: 3. return
  // The return statement exits from a function, optionally returning a value to the caller. When return is executed, no further code in the function is executed.
  int sum(int a, int b) {
    return a + b; // Returns the sum of a and b
  }

  print(sum(3, 4)); // Output: 7

  // Jump Statements: 4. assert (Not a jump statement but useful for control flow)
  // The assert statement is used in development to enforce certain conditions. If the condition is false, it stops the execution of the code and throws an AssertionError. Although not strictly a jump statement, it helps enforce control flow logic during development.
  int myAge = 18;
  assert(myAge >= 18, "Age must be at least 18"); // No output if true
  print("You are $myAge years old.");
}
