# Variables and Data Types.

# Concept: Variables are like containers that store data.
# Python has various data types, such as integers, floats, strings, and booleans.

# Explanation: Imagine your variables as little boxes where you can keep different kinds of stuff.
# You can label these boxes to know what's inside.
# For example, you might have a box for your favorite number, another for a word, and one for a true/false value.



# 1. Integers (int)
favourite_number = 42
print(f"My favourite number is {favourite_number}")
print(type(favourite_number))  # <class 'int'>


# 2. Floating-Point Numbers (float)
y = 3.14
print(type(y))  # <class 'float'>


# 3. Strings (str)
greeting = "Hello, world!"
print(greeting)
print(type(greeting))  # <class 'str'>


# 4. Booleans (bool)
is_python_fun = True
print(f"Is Python fun?: {is_python_fun}")
print(type(is_python_fun))  # <class 'bool'>


# 5. Lists (list)
l = [1, 2, 3, "apple", 4.5]
print(type(l))  # <class 'list'>


# 6. Tuples (tuple)
t = (1, 2, 3, "apple", 4.5)
print(type(t))  # <class 'tuple'>


# 7. Sets (set)
s = {1, 2, 3, "apple"}
print(type(s))  # <class 'set'>


# 8. Dictionaries (dict)
d = {"name": "Alice", "age": 30}
print(type(d))  # <class 'dict'>


# 9. NoneType (NoneType)
n = None
print(type(n))  # <class 'NoneType'>


# 10. Bytes (bytes)
b = b"hello"
print(type(b))  # <class 'bytes'>


# 11. Byte Arrays (bytearray)
ba = bytearray([65, 66, 67])
print(type(ba))  # <class 'bytearray'>


# 12. Memory Views (memoryview)
m = memoryview(bytes("hello", 'utf-8'))
print(type(m))  # <class 'memoryview'>
