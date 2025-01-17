// variables are strorage containers which are used to store data
// Variables are used to store data that can be used and manipulated throughout your program.
// In Dart, you can declare variables using var, final, or const.
// The choice depends on whether the variable's value is intended to be mutable or immutable.
// The final keyword is used When the variable's value will be assigned only once.

void main() {
  var country = "Tanzania";
  final population = 10000000; // if you are not willing to change it
  const Pi = 3.14; // something that always remains the same, never changes

  print(country);
  print(population);
  print(Pi);

  String wizardName = 'Gandalf'; // 🧙‍♂️ A String spell!
  int magicLevel = 100; // 💪 Integer magic!
  double spellPower = 75.5; // 💥 Double trouble!
  bool hasMagicStaff = true; // 🪄 A magical staff? True or False?

  print('Name: $wizardName');
  print('Magic Level: $magicLevel');
  print('Spell Power: $spellPower');
  print('Has Staff: $hasMagicStaff');

  // 🔥 Update a variable
  magicLevel = 110;
  print('New Magic Level: $magicLevel');
}
