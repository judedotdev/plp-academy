// lists are arrays of ordered items
// A list is a data structure that stores a collection of items in a specific order.
// Each item in a list can be accessed by its position, or index, which starts at zero for the first item.
// Lists are versatile and can hold multiple data types, like numbers, strings, or even other lists.
// Dart List is similar to an array, which is the ordered collection of the objects. If you want to store multiple values without creating multiple variables, you can use a list.
void main() {
  List myList = [100, 40, "Audrey", 12];

  // print the list
  print(myList);

  // add values to our list
  myList.add("James");
  // view the list to see the new item that was added
  print(myList);
  // remove an item from the list
  myList.remove("Audrey");
  print(myList);

  // use square brackets for listing
  List mySecondList = [1, 2, 4, "Jackson"];
  // adding value to the list

  mySecondList.add(67);
  mySecondList.remove("Jackson");
  // remove value
  mySecondList.remove(4);
  print(mySecondList);
}
