console.log("Frontend script loaded!");

// Function to display a map with given coordinates
function displayMap(latitude, longitude) {
    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: latitude, lng: longitude },
        zoom: 15
    });

    new google.maps.Marker({
        position: { lat: latitude, lng: longitude },
        map: map,
        title: "Device Location"
    });

    console.log(`Map displayed at coordinates: ${latitude}, ${longitude}`);
}

// Default coordinates (e.g., a fallback location)
const defaultLatitude = 37.7749; // Example: San Francisco latitude
const defaultLongitude = -122.4194; // Example: San Francisco longitude

// Add event listener for the "Connect to Device" button
document.getElementById('connect-btn').addEventListener('click', async () => {
    try {
        // Request Bluetooth device
        const device = await navigator.bluetooth.requestDevice({
            acceptAllDevices: true
        });

        // If device is null or no valid information is retrieved
        if (!device) {
            console.warn("No device selected. Using default location.");
            alert("No device selected! Showing default location on the map.");
            displayMap(defaultLatitude, defaultLongitude); // Show default map
        } else {
            console.log('Device selected:', device.name || "Unnamed Device");
            alert(`Device selected: ${device.name || "Unnamed Device"}`);

            // Replace with actual device latitude/longitude if available
            const latitude = 40.7128; // Example: Replace with real latitude
            const longitude = -74.0060; // Example: Replace with real longitude
            displayMap(latitude, longitude);
        }
    } catch (error) {
        console.error('Error connecting to device:', error);
        alert("Connection failed! Showing default location on the map.");
        displayMap(defaultLatitude, defaultLongitude); // Show default map on error
    }
});
window.onload = () => {
    const map = L.map('map').setView([3.8480, 11.5021], 13); // Yaoundé, Cameroon

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    L.marker([3.8480, 11.5021]).addTo(map)
        .bindPopup('Default Location: Yaoundé, Cameroon.')
        .openPopup();

    console.log("Map loaded using Leaflet.js");
};


