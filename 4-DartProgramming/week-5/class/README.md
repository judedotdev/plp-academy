# WEEK 5 EXAMPLE

Explanation of the Code:

import 'package:flutter/material.dart';: This line imports the Flutter material design library, which contains pre-designed widgets that adhere to the Material Design guidelines.
runApp(MyApp());: This function is the entry point of the app. It loads the MyApp widget.
StatelessWidget: The MyApp and MyHomePage classes extend StatelessWidget, meaning they are immutable and do not maintain any internal state.
MaterialApp: This widget acts as the root of the app, setting up various properties like the home screen and themes.
Scaffold: Provides the basic visual structure for the app, including an app bar and a body.
AppBar: This widget displays a title at the top of the app.
Center: Centers its child widgets within itself.
Column: Arranges its children vertically.
Text: Displays the "Hello, Flutter!" text.
ElevatedButton: A button that triggers an action (printing to the console) when pressed.
Image.network: Displays an image from a provided URL.

Step 3: Run the App

Run the Flutter App:
In Visual Studio Code: Open the terminal and type flutter run.
Interact with the App:
You should see "Hello, Flutter!" text in the center of the screen, a button labeled "Press Me" that prints "Button Pressed!" to the console when clicked, and an image loaded from the internet below the button.
View Console Output: Check the console in your IDE to see the "Button Pressed!" message when the button is clicked.
