// OOP Paradigm

import 'dart:math'; // Import math library to use pi

// 1. Declaring a class in Dart
class Person {
  // Properties of the class
  String gender;
  String name;
  int age;

  // Constructor
  Person(this.gender, this.name, this.age);

  // Method to display Person details
  void displayInfo() {
    print('Name: $name, Gender: $gender, Age: $age');
  }
}

// 2. Objects
class Car {
  // properties of the Car class
  String brand;
  String model;

  // Constructor
  Car(this.brand, this.model);

  void showDetails() {
    print('Brand: $brand, Model: $model');
  }
}

// 3. Default constructor
class Details {
  String name = 'Unknown';
  int age = 0;
}

// 4. Parameterized Constructors
class MyDetails {
  String name;
  int age;

  // Parameterized constructor
  MyDetails(this.name, this.age);
}

// 5. Object Oriented Programming Paradigm: Data Encapsulation
class Circle {
  // 5a. Hide Your Secrets
  // Private property with underscore (_)
  double _radius;

  // Constructor to initialize the radius
  Circle(this._radius);

  // 5b. Getter method to access the private radius
  double get radius => _radius;

  // 5c. Setter method to update the radius with validation
  set radius(double value) {
    if (value > 0) {
      _radius = value;
    } else {
      print('Radius must be greater than 0');
    }
  }

  // Method to set radius using setRadius()
  void setRadius(double value) {
    radius = value; // Using the setter with validation
  }

  // Method to calculate area of the circle
  double calculateArea() {
    return pi * _radius * _radius; // Area = πr²
  }
}

/** 6. 🌳 Inheritance: The Family Tree of Code! 🌳 */
// Base class (Superclass)
class Vehicle {
  String brand;
  int year;

  // Constructor for Vehicle
  Vehicle(this.brand, this.year);

  // Method to display vehicle info
  void displayInfo() {
    print("Brand: $brand");
    print("Year: $year");
  }
}

// Derived class (Subclass) inheriting from Vehicle
class SportsCar extends Vehicle {
  String model;

  // Constructor for SportsCar which uses super to call the base class constructor
  SportsCar(String brand, int year, this.model) : super(brand, year);

  // Method to display car-specific info
  void displayCarInfo() {
    displayInfo(); // Call the base class method
    print("Model: $model");
  }
}

/** 7. 🎭 Polymorphism: The Chameleon of OOP! 🎨
 * Welcome to the world of Polymorphism, where one method can wear many hats!
 * 🎩✨ Think of it as a party where all your favorite classes gather,
 * and each one brings their own unique twist to the same method name!
 */

// Base class
class Animal {
  // Method to be overridden by derived classes
  void makeSound() {
    print("Animal makes a sound");
  }
}

// Derived class Dog that overrides makeSound method
class Dog extends Animal {
  @override
  void makeSound() {
    print("Dog barks");
  }
}

// Derived class Cat that overrides makeSound method
class Cat extends Animal {
  @override
  void makeSound() {
    print("Cat meows");
  }
}

/** 8. 🌟 Abstraction: Simplifying Complexity! 🎉
 * Abstraction is like a magic lens that lets users interact only with
 * the essential features of an object, while keeping the intricate details
 * hidden away. It’s all about making the complicated simple!
 * - User-Friendly Interaction
 * - Simplicity Reveals Complexity
 */

// Abstract class Shape
abstract class Shape {
  // Abstract method (no implementation)
  double calculateArea();

  // Concrete method (with implementation)
  void printInfo() {
    print("This is a shape.");
  }
}

// Concrete class MyCircle extends Shape
class MyCircle extends Shape {
  double radius;

  // Constructor for MyCircle
  MyCircle(this.radius);

  // Override the abstract method to provide specific implementation
  @override
  double calculateArea() {
    return pi * radius * radius;
  }
}

// Concrete class Rectangle extends Shape
class Rectangle extends Shape {
  double width;
  double height;

  // Constructor for Rectangle
  Rectangle(this.width, this.height);

  // Override the abstract method to provide specific implementation
  @override
  double calculateArea() {
    return width * height;
  }
}

void main() {
  // Creating an object of the Car class
  Car myCar = Car('Toyota', 'Corolla');

  // Calling the method using the object
  myCar.showDetails(); // Output: Brand: Toyota, Model: Corolla

  // Creating an instance of Details using the default constructor
  Details details = Details();
  print("Name: ${details.name}, Age: ${details.age}");

  // Creating an instance of MyDetails using the parameterized constructor
  MyDetails myDetails = MyDetails('Allan', 25);
  print("Name: ${myDetails.name}, Age: ${myDetails.age}");

  // Creating an instance of Circle
  Circle circle = Circle(5.0);
  // Accessing the radius using getter
  print("Initial radius: ${circle.radius}");
  // Calculating and printing the area
  print("Initial area: ${circle.calculateArea()}");
  // Updating the radius using setter
  circle.radius = 7.0;
  circle.setRadius(8.0);
  // Accessing updated radius and area
  print("Updated radius: ${circle.radius}");
  print("Updated area: ${circle.calculateArea()}");
  // Trying to set an invalid radius
  circle.radius = -3.0; // This will trigger validation
  // Trying to set an invalid radius using setRadius
  circle.setRadius(-4.0); // This will trigger validation

  // Creating an instance of the SportsCar class
  SportsCar sportsCar = SportsCar('Toyota', 2021, 'Corolla');
  // Accessing methods from both base and derived classes
  sportsCar.displayCarInfo();

  // Creating instances of Animal, Dog, and Cat
  Animal animal = Animal();
  Dog dog = Dog();
  Cat cat = Cat();
  // Calling makeSound method for each instance
  animal.makeSound(); // Calls Animal's version
  dog.makeSound(); // Calls Dog's version
  cat.makeSound(); // Calls Cat's version

  // Create instances of MyCircle and Rectangle
  MyCircle myCircle = MyCircle(5.0);
  Rectangle rectangle = Rectangle(10.0, 20.0);
  // Using the common interface provided by the Shape abstract class
  myCircle.printInfo(); // Calls the concrete method in the abstract class
  print("Circle Area: ${myCircle.calculateArea()}");
  rectangle.printInfo(); // Calls the concrete method in the abstract class
  print("Rectangle Area: ${rectangle.calculateArea()}");
}
