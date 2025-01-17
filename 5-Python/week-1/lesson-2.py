# Understanding Python Data Types

"""
In computer programming, data types specify the type of data that can be stored inside a variable. For example,

num = 24

Here, 24 (an integer) is assigned to the num variable. So the data type of num is of the int class.

# Python Data Types:

Data Types	       Class	            Description
numeric	       int, float, complex	    Holds numeric values
string	       str	                    Holds sequence of characters
sequence	   list, tuple ,range	    Holds collection of items
mapping	       dict	                    Holds data in key-value pair form
boolean	       bool	                    Holds either True or False
set	           set	                    Holds collection of unique items

Since everything is an object in Python programming, data types are actually classes and variables are instances(object) of these classes.
"""

# 1. Python Numeric Data type

# int - holds signed integers of non-limited length.
num1 = 55 # int

# float - holds floating decimal points and it's accurate up to 15 decimal places.
num2 = 5.3 # float

print(num1)
print(num2)

int512bits = (2**512) - 1 # test if python can store a integer greater than 256 bits in a variable
print(int512bits)

# 2.1 Python List Data Type
# A list is an ordered collection of similar or different types of items separated by commas and enclosed within brackets [ ].
languages = ["Python", "Dart", "Web", 23, 12]
print(languages)

# 2.2 Access List Items
# To access items from a list, we use the index number (0, 1, 2 ...).
# For example:
print(languages[1]) # Output: Dart

# 3.1 Python Tuple Data Type
# A tuple is an ordered sequence of items same as a list. The only difference is that tuples are immutable.
# Tuples once created cannot be modified. It is enclosed within parentheses ().

products = ('XBox', 499.99, "Habibi", 23)
print(products)

# 3.2 Access Tuple Items
# Similar to lists, we use the index number to access tuple items in Python. For example:
products = ('XBox', 499.99, "Habibi", 23)
print(products[2]) # Output: Habibi

# 4. Python String Data Type
site_name = "Power Learn Project"
print(site_name)
print(site_name[6])

# 5. Python Set Data Type
# The Set is an unordered collection of unique items.
# Set is defined by values separated by commas inside curly braces / curly brackets { }. For example:
student_ids = {112, 114, 117, 113}
print(student_ids)
# Since sets are unordered collections, indexing has no meaning. Hence, the slicing operator [] does not work.
# print(student_ids[2]) # Output: TypeError: 'set' object is not subscriptable

# 6. Python Dictionary Data Type
# Python dictionary is an ordered collection of items. It stores elements in key/value pairs.
# Here, keys are unique identifiers that are associated with each value.
# Let's see an example:
capital_city = {"Kenya": "Nairobi", "Nigeria": "Abuja"}
print(capital_city)
print(capital_city["Kenya"]) # Output: Nairobi

# Convert dictionary values to a list
values_list = list(capital_city.values())
print(values_list)
# Access by index
print(values_list[1])  # Output: Abuja

# keys() - Returns a view object containing the dictionary's keys.
keys = capital_city.keys()
print(keys)  # Output: dict_keys(['Kenya', 'Nigeria'])

# values() - Returns a view object containing the dictionary's values.
values = capital_city.values()
print(values)  # Output: dict_values(['Nairobi', 'Lagos'])

# items() - Returns a view object containing the dictionary's key-value pairs (as tuples).
items = capital_city.items()
print(items)  # Output: dict_items([('Kenya', 'Nairobi'), ('Nigeria', 'Lagos')])

# get() - Returns the value for the specified key, or None if the key is not found (you can also specify a default value).
capital = capital_city.get("Kenya")
print(capital)  # Output: Nairobi
capital = capital_city.get("Uganda", "Not Found")
print(capital)  # Output: Not Found

# update() - Updates the dictionary with key-value pairs from another dictionary or iterable of key-value pairs.
capital_city.update({"Uganda": "Kampala"})
print(capital_city)

# pop() - Removes and returns the value for the specified key. If the key is not found, it raises a KeyError, but you can specify a default value to return if the key is not found.
removed_value = capital_city.pop("Nigeria")
print(removed_value)  # Output: Lagos
print(capital_city)  # Output: {'Kenya': 'Nairobi'}
removed_value = capital_city.pop("NonExistingKey", "Default Value")
print(removed_value)  # Output: Default Value

# popitem() - Removes and returns a random key-value pair from the dictionary. This is useful if you need to get and remove an arbitrary item.
item = capital_city.popitem()
print(item)  # Output: ('Kenya', 'Nairobi')

# copy() - Returns a shallow copy of the dictionary.
new_dict = capital_city.copy()
print(new_dict)  # Output: {'Kenya': 'Nairobi', 'Nigeria': 'Lagos'}

# clear() - Removes all items from the dictionary.
capital_city.clear()
print(capital_city)  # Output: {}
