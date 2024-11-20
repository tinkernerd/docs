---
title: Modules and Imports
category: Python
dateCreated: 2024-11-19
type: Notes
tags: [modules, imports, python]
outline: deep
---

# Modules and Imports in Python

## Overview
A module in Python is a file containing Python code (functions, classes, variables) that can be reused across multiple programs. Python's import system allows you to access these modules.

---

## What is a Module?
1. **Built-in Modules**: Pre-installed with Python (e.g., `math`, `os`, `sys`).
2. **Custom Modules**: User-created Python files (e.g., `my_module.py`).
3. **Third-party Modules**: Installed via package managers like `pip` (e.g., `numpy`, `pandas`).

### Examples:
- Built-in Module:
  ```python
  import math
  print(math.sqrt(16))  # Output: 4.0
  ```
- Custom Module:
  ```python
  # In my_module.py
  def greet(name):
      return f"Hello, {name}!"

  # In another file
  import my_module
  print(my_module.greet("Alice"))  # Output: Hello, Alice!
  ```

---

## Importing Modules
Python provides several ways to import modules.

### Import the Entire Module
1. Imports all functions, classes, and variables from a module.
2. Syntax:
   ```python
   import module_name
   ```
3. Access members using dot notation (`module_name.member`).

Example:
```python
import math
print(math.pi)  # Output: 3.141592653589793
```

---

### Import Specific Members
1. Imports specific members (functions, classes, or variables) from a module.
2. Syntax:
   ```python
   from module_name import member_name
   ```
3. Directly access the imported member.

Example:
```python
from math import sqrt
print(sqrt(25))  # Output: 5.0
```

---

### Import All Members
1. Imports all members from a module without using dot notation.
2. Syntax:
   ```python
   from module_name import *
   ```
3. Not recommended as it can lead to namespace conflicts.

Example:
```python
from math import *
print(sin(0))  # Output: 0.0
```

---

### Rename Imported Module or Member
1. Use the `as` keyword to provide an alias.
2. Syntax:
   ```python
   import module_name as alias
   from module_name import member_name as alias
   ```

Example:
```python
import math as m
print(m.pi)  # Output: 3.141592653589793
```

---

## Using `__name__` and `__main__`
1. The `__name__` variable is set to `"__main__"` when the module is run directly, but it takes the module name when imported.
2. Useful to execute code only when the script is run directly, not when imported.

Example:
```python
# my_module.py
def greet():
    print("Hello, World!")

if __name__ == "__main__":
    greet()
```

```python
# Running my_module.py directly:
# Output: Hello, World!

# Importing my_module in another script:
import my_module
# No output
```

---

## Installing and Using Third-party Modules
1. Use `pip` (Python Package Installer) to install third-party modules.
2. Syntax:
   ```bash
   pip install module_name
   ```
3. Example:
   ```bash
   pip install numpy
   ```

Example Usage:
```python
import numpy as np
arr = np.array([1, 2, 3])
print(arr)  # Output: [1 2 3]
```

---

## Built-in Functions for Modules
1. `dir(module)`: Lists all members of a module.
2. `help(module)`: Displays documentation for a module.

Example:
```python
import math
print(dir(math))  # Lists all functions and variables in the math module
help(math.sqrt)   # Displays help for the sqrt function
```

---

## Custom Modules
1. Create a `.py` file containing functions, classes, or variables.
2. Import it into other Python files.
3. Ensure the module is in the same directory or in a directory included in `sys.path`.

Example:
```python
# In my_module.py
def add(a, b):
    return a + b
```

```python
# In main.py
import my_module
print(my_module.add(5, 3))  # Output: 8
```

---

## The `sys` Module
1. The `sys` module allows you to interact with the Python runtime environment.

### Common Attributes:
- `sys.path`: List of directories Python searches for modules.
- `sys.argv`: List of command-line arguments passed to the script.

Example:
```python
import sys
print(sys.path)  # Prints module search paths
```

---

## The `os` Module
1. The `os` module allows interaction with the operating system.

### Common Functions:
- `os.getcwd()`: Get current working directory.
- `os.listdir(path)`: List files in a directory.
- `os.rename(src, dst)`: Rename a file.
- `os.remove(file)`: Delete a file.

Example:
```python
import os
print(os.getcwd())  # Output: Current working directory
```

---

## Summary
1. Modules allow you to organize code into reusable components.
2. Use `import` statements to access built-in, third-party, or custom modules.
3. Use `pip` to install and manage third-party modules.
4. Leverage `sys` and `os` modules for runtime and system-level interactions.
