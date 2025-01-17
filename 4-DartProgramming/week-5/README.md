# Week 5: Introduction to Flutter

## Lesson 1 : Introduction to Flutter

**Learning Objectives:**

- Understand what Flutter is and its role in cross-platform development.
- Learn the benefits of using Flutter.
- Set up the Flutter SDK and development environment.
- Create simple UI elements using Flutter widgets.
- Build a basic Flutter app using stateless widgets.

**Understanding Flutter: What is Flutter?**

**Introduction to Flutter:** Flutter is an open-source UI software development kit (SDK) by Google that allows developers to create high-performance, natively compiled applications for mobile, web, and desktop from a single codebase. By using Flutter, developers can simplify app development with a unified framework that works across different platforms, reducing the complexity and time involved in managing multiple codebases.

**Architecture of Flutter:**

- **Flutter Framework:** Built using the Dart programming language, Flutter is centered around a widget-based architecture. In Flutter, everything is a widget, from basic UI elements like buttons to entire screens. These widgets are highly customizable and reusable, allowing developers to efficiently build consistent user interfaces across platforms.
- **Rendering Engine:** Flutter uses Skia, a high-performance 2D rendering engine that draws directly to the screen. This approach bypasses the native UI components of the platform, ensuring that apps built with Flutter have a consistent look and feel across different devices.

**Benefits of Flutter:**

- **Hot Reload:** One of Flutter’s most powerful features is hot reload, which allows developers to instantly see the effects of code changes without restarting the entire app. This feature speeds up development by enabling quick iterations and experimentation.
- **Single Codebase:** Flutter enables developers to maintain a single codebase that can be used to create apps for multiple platforms, including Android, iOS, web, and desktop. This significantly reduces development time and costs.
- **Rich Set of Widgets:** Flutter comes with a comprehensive library of pre-designed widgets that are both beautiful and customizable. These widgets adhere to the design guidelines of both Android (Material Design) and iOS (Cupertino), ensuring that apps built with Flutter provide a native-like experience on each platform.

**Real-World Applications:** Some popular applications built with Flutter include the Google Ads app, Reflectly, and Alibaba. These apps benefit from Flutter’s rapid development cycles and consistent performance across platforms.

**Key Points:**

- Flutter is a versatile and powerful framework for cross-platform development.
- It uses a single codebase for multiple platforms, making it an efficient tool for developers.
- Flutter’s architecture revolves around widgets, with hot reload enabling quick iterations and testing.

## Lesson 2 : Installing Flutter SDK

FLUTTER INSTALLATION IN OPERATING SYSTEM

1. **Download and Install Flutter SDK**

Before you begin developing with Flutter, you need to set up the Flutter SDK. This involves downloading the SDK from the official Flutter website and extracting it to a location on your computer. The Flutter SDK contains all the tools and libraries you'll need to build and run Flutter applications.

**Steps:**

- Visit the Flutter website: [Click me](https://docs.flutter.dev/get-started/install) to download flutter sdk based on your operating system : Windows, macOS, or Linux.
- Download the Flutter SDK archive: Follow the instructions on the website to download the correct archive for your system.
Extract the archive: Extract the downloaded archive to your desired location. This will create a flutter directory with all necessary files.

2. **Add Flutter to the System Path**

To use Flutter from the command line, you need to add it to your system’s PATH. This makes it easier to run Flutter commands from anywhere in your terminal or command prompt. Each operating system has its own method for updating the PATH variable.

**Steps:**

**Windows:**

- Open System Properties: Press Win + Pause, then click on "Advanced system settings".
- Environment Variables: Click on the "Environment Variables" button.
- Edit Path: Find the "Path" variable in the system variables section and click "Edit".
- Add Flutter bin directory: Add the path to the bin directory inside your Flutter installation to the Path variable. For example, if you extracted Flutter to C:\src\flutter, you would add C:\src\flutter\bin to the Path.
- Save changes: Click "OK" to save the changes.

**macOS:**

- Open Terminal: Open the Terminal application.
- Edit .bash_profile or .zshrc: Open your shell configuration file (usually .bash_profile or .zshrc) in a text editor.
- Add Flutter to PATH: Add the following line to the file, replacing /path/to/flutter with the actual path to your Flutter installation:
- bashCopy codeexport PATH="/path/to/flutter/bin:$PATH"
- Save and source the file: Save the file and run source ~/.bash_profile or source ~/.zshrc to apply the changes.

**Linux:**

- Open Terminal: Open the Terminal application.
- Edit .bashrc: Open the .bashrc file in your home directory with a text editor.
- Add Flutter to PATH: Add the following line to the file, replacing /path/to/flutter with the actual path to your Flutter installation:
- bashCopy codeexport PATH="/path/to/flutter/bin:$PATH"
- Save and source the file: Save the file and run source ~/.bashrc to apply the changes.

3. **Verify Flutter Installation**

Once you have installed Flutter and added it to your PATH, it's essential to verify that the installation was successful. Running the `flutter doctor` command will check your environment for missing dependencies and provide instructions for resolving any issues.

**Steps:**

- Open a terminal or command prompt.
- Run `flutter doctor`: This command will check your environment and show a report on any missing dependencies or issues.

4. **Install Visual Studio Code**

Visual Studio Code (VS Code) is a popular code editor that supports Flutter development. Installing VS Code will provide you with a powerful environment for writing and debugging your Flutter code.

**Steps:**

- Download Visual Studio Code: [Click me](https://code.visualstudio.com/download) to download the appropriate version for your operating system.
- Install Visual Studio Code: Follow the installation instructions for your operating system.

5. **Install Flutter and Dart Extensions**

To enhance your development experience in VS Code, you need to install the Flutter and Dart extensions. These extensions provide tools and features for developing Flutter applications efficiently.

**Steps:**

- Open Visual Studio Code.
- Open Extensions view: Press Ctrl+Shift+X (or Cmd+Shift+X on macOS).
- Search for Flutter: Search for "Flutter" in the Extensions view and install the Flutter extension. The Dart extension is usually installed automatically with the Flutter extension.

## Lesson 3 : Getting Started with Flutter Widgets

**Widgets in Flutter:**

Widgets are the core components of any Flutter application. Everything in Flutter is a widget, from simple UI elements like text and buttons to complex layouts and entire screens. Widgets are designed to be highly customizable and reusable, allowing developers to create flexible and responsive user interfaces.

**Types of Widgets:**

1. **Stateless Widgets:**
Definition: These widgets are immutable, meaning their properties do not change once they are built. They are ideal for displaying static content.
Examples:
Text: Displays a string of text.
Icon: Displays an icon from the material design icons library.
Image: Displays an image from the internet or local assets.
Container: A versatile widget that can be used for styling, positioning, and sizing other widgets.

2. **Stateful Widgets:**
Definition: These widgets maintain a state that can change over time. They are useful for interactive elements that need to update based on user input or other events.
Examples:
Checkbox: Allows users to select or deselect an option.
Slider: A widget that lets users select a value from a range.
Form: A group of form fields like text fields, checkboxes, and buttons that can validate and submit user input.

**Building a Simple UI with Widgets:**

By combining different widgets, you can build complex UIs. For example:

- Use a Column widget to arrange a group of widgets vertically.
- Wrap a Text widget inside a Padding widget to add space around the text.
- Place a Button widget within a Container to style it with background color, padding, and borders.

Creating a Basic Flutter App

Step 1: Create a New Flutter Project

Open Your IDE: Start by launching Visual Studio Code.
Create a New Flutter Project:
Open a terminal or command prompt.
Create a new Flutter project using the flutter create command:

(flutter create your_project_name)

Replace your_project_name with your desired project name.
Alternatively, use Visual Studio Code's command palette:
Open the command palette: Press Ctrl + Shift + P (Windows/Linux) or Cmd + Shift + P (macOS).
Type Flutter: New Project: Start typing "Flutter: New Project" and select it when it appears in the list.
Name your project and choose a location: Enter a name for your project and select a location on your file system to save it.
Open the main.dart file:
Navigate to the lib folder within your project.
Open the main.dart file to start editing your Flutter application's entry point.

Step 2: Modify the main.dart File

Replace the Default Code: Delete the default code in main.dart and replace it with the following:

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Week 5',
      home: Scaffold(
        appBar: AppBar(
          title: const Text('Flutter Demo Home Page'),
        ),
        body: const MyHomePage(),
      ),
    );
  }
}

class MyHomePage extends StatelessWidget {
  const MyHomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          const Text(
            'Hello, Flutter!',
            style: TextStyle(fontSize: 24),
          ),
          const SizedBox(height: 20),
          ElevatedButton(
            onPressed: () {
              // print('Button Pressed!');
              // Show a snackbar when the button is pressed
              ScaffoldMessenger.of(context).showSnackBar(
                const SnackBar(content: Text('Button Pressed!')),
              );
            },
            child: const Text('Press Me Please'),
          ),
          const SizedBox(height: 20),
          Image.network(
            'https://tinyurl.com/bdfd544u',
          ),
        ],
      ),
    );
  }
}

```

**Explanation of the Code:**

- **import 'package:flutter/material.dart';**: This line imports the Flutter material design library, which contains pre-designed widgets that adhere to the Material Design guidelines.
- **runApp(MyApp());**: This function is the entry point of the app. It loads the MyApp widget.
- **StatelessWidget**: The MyApp and MyHomePage classes extend StatelessWidget, meaning they are immutable and do not maintain any internal state.
- **MaterialApp**: This widget acts as the root of the app, setting up various properties like the home screen and themes.
- **Scaffold**: Provides the basic visual structure for the app, including an app bar and a body.
- **AppBar**: This widget displays a title at the top of the app.
- **Center**: Centers its child widgets within itself.
- **Column**: Arranges its children vertically.
- **Text**: Displays the "Hello, Flutter!" text.
- **ElevatedButton**: A button that triggers an action (printing to the console) when pressed.
- **Image.network**: Displays an image from a provided URL.

**Step 3: Run the App:**

- Run the Flutter App:
- In Visual Studio Code: Open the terminal and type flutter run.
- Interact with the App:
- You should see "Hello, Flutter!" text in the center of the screen, a button labeled "Press Me" that prints "Button Pressed!" to the console when clicked, and an image loaded from the internet below the button.
- View Console Output: Check the console in your IDE to see the "Button Pressed!" message when the button is clicked.

## Lesson 4 : Class Live Recording

- Lesson 1: <https://powerlearnproject-org.zoom.us/rec/share/sRSTmKbXW0asGnhXX1lrfn4oj8yXim3E47rB0dUiAyXEAidLMVkDmr00Mzgoo8_R.ZtKmDwO_PsjCQN22>

- Lesson 2: <https://powerlearnproject-org.zoom.us/rec/share/WDo3eY7aNGjPCjLSJsQIO2DCdSCjE2aYqrPtDVogjDrindTsvePhIiGxOqY3cOs4.sBPslPPYS_gNk0m0>

- Lesson 3: <https://powerlearnproject-org.zoom.us/rec/share/FZH4Q7UB_BNwGnzXMEFYi3GZE726_yIYUvJaR91ExRaUcbVPW4VmAPVcOJbuVWNm.6NXXbmEkck0YBkn->

## Assignment 1: Introduction to Flutter

**Instructions:**

Access the assignment via this link <https://classroom.github.com/a/4ebaxkag>

Get Excited for the Flutter UI Challenge! 🚀

You’ll create a simple yet stunning application in Flutter! Here’s what you’ll do:

Build a User Interface: Design an app with a title bar featuring the app's name. 🏷️

Display a Welcome Message: Add a Text widget to greet users in style! 🌟

Interactive Button: Include an ElevatedButton that prints a message to the console when clicked. 💬

Show an Image: Load and display an image from the internet using an Image widget. 🌐

Make sure everything is well-structured, with proper alignment and spacing between widgets for a polished look!

You’ve got this! 💻🎈
