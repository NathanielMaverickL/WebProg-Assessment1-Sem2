function calculateCost() {
    // Get values from input fields
    let pricePerLiter = parseFloat(document.getElementById("petrolPrice").value);
    let liters = parseFloat(document.getElementById("liters").value);
    let currency = document.getElementById("currency").value; // Get selected currency

    // Calculate total cost
    let total = pricePerLiter * liters;

    // Display result with selected currency
    document.getElementById("totalCost").innerText = `Total Cost: ${currency} ${total.toFixed(2)}`;
}
