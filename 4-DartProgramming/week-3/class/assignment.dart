// Encapsulation: BankAccount class encapsulates data and methods
class BankAccount {
  // Private variable for balance
  double _balance;

  // Constructor to initialize balance
  BankAccount(this._balance);

  // Getter for balance (read-only access)
  double get balance => _balance;

  // Method to deposit money
  void deposit(double amount) {
    if (amount > 0) {
      _balance += amount;
      print("Deposited \$${amount}. New balance: \$${_balance}");
    } else {
      print("Deposit amount must be positive.");
    }
  }

  // Method to withdraw money with validation
  void withdraw(double amount) {
    if (amount > 0 && amount <= _balance) {
      _balance -= amount;
      print("Withdrew \$${amount}. New balance: \$${_balance}");
    } else {
      print("Invalid withdrawal amount or insufficient funds.");
    }
  }
}

// Inheritance and Polymorphism: Creating a subclass for specific account types
class SavingsAccount extends BankAccount {
  double _interestRate;

  // Constructor for initializing balance and interest rate
  SavingsAccount(double balance, this._interestRate) : super(balance);

  // Method to calculate interest (overriding a common method)
  void calculateInterest() {
    double interest = balance * _interestRate / 100;
    deposit(interest); // Add interest to balance
    print("Interest of \$${interest} added at rate $_interestRate%");
  }
}

class CheckingAccount extends BankAccount {
  double _transactionFee;

  // Constructor for initializing balance and transaction fee
  CheckingAccount(double balance, this._transactionFee) : super(balance);

  // Overridden withdraw method to apply transaction fee (polymorphism)
  @override
  void withdraw(double amount) {
    double totalAmount = amount + _transactionFee;
    if (totalAmount > 0 && totalAmount <= balance) {
      super.withdraw(totalAmount); // Call superclass method
      print("Applied transaction fee of \$$_transactionFee.");
    } else {
      print("Invalid withdrawal amount or insufficient funds after fee.");
    }
  }
}

// Abstraction: Abstract class for an Account that declares common methods
abstract class Account {
  void deposit(double amount); // Abstract method
  void withdraw(double amount); // Abstract method
}

void main() {
  // Using the encapsulated SavingsAccount and CheckingAccount
  SavingsAccount savings = SavingsAccount(1000, 5);
  savings.calculateInterest(); // Calculate and add interest

  CheckingAccount checking = CheckingAccount(1000, 2);
  checking.deposit(500); // Deposit money
  checking.withdraw(100); // Withdraw money with transaction fee

  // Polymorphism: Using different implementations of withdraw method
  print("\n--- Polymorphism Demo ---");
  BankAccount account1 = SavingsAccount(1000, 4);
  account1.withdraw(200); // Withdraw from SavingsAccount

  BankAccount account2 = CheckingAccount(1000, 1);
  account2.withdraw(200); // Withdraw from CheckingAccount
}
