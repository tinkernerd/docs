---
title: Data Types
category: Python
dateCreated: 2024-11-19
type: Notes
tags: [data types, python]
outline: deep
---

# Data Types in Python

## Overview
Python provides various data types to define and manage data effectively. These include:
1. Numbers
2. Strings
3. Booleans
4. Lists
5. Tuples
6. Dictionaries
7. Sets

---

## Numbers
1. Represent numerical data and can perform arithmetic operations.
2. Types of numbers:
   - **Integer (`int`)**: Whole numbers, both positive and negative.
   - **Floating Point (`float`)**: Decimal numbers.
   - **Complex Numbers (`complex`)**: Numbers with a real and imaginary part.

### Examples:

```python
x = 10       # Integer
y = 3.14     # Float
z = 1 + 2j   # Complex number
```

### Common Functions:
- `type(x)`: Returns the type of `x`.
- `int()`: Converts to integer.
- `float()`: Converts to float.
- `complex()`: Converts to complex number.

---

## Strings
1. A sequence of characters enclosed in single, double, or triple quotes.
2. Strings are immutable.

### Examples:

```python
string1 = 'Hello'
string2 = "World"
string3 = """This is a 
multiline string."""
```

### Common Operations:
- Concatenation: `"Hello" + " " + "World"` → `"Hello World"`
- Repetition: `"Hi" * 3` → `"HiHiHi"`
- Slicing: `"Python"[0:3]` → `"Pyt"`
- Methods: `upper()`, `lower()`, `strip()`, `replace()`, etc.

### Example:

```python
text = "Python"
print(text.upper())      # Output: "PYTHON"
print(text[0:3])         # Output: "Pyt"
```

---

## Booleans
1. Represents one of two values: `True` or `False`.
2. Often used in conditional statements and logical operations.

### Examples:

```python
is_active = True
is_admin = False
```

### Common Operations:
- Logical Operators: `and`, `or`, `not`
- Comparison Operators: `==`, `!=`, `<`, `>`, `<=`, `>=`

Example:

```python
x = 10
print(x > 5)  # Output: True
```

---

## Lists
1. A collection of items that is ordered, mutable, and allows duplicates.
2. Defined using square brackets `[]`.

### Examples:

```python
fruits = ["apple", "banana", "cherry"]
```

### Common Operations:
- Access: `fruits[0]` → `"apple"`
- Modify: `fruits[1] = "blueberry"`
- Append: `fruits.append("orange")`
- Methods: `pop()`, `remove()`, `sort()`, etc.

Example:

```python
fruits = ["apple", "banana", "cherry"]
fruits.append("orange")
print(fruits)  # Output: ['apple', 'banana', 'cherry', 'orange']
```

---

## Tuples
1. Similar to lists but immutable (cannot be changed after creation).
2. Defined using parentheses `()`.

### Examples:

```python
coordinates = (10, 20, 30)
```

### Common Operations:
- Access: `coordinates[0]` → `10`
- Methods: `count()`, `index()`

Example:

```python
coordinates = (10, 20, 30)
print(coordinates[1])  # Output: 20
```

---

## Dictionaries
1. Collection of key-value pairs.
2. Defined using curly braces `{}`.

### Examples:

```python
person = {"name": "Alice", "age": 25}
```

### Common Operations:
- Access: `person["name"]` → `"Alice"`
- Modify: `person["age"] = 30`
- Methods: `keys()`, `values()`, `items()`

Example:

```python
person = {"name": "Alice", "age": 25}
person["age"] = 30
print(person)  # Output: {'name': 'Alice', 'age': 30}
```

---

## Sets
1. Unordered collection of unique items.
2. Defined using curly braces `{}` or the `set()` function.

### Examples:

```python
unique_numbers = {1, 2, 3, 4, 5}
```

### Common Operations:
- Add: `unique_numbers.add(6)`
- Remove: `unique_numbers.remove(3)`
- Mathematical operations: Union (`|`), Intersection (`&`), Difference (`-`).

Example:

```python
unique_numbers = {1, 2, 3}
unique_numbers.add(4)
print(unique_numbers)  # Output: {1, 2, 3, 4}
```

---

## Type Conversion
1. You can convert between data types using built-in functions.

| Function   | Description           | Example                |
|------------|-----------------------|------------------------|
| `int()`    | Converts to integer   | `int(3.14)` → `3`      |
| `float()`  | Converts to float     | `float(3)` → `3.0`     |
| `str()`    | Converts to string    | `str(3)` → `"3"`       |
| `bool()`   | Converts to boolean   | `bool(0)` → `False`    |
| `list()`   | Converts to list      | `list((1, 2))` → `[1, 2]` |
| `tuple()`  | Converts to tuple     | `tuple([1, 2])` → `(1, 2)` |
| `set()`    | Converts to set       | `set([1, 2, 2])` → `{1, 2}` |

Example:

```python
x = "123"
y = int(x)  # Convert string to integer
print(type(y))  # Output: <class 'int'>
```

---

## Summary
1. Python provides various data types to work with different kinds of data.
2. Understanding data types and their operations is essential for writing efficient code.
3. Use type conversion functions to switch between types when needed.
