
function decrementQuantity(button) {
    const quantityElement = button.nextElementSibling;
    let quantity = parseInt(quantityElement.textContent);
    if (quantity > 1) {
        quantityElement.textContent = --quantity;
        updateTotal();
    }
}


function incrementQuantity(button) {
    const quantityElement = button.previousElementSibling;
    let quantity = parseInt(quantityElement.textContent);
    quantityElement.textContent = ++quantity;
    updateTotal();
}


function removeItem(button) {
    const item = button.closest('.item');
    item.remove();
    updateTotal();
}


function toggleLike(button) {
    button.classList.toggle('liked');
}


function updateTotal() {
    let total = 0;
    const items = document.querySelectorAll('.item');
    items.forEach(item => {
        const quantity = parseInt(item.querySelector('.quantity span').textContent);
        const price = parseInt(item.querySelector('p').textContent.split('$')[1]);
        total += quantity * price;
    });
    document.getElementById('totalAmount').textContent = total;
}
