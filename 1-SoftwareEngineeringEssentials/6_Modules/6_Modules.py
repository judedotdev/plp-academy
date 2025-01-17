# 6. Modules

# Concept:
# Modules are files containing Python code (functions, variables, etc.)
# that you can import and use in your projects.
# They help keep your code organized and reusable.


# Explanation:
# Think of modules as toolboxes.
# Each toolbox contains tools (functions, classes, variables)
# you can use in your project without building them from scratch.


# Let's use the built-in math module
import math

# Using a function from the math module
result = math.sqrt(16)
print(f"The square root of 16 is {result}")


# Creating and using your own module
# Save this code in a file named my_module.py
# def greet(name):
#     return f"Hello, {name}!"

# Now in your main script, you can import and use it
import my_module

print(my_module.greet("Alice"))