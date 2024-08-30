let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}


function search() {
    let filter = document.getElementById('search-box').value.toUpperCase();
    let items = document.querySelectorAll('.box');
    let labels = document.querySelectorAll('.box h3'); // Cambio aquí
    for (var i = 0; i < items.length; i++) {
        let value = labels[i].innerHTML || labels[i].innerText || labels[i].textContent;
        if (value.toUpperCase().indexOf(filter) > -1) {
            items[i].style.display = "";
        } else {
            items[i].style.display = "none";
        }
    }
}

function addToCart(productName, price) {
    let cartItemsContainer = document.getElementById('cart-items');
    let totalElement = document.getElementById('total');

    // Crear el elemento del carrito
    let cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `
        <span class="delete-item" onclick="removeFromCart(this)"><i class="fas fa-times"></i></span>
        <img src="images/${productName.toLowerCase().replace(' ', '-')}.png" alt="${productName}">
        <div class="content">
            <h3>${productName}</h3>
            <div class="price">$${price}</div>
        </div>
    `;

    // Agregar el elemento al carrito
    cartItemsContainer.appendChild(cartItem);

    // Actualizar el total
    let currentTotal = parseFloat(totalElement.innerText.replace('Total: $', ''));
    totalElement.innerText = `Total: $${(currentTotal + price).toFixed(2)}`;
}

function removeFromCart(element) {
    let cartItem = element.parentNode;
    let totalElement = document.getElementById('total');
    let price = parseFloat(cartItem.querySelector('.price').innerText.replace('$', ''));
    let currentTotal = parseFloat(totalElement.innerText.replace('Total: $', ''));
    
    // Eliminar el elemento del carrito
    cartItem.parentNode.removeChild(cartItem);

    // Actualizar el total
    totalElement.innerText = `Total: $${(currentTotal - price).toFixed(2)}`;
}