// we can declare our functions inside the main() function.
// but we choose to declare it ouside so our code will be easier to manage
// and so that alternatively we can have the functions in external files
// which we can import in the main file
void main() {
  void noParameterNoRetunType() {
    print("This Function takes no parameters, and also retuns nothing");
  }

  noParameterNoRetunType();
}
