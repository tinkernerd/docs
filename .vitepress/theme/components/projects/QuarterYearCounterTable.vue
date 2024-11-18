<template>
    <div class="table-page">
        <h1>Quarter and Coin Table</h1>
                <!-- Buttons Section -->
        <div class="actions">
            <button @click="saveToJson">Save as JSON</button>
            <button @click="saveToCsv">Save as CSV</button>
        </div>
        <div class="table-container">
            <table>
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Quarters</th>
                        <th>Total $</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(year, index) in years" :key="year.id"
                        :class="{ selected: selectedRow === index, totalRow: year.id === 'total' }">
                        <td>{{ year.label }}</td>
                        <td>{{ year.quarters }}</td> <!-- Display quarters as text -->
                        <td>${{ (year.quarters * 0.25).toFixed(2) }}</td> <!-- Total $ formatted to $00.00 -->
                    </tr>
                </tbody>
                <tfoot>
                    <tr class="total-row">
                        <td>Total</td>
                        <td>{{ totalQuarters }}</td>
                        <td>${{ totalDollars.toFixed(2) }}</td> <!-- Total $ formatted to $00.00 -->
                    </tr>
                </tfoot>
            </table>
        </div>
        

    </div>
</template>

<script lang="js">
export default {
    data() {
        return {
            years: [
                { id: '00', label: "'00", quarters: 0 },
                { id: '01', label: "'01", quarters: 0 },
                { id: '02', label: "'02", quarters: 0 },
                { id: '03', label: "'03", quarters: 0 },
                { id: '04', label: "'04", quarters: 0 },
                { id: '05', label: "'05", quarters: 0 },
                { id: '06', label: "'06", quarters: 0 },
                { id: '07', label: "'07", quarters: 0 },
                { id: '08', label: "'08", quarters: 0 },
                { id: '09', label: "'09", quarters: 0 },
                { id: '10', label: "'10", quarters: 0 },
                { id: 'others', label: "Others", quarters: 0 }
            ],
            selectedRow: 0 // This keeps track of which row is currently selected
        };
    },
    computed: {
        totalQuarters() {
            return this.years
                .reduce((sum, year) => sum + year.quarters, 0); // Sum all quarters
        },
        totalDollars() {
            return this.totalQuarters * 0.25; // Each quarter is worth $0.25
        }
    },
    methods: {
        // Save all data to a JSON file
        saveToJson() {
            const data = this.years.map(year => ({
                label: year.label.startsWith("'") ? `20${year.label.substring(1)}` : year.label, // Convert '01 to 2001
                quarters: year.quarters,
                totalDollar: (year.quarters * 0.25).toFixed(2) // Format dollar amount
            }));

            const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'quarters_and_coins-data.json'; // Set file name for download
            link.click();
        },

        // Save all data to a CSV file
        saveToCsv() {
            const rows = [
                ['Year', 'Quarters', 'Total $'], // Header row
                ...this.years.map(year => [
                    year.label.startsWith("'") ? `20${year.label.substring(1)}` : year.label, // Convert '01 to 2001
                    year.quarters,
                    (year.quarters * 0.25).toFixed(2) // Format dollar amount
                ])
            ];

            let csvContent = 'data:text/csv;charset=utf-8,';
            rows.forEach(row => {
                csvContent += row.join(',') + '\r\n'; // Add each row to the CSV content
            });

            const encodedUri = encodeURI(csvContent);
            const link = document.createElement('a');
            link.setAttribute('href', encodedUri);
            link.setAttribute('download', 'quarters_and_coins.csv'); // Set file name for download
            link.click();
        },

        // Adjust quarters by a specific amount (add or subtract)
        adjustQuarters(amount) {
            const year = this.years[this.selectedRow];
            // Prevent quarters from going below 0
            if (year.quarters + amount >= 0) {
                year.quarters += amount;
            }
        },

        // Move up in the table (select previous row)
        moveUp() {
            if (this.selectedRow > 0) {
                this.selectedRow--;
            }
        },

        // Move down in the table (select next row)
        moveDown() {
            if (this.selectedRow < this.years.length - 1) {
                this.selectedRow++;
            }
        }
    },

    mounted() {
        const keyMap = {
            F15: this.moveUp,      // Move up in the table
            F18: this.moveDown,    // Move down in the table
            F17: () => this.adjustQuarters(-1), // Decrease quarters
            F16: () => this.adjustQuarters(1)  // Increase quarters
        };

        window.addEventListener("keydown", (event) => {
            const action = keyMap[event.code];
            if (action) {
                action(); // Call the appropriate method based on the key pressed
            }
        });
    }
};
</script>

<style scoped lang="css">
.selected {
    /*background-color: #f0f8ff; /* Light blue color */
    font-weight: bold;
}
.totalRow {
    background-color: #f2f2f2; /* Light gray for total rows */
    font-weight: bold;
}
.actions {
    margin-top: 20px;
    text-align: left;
}

.actions button {
    margin: 0 10px;
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    background-color: #387c3b; /* Your preferred green */
    color: white;
    cursor: pointer;
    transition: background-color 0.3s;
}

.actions button:hover {
    background-color: #285c2a; /* Darker green for hover effect */
}

</style>