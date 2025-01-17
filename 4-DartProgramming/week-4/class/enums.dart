import 'dart:io';

// Define an enum called Day
enum Day {
  monday,
  tuesday,
  wednesday,
  thursday,
  friday,
  saturday,
  sunday,
}

void main() {
  // Print all possible values of the enum
  print('All days of the week:');
  for (var day in Day.values) {
    print("${day.index + 1}. ${day}");
  }

  // Create a variable of type Day
  Day today = Day.monday;

  // Use a switch statement to perform actions based on the enum value
  switch (today) {
    case Day.monday:
      print('\nStart of the work week!');
      break;
    case Day.friday:
      print('\nAlmost the weekend!');
      break;
    case Day.saturday:
    case Day.sunday:
      print('\nWeekend!');
      break;
    default:
      print('\nMidweek days.');
  }

  // Get the name of an enum value
  print('The name of the enum value is: ${today.name}');

  stdout.write(
      '\nEnter a day of the week: '); // Using stdout.write for prompt without newline
  String? input = stdin
      .readLineSync()
      ?.toLowerCase(); // Get user input and convert to lowercase

  // Use a switch statement to perform actions based on the enum value
  if (input != null) {
    switch (input) {
      case 'monday':
        print('\nStart of the work week!');
        break;
      case 'friday':
        print('\nAlmost the weekend!');
        break;
      case 'saturday':
      case 'sunday':
        print('\nWeekend!');
        break;
      default:
        print('\nMidweek days.');
    }
  } else {
    print('\nNo input provided.');
  }
}
