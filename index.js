let selectedProduct = "";

function openOrderForm(product) {
    selectedProduct = product;
    document.getElementById("productInfo").innerText = `Product: ${product}`;
    document.getElementById("overlay").classList.add("active");
    document.getElementById("orderModal").classList.add("active");
}

function closeOrderForm() {
    document.getElementById("overlay").classList.remove("active");
    document.getElementById("orderModal").classList.remove("active");
}

function submitOrder() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;

    if (name && email && address) {
        alert(`Order placed successfully for ${selectedProduct} by ${name}!`);
        closeOrderForm();
    } else {
        alert("Please fill in all fields.");
    }
}
