let MyWeatherContainer = document.querySelector(".weather-container");

async function getData(city) {
    // Use backticks for the API URL
    let response = await fetch(`https://api.weatherapi.com/v1/current.json?key=332929f2eff8459b92e151549241010&q=${city}&aqi=yes`);
    let data = await response.json();

    // Check if data is valid (i.e., city found)
    if (data.error) {
        console.log("City not found");
        return; // Exit the function if there's an error
    }

    // Create a new row for the table
    let newRow = `
        <tr>
            <td class="counrty">${data.location.country}</td>
            <td class="city">${data.location.name}</td>
            <td class="reigion">${data.location.region}</td>
            <td class="time">${data.location.localtime}</td>
            <td class="text">${data.current.condition.text}</td>
            <td class="wind">${data.current.wind_kph}</td>
            <td class="pressure">${data.current.pressure_in}</td>
            <td class="humidity">${data.current.humidity}</td>
        </tr>
    `;

    // Append the new row to the existing table body
    let tableBody = document.querySelector("tbody");
    tableBody.insertAdjacentHTML('beforeend', newRow);

    // Optionally clear the input field
    document.querySelector("#search").value = ''; 
}

// Initialize the table with a default city (e.g., 'mumbai')
getData("Lahore");

// Set up the event listener for the search button
document.querySelector(".btn").addEventListener("click", () => {
    let city = document.querySelector("#search").value; // Get the value from the input field
    if (city) {
        getData(city); // Call the function with the new city
    }
});
