---
title: Functions
category: Python
dateCreated: 2024-11-19
type: Notes
tags: [functions, python]
outline: deep

---

# Functions in Python

## Overview
1. A function is a group of statements within a program that performs a specific task.
2. Functions allow you to reuse code and organize it into logical fragments.
3. Two types of functions:
   - **Built-in Functions**: Available in Python without importing.
   - **User-defined Functions**: Written by the user to perform specific tasks.

---

## Built-in Functions
1. **Common Examples**:
   - `input([prompt])`: Takes input from the user.
   - `print()`: Displays output.
   - `len()`: Returns the length of an object.
   - `type()`: Returns the type of an object.

Example:

```python
print("Hello, Python!")
```

---

## User-defined Functions
1. Functions written by the user.
2. Steps to define a function:
   - Use the `def` keyword followed by the function name.
   - Add parameters within parentheses (optional).
   - End the definition with a colon.
   - Write the logic for the function.
   - Use the `return` keyword to return output (optional).

### Syntax:

```python
def function_name(parameter_one, parameter_two):
    # Logic here
    return result
```

### Example:

```python
def add_numbers(a, b):
    return a + b

result = add_numbers(5, 10)
print(result)  # Output: 15
```

---

## Global and Local Variables
1. **Local Variables**:
   - Defined inside a function.
   - Have a local scope (accessible only within the function).
2. **Global Variables**:
   - Defined outside any function.
   - Have global scope (accessible both inside and outside functions).

Example:

```python
X = 20  # Global variable

def my_function():
    X = 10  # Local variable
    print("Local X:", X)

my_function()
print("Global X:", X)
```

---

## Function Return
1. Use `return` to send a value back to the caller.
2. If `return` is not used, the function returns `None`.

Example:

```python
def square(number):
    return number * number

print(square(4))  # Output: 16
```

---

## Function Arguments
### Required Arguments
1. Must be present when calling a function.
2. Arguments must be in the correct order.

Example:

```python
def divide(a, b):
    return a / b

print(divide(10, 2))  # Output: 5.0
```

---

### Keyword Arguments
1. Identified by parameter names, allowing arguments to be passed in any order.

Example:

```python
def greet(name, greeting):
    return f"{greeting}, {name}!"

print(greet(name="Alice", greeting="Hello"))  # Output: Hello, Alice!
```

---

### Default Arguments
1. Default values are used if no argument is provided during the call.

Example:

```python
def greet(name="Stranger"):
    return f"Hello, {name}!"

print(greet())            # Output: Hello, Stranger!
print(greet("Alice"))     # Output: Hello, Alice!
```

---

### Variable-length Arguments
1. Use `*args` to pass a variable number of arguments.
2. Use `**kwargs` to pass a variable number of keyword arguments.

#### Example with `*args`:

```python
def add(*numbers):
    total = sum(numbers)
    return total

print(add(1, 2, 3, 4))  # Output: 10
```

#### Example with `**kwargs`:

```python
def display_info(**info):
    for key, value in info.items():
        print(f"{key}: {value}")

display_info(name="Alice", age=25, city="New York")
```

---

## Anonymous Functions (Lambda)
1. Lambda functions are small, anonymous functions defined with the `lambda` keyword.
2. Syntax: `lambda arguments: expression`.

Example:

```python
square = lambda x: x * x
print(square(5))  # Output: 25
```

---

## Function Summary
1. Functions help break programs into reusable pieces of code.
2. They improve readability and modularity.
3. Built-in functions provide pre-defined utilities, while user-defined functions allow customization.
