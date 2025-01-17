void main() {
  String text = 'Hello, Dart programming!';

  // Extract a substring from index 7 to 11 (starts at 7, including 7, and ends at 10)
  String subText = text.substring(7, 11);

  print('Substring: $subText'); // Output: Substring: Dart
  print('text index 4: ${text[4]}');
}
