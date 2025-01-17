# Week 4: Utilities in Dart Programming language

- Lesson 1: Dart Utilities - Date And Time, Asynchronous Programming and Enums
- Lesson 2: String Manipulation and Collections

## Lesson 1: Dart Utilities - Date And Time, Asynchronous Programming and Enums

Dart Utilities

Objective:

Explore various utility features in Dart for string manipulation, collections, file handling, and date/time operations.
Provide practical examples and use cases for each utility category.

In computers, a utility is a small program that provides an addition to the capabilities provided by the operating system. In some usages, a utility is a special and nonessential part of the operating system.

**Date And Time:**

Dart offers utilities for working with dates and times, including classes for representing dates, times, durations, and intervals. These utilities allow developers to perform various operations like date arithmetic, formatting, parsing, and timezone handling.

**Asynchronous Programming:**

Asynchronous programming in Dart allows you to execute non-blocking operations, which is crucial for handling tasks such as network requests, file I/O, and other operations that may take time to complete. Dart provides several features and mechanisms for asynchronous programming, including Futures and the async/await syntax

Explanation:

- `main()` is marked with async keyword, indicating that it contains asynchronous operations.
- Inside `main()`, we call `fetchUserData()`, which returns a `Future<String>`. We use await to asynchronously wait for this future to complete.
- While waiting for `fetchUserData()` to complete, the execution of `main()` is paused. This allows other code to run in the meantime.
- Once `fetchUserData()` completes, its result is assigned to result, and the execution of `main()` resumes.
- We print the result obtained from `fetchUserData()`.
- What is the difference between a Future and a completed value in Dart?: A Future represents the eventual result of an asynchronous operation, while a completed value is the actual result. A `Future` is essentially a placeholder that will eventually hold the result of an asynchronous operation. When the operation is complete, the Future is "completed" and holds the final result, known as the completed value.

**Enums:**

Enums in Dart are used to define custom data types with a fixed set of constant values. Enums make it easy to represent a group of related values, such as days of the week, directions, or states in a specific process, and can improve code readability and type safety.

Enums, short for enumerations, are a feature in many programming languages, including Dart. In Dart, enums are a special type used to represent a fixed number of constant values, typically related to a specific domain or set of options. Here's an overview of how enums work in Dart:

Key Points:

- enum Day creates a set of constants (e.g., monday, tuesday) that belong to the Day enum.
- Usage: Use enum values to represent specific options or states in your code.
- Switch Statement: Use switch to execute code based on the enum value.
- Iteration: You can iterate over all enum values using Day.values.

## Lesson 2: String Manipulation and Collections

String Manipulation in Dart

Importance:

String manipulation is essential for processing and formatting text data in programming, such as generating messages, formatting user input, or performing text-based calculations.

Common Operations:

- Concatenation: Concatenation combines two or more strings into one. Dart uses the + operator for this.
- Interpolation: String interpolation allows embedding variables directly within a string. Dart uses $ for simple variables and `${}` for expressions.
- Substring: The `substring()` method extracts a portion of a string by specifying start and end indices.

## Assignment

Utilities in Dart Programming language

Access the assignment via this link <https://classroom.github.com/a/mhgMFji_>

You’ll create a powerful utility application in Dart! Here’s what you’ll do:

String Manipulation: Play with strings by concatenating, reversing, and changing cases. 🔤✨

Collections: Use lists, sets, and maps to organize and manage data. 📊

File Handling: Read from one file and write to another while managing errors. 📂✍️

Date and Time: Use Dart's DateTime class to format dates and calculate differences. ⏳🗓️

Finally, you’ll combine these elements into a small application that manipulates user input, stores results, and logs the date and time of entries.

 You’ve got this! 💻🎈
