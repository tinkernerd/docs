---
title: Quarter Year Counter Table
outline: deep
---
# {{ $frontmatter.title }}

<script setup>
import QuarterYearCounterTable from '@theme/components/Projects/QuarterYearCounterTable.vue'
</script>

## Project Summary:

The **Quarter Year Counter Table** is an interactive Vue.js component designed to track quarters collected by year. It provides a user-friendly interface for adding or subtracting quarters, calculates total values dynamically, and includes features to export the data as JSON or CSV files. This tool is particularly useful for simple financial tracking or educational purposes.

## Working Example:

<QuarterYearCounterTable/>

## Explanation:

## HTML Structure

The component's structure is organized as follows:

- **Header**: Contains the title of the project.
- **Table**: Displays data with columns for `Year`, `Quarters`, and `Total $`. The table has:
  - **Header Row**: Defines column titles.
  - **Body Rows**: Populated dynamically using `v-for` from a `years` array in the Vue component.
  - **Footer Row**: Displays totals calculated via computed properties.
- **Buttons Section**: Includes two buttons:
  - "Save as JSON" to download the table data in JSON format.
  - "Save as CSV" to download the table data in CSV format.

## JavaScript Code Explanation

### Data Properties:
- **`years`**: An array of objects, each representing a year, its label, and the number of quarters.
- **`selectedRow`**: Tracks the currently selected row for user interaction.

### Computed Properties:
- **`totalQuarters`**: Calculates the total number of quarters across all rows.
- **`totalDollars`**: Computes the total value of quarters in dollars by multiplying `totalQuarters` by $0.25.

### Methods:
1. **`saveToJson`**:
   - Converts the `years` array into a JSON format.
   - Downloads the data as a `.json` file named `quarters_and_coins-data.json`.

2. **`saveToCsv`**:
   - Creates a CSV string from the `years` array.
   - Downloads the data as a `.csv` file named `quarters_and_coins.csv`.

3. **`adjustQuarters(amount)`**:
   - Adjusts the `quarters` value of the selected row by the specified `amount`.
   - Prevents the value from dropping below zero.

4. **`moveUp` and `moveDown`**:
   - Navigate through rows in the table.
   - Updates `selectedRow` to highlight the corresponding row.

### Keyboard Shortcuts:
- **F15**: Move to the previous row.
- **F18**: Move to the next row.
- **F17**: Decrease the quarter count for the selected row.
- **F16**: Increase the quarter count for the selected row.

## Styling

Custom styles ensure that the component is both visually appealing and responsive:
- **Selected Row**: Bold text for clarity.
- **Total Row**: Highlighted with a light gray background.
- **Buttons**:
  - Styled with padding, a green background, and a hover effect.

## Future Enhancements

1. Add validation for user inputs to ensure proper data formatting.
2. Include an option for importing data from JSON or CSV files.
3. Extend functionality to track additional coin types or years.

Feel free to explore the example and tweak the code as needed for your specific requirements!
