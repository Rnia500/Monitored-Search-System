// errorHandling.js
function handleError(error) {
    console.error("An error occurred:", error.message);
}

function handleDisconnection() {
    console.log("Device disconnected. Attempting to reconnect...");
}

module.exports = { handleError, handleDisconnection };
