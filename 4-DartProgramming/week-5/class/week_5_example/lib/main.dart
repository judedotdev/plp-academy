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
              // ScaffoldMessenger.of(context).showSnackBar(
              //   const SnackBar(content: Text('Button Pressed!')),
              // );

              // Displays a modal dialog box over the current content.
              showDialog(
                context: context,
                builder: (BuildContext context) {
                  return AlertDialog(
                    title: const Text("Dialog"),
                    content: const Text("Button Pressed!"),
                    actions: [
                      TextButton(
                        onPressed: () => Navigator.of(context).pop(),
                        child: const Text("Close"),
                      ),
                    ],
                  );
                },
              );
            },
            child: const Text('Press Me Please'),
          ),
          const SizedBox(height: 20),
          Flexible(
            child: Image.network(
              'https://tinyurl.com/bdfd544u',
            ),
          ),
        ],
      ),
    );
  }
}
