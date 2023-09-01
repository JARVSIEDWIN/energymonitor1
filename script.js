// Replace this with actual data retrieval and update logic
const sampleData = [
    { timestamp: "2023-09-01 08:00:00", voltage: 230, current: 5, power: 1150 },
    { timestamp: "2023-09-01 08:15:00", voltage: 231, current: 5.2, power: 1192 },
    { timestamp: "2023-09-01 08:00:00", voltage: 230, current: 5, power: 1150 },
    { timestamp: "2023-09-01 08:15:00", voltage: 231, current: 5.2, power: 1192 }
    
    // Add more data as needed
];

function updateTable(data) {
    const table = document.getElementById("data-table");
    table.innerHTML = `
        <tr>
        <th>Timestamp</th>
        <th>Voltage (V)</th>
        <th>Current (A)</th>
        <th>Power (W)</th>
        <th>PowerFactor</th>
        <th>kWh</th>
        <th>Temperature (°C)</th>
        <th>Frequency (Hz)</th>
        </tr>
    `;
    
    data.forEach(entry => {
        table.innerHTML += `
            <tr>
                <td>${entry.timestamp}</td>
                <td>${entry.voltage}</td>
                <td>${entry.current}</td>
                <td>${entry.power}</td>
                <td>${entry.PowerFactor}</td>
                <td>${entry.temperature}</td>
                <td>${entry.frequency}</td>
            </tr>
        `;
    });
}

// Call updateTable with your actual data
updateTable(sampleData);
