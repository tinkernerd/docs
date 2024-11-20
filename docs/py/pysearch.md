---
title: Tkinter Search Bar
outline: deep
---

# Tkinter Search Bar
## GitHub Link:
-  [tinkernerd/Tkinter-Search-Bar](https://www.github.com/tinkernerd/Tkinter-Search-Bar)

```py
import tkinter as tk
from tkinter import ttk
from tkinter import *
import csv

filename = "src/csv/data.csv"
# Define function to search for items in CSV file
def search_items(event=None):
    search_term = search_var.get()
    search_results = []
    for item in items:
        if search_term.lower() in item[0].lower():
            search_results.append(item[0])
    search_box.config(values=search_results)

# Define function to select item from dropdown


def select_item(event=None):
    selected_item = search_var.get()
    for item in items:
        if selected_item == item[0]:
            selection_var.set(item[0])
            primary_var.set(item[1])
            secondary_var.set(item[2])
            break
    else:
        selection_var.set("No matches found")
        primary_var.set("")
        secondary_var.set("")


# Load items from CSV file
with open(filename, newline='') as csvfile:
    items_reader = csv.reader(csvfile)
    items = list(items_reader)
# Create GUI
root = tk.Tk()
root.title("Search Bar Example")
root.geometry("400x300")



# Create label to display "Search"
search_label_text = tk.StringVar(value="Howdy, Search Here:")
search_label = ttk.Label(root, textvariable=search_label_text)
search_label.grid(row=1, column=0, padx=10, pady=10, sticky=tk.W)
# Combo Box
search_var = tk.StringVar()
search_box = ttk.Combobox(root, textvariable=search_var)
search_box.grid(row=1, column=1, padx=10, pady=10)
# Bind selection function to selection event
search_box.bind('<<ComboboxSelected>>', select_item)
# Bind search function to key release event
search_box.bind('<KeyRelease>', search_items)
search_box.bind('<Return>', lambda event: search_box.event_generate(
    '<<ComboboxSelected>>'))  # Bind Enter key to open dropdown


# Create label to display "Selection"
selection_label_text = tk.StringVar(value="First Name")
selection_label = ttk.Label(root, textvariable=selection_label_text)
selection_label.grid(row=2, column=0, padx=10, pady=5, sticky=tk.W)

# Create label to display current selection
selection_var = tk.StringVar()
selection_label = ttk.Label(root, textvariable=selection_var)
selection_label.grid(row=2, column=1, padx=10, pady=5, sticky=tk.W)

# Create label to display "Primary"
primary_label_text = tk.StringVar(value="Last Name")
primary_label = ttk.Label(root,  textvariable=primary_label_text)
primary_label.grid(row=3, column=0, padx=10, pady=5, sticky=tk.W)

# Create labels to display information about selected item
primary_var = tk.StringVar()
primary_label = ttk.Label(
    root, textvariable=primary_var)
primary_label.grid(row=3, column=1, padx=10, pady=5, sticky=tk.W)

# Create label to display "Secondary"
secondary_label_text = tk.StringVar(value="Major")
secondary_label = ttk.Label(root, textvariable=secondary_label_text)
secondary_label.grid(row=4, column=0, padx=10, pady=5, sticky=tk.W)

secondary_var = tk.StringVar()
secondary_label = ttk.Label(root, textvariable=secondary_var)
secondary_label.grid(row=4, column=1, padx=10, pady=5, sticky=tk.W)




# Create label to display "Third"

# Call select function to display initial item
select_item()
# set_instructions()
root.mainloop()
```