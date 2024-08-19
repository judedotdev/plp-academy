# 3. Loops (for and while)

# Concept:
# Loops allow you to repeat a block of code multiple times.
# for loops are used when you know the number of iterations,
# while while loops run until a condition is met.



# Explanation:
# Loops are like a list of chores.
# You repeat the same action until you've completed all the chores (for loop)
# or until the house is clean (while loop).


# For loop example
for i in range(5):
    print(f"This is loop iteration {i}")


# While loop example
countdown = 5
while countdown > 0:
    print(f"Countdown: {countdown}")
    countdown -= 1
print("Blast off!")