# Concept:
# Control flow allows you to make decisions
# in your code using if, elif, and else statements.



# Explanation:
# Think of control flow as if choosing your own adventure in a story.
# Depending on your choices, the story (or your code) takes a different path.


temperature = 30

if temperature > 25:
    print("It's hot outside! Wear shorts.")
elif temperature > 15:
    print("It's warm. maybe a light jacket.")
else:
    print("Brrr! It's cold. Bundle up!")


# MODIDIED VERSION

# Get temperature input from the user
temperature = float(input("Enter the current temperature in degrees Celsius: "))

# Determine clothing recommendation based on temperature
if temperature > 25:
    print("It's hot outside! Wear shorts.")
elif temperature > 15:
    print("It's warm. Maybe a light jacket.")
else:
    print("Brrr! It's cold. Bundle up!")
