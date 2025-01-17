// SINGLETONS

/** Welcome to the Singleton Pattern club! 🎉
 * This pattern ensures your class has only one instance with global access,
 * keeping your app organized and chaos-free! 🌍✨
 * Why one? Multiple instances can lead to confusion,
 * like having two local storage wizards arguing!
 * 😱 With the Singleton pattern, calling MyClass()
 * gives you the same instance every time. 🎭✨
 * Thanks to factory constructors in Dart, implementing this pattern is a breeze!
 * Keep your code sleek and consistent—let's rock the singleton way! 🚀🎊
 * */

// Singleton class to manage file system operations
class FileSystemManager {
  // Static and final instance variable to hold the single instance of the class
  static final FileSystemManager _instance = FileSystemManager._internal();

  // Private constructor to restrict external instantiation
  FileSystemManager._internal();

  // Factory constructor to control the creation of the singleton instance
  factory FileSystemManager() {
    return _instance; // Always returns the same instance
  }

  // Method to simulate opening a file
  void openFile(String fileName) {
    print('Opening file: $fileName');
  }

  // Method to simulate writing to a file
  void writeFile(String fileName, String content) {
    print('Writing to file: $fileName with content: "$content"');
  }
}

void main() {
  // Create two references to the FileSystemManager singleton instance
  FileSystemManager manager1 = FileSystemManager(); // Uses factory constructor
  FileSystemManager manager2 = FileSystemManager(); // Returns the same instance

  // Verify that both references point to the same singleton instance
  print(
      'Are manager1 and manager2 the same instance? ${identical(manager1, manager2)}');
  print('HashCode of manager1: ${manager1.hashCode}');
  print('HashCode of manager2: ${manager2.hashCode}');

  // Calling methods on both references
  manager1.openFile("data.txt"); // Opens the file using manager1
  manager2.writeFile(
      "data.txt", "Hello, Dart!"); // Writes to the file using manager2
}
