import 'dart:math'; // Import math library to use pi

/**
 * 1) Internal variables: can be accessed from within the contract in which they are defined, as well as from derived contracts (contracts that inherit from the base contract).
 * 2) Private variables: can only be accessed from within the contract in which they are defined. They are not accessible from derived contracts.
 */

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

class NamedCircle extends Circle {
  String name;

  NamedCircle(double _radius, this.name) : super(_radius);

  void displayName() {
    print("Circle Name: $name");
  }
}

void main() {
  NamedCircle jCircle = NamedCircle(7, "Jude's Circle");
  jCircle.displayName();
  print(jCircle.calculateArea());
  print(jCircle.radius);
}
