function submitOrder(event) {
    event.preventDefault();
    alert("Your order is confirmed! Thank you for shopping with us.");
}

function trackOrder() {
    const trackingInput = document.getElementById('tracking-input').value;
    const trackingResult = document.getElementById('tracking-result');

    if (trackingInput.trim() === "") {
        trackingResult.textContent = "Please enter a valid tracking ID.";
        return;
    }

    // Simulate tracking functionality (this can be extended with real API integration)
    trackingResult.textContent = `The product with Tracking ID '${trackingInput}' is currently in transit.`;
}
