// //Etapa 1- Entrada de datos
// let monto= parseInt(prompt("Ingrese el monto"));
// let cuotas= parseInt(prompt("Ingrese la cantidad de cuotas: 3/6/12"))
// let montoConIntereses= 0;
// let interes= 0;
// let mensaje="";

// //Función 1
// const calcularInteres = () =>{

//     //Ciclo condicional
//     if (cuotas===3) { 
//         interes=20;
//         mensaje= "Los intereses son del 20%"
//     } else if (cuotas===6) {
//         interes=30;
//         mensaje="Los intereses son del 30%"
//     } else if (cuotas===12) { 
//         interes=40;   
//         mensaje="Los intereses son del 40%"
//     } 

//     //Ciclo repetitivo
//     while (cuotas!=3 && cuotas!=6 && cuotas!=12){
//         interes=0;
//         mensaje="Ingrese un numero de cuotas valido: 3, 6, 12";
//         return
//     }
// }

// //Función 2
// const calcularMontoConInteres =() =>{
//     montoConIntereses=monto+(monto*interes/100)
// }

// calcularInteres();
// calcularMontoConInteres();

// if (interes=== 0) {
//     alert(mensaje)
// } else {
//     alert(mensaje)
//     alert("Monto total con intereses: " + montoConIntereses)
// }

document.addEventListener('DOMContentLoaded', function() {
  // Array de objetos que representan los modelos de iPhones
  const products = [
    { name: 'iPhone X', price: 999, image: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F61QwvBsoxfL._AC_UF350%2C350_QL80_.jpg&tbnid=vloa89k5DoNyEM&vet=12ahUKEwj015T5isn_AhVKppUCHVwcDwUQMygLegUIARD5AQ..i&imgrefurl=https%3A%2F%2Fwww.amazon.com.mx%2FApple-iPhone-desbloqueado-Refurbished-espacial%2Fdp%2FB07757R58W&docid=NZQBl28OAN9a0M&w=350&h=282&q=iphone%20x&ved=2ahUKEwj015T5isn_AhVKppUCHVwcDwUQMygLegUIARD5AQ' },
    { name: 'iPhone XR', price: 799, image: 'iphone-xr.jpg' },
    { name: 'iPhone 11', price: 699, image: 'iphone-11.jpg' },
    { name: 'iPhone 12', price: 799, image: 'iphone-12.jpg' }
  ];

  const cart = []; // Array para almacenar los productos del carrito

  // Función para generar las cards de los productos en el DOM
  function renderProducts() {
    const productList = document.getElementById('product-list');

    products.forEach(function(product) {
      const card = createCard(product);
      productList.appendChild(card);
    });
  }

  // Función para crear una card de producto
  function createCard(product) {
    const card = document.createElement('div');
    card.classList.add('card', 'col-md-3', 'm-2');

    const image = document.createElement('img');
    image.src = product.image;
    image.classList.add('card-img-top');
    card.appendChild(image);

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    card.appendChild(cardBody);

    const title = document.createElement('h5');
    title.textContent = product.name;
    title.classList.add('card-title');
    cardBody.appendChild(title);

    const price = document.createElement('p');
    price.textContent = `$${product.price}`;
    price.classList.add('card-text');
    cardBody.appendChild(price);

    const addToCartBtn = document.createElement('button');
    addToCartBtn.textContent = 'Agregar al carrito';
    addToCartBtn.classList.add('btn', 'btn-primary');
    addToCartBtn.addEventListener('click', function() {
      addToCart(product);
    });
    cardBody.appendChild(addToCartBtn);

    return card;
  }

  // Función para agregar un producto al carrito
  function addToCart(product) {
    cart.push(product);
    saveCart();
    displayCart();
  }

  // Función para guardar el carrito en localStorage
  function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  // Función para cargar el carrito desde localStorage
  function loadCart() {
    const cartData = localStorage.getItem('cart');
    if (cartData) {
      cart.push(...JSON.parse(cartData));
      displayCart();
    }
  }

  // Función para mostrar los productos del carrito en el DOM
  function displayCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';

    cart.forEach(function(product) {
      const li = document.createElement('li');
      li.textContent = product.name;
      cartItems.appendChild(li);
    });
  }

  // Función para calcular el precio total del carrito
  function calculateTotal() {
    const total = cart.reduce((sum, product) => sum + product.price, 0);
    document.getElementById('total-price').textContent = `$${total}`;
  }

  // Función para finalizar la compra
  function checkout() {
    cart.length = 0; // Vaciar el carrito
    saveCart();
    displayCart();
    calculateTotal();
    alert('¡Gracias por tu compra!');
  }

  // Generar los productos en el DOM
  renderProducts();

  // Asociar evento al botón de finalizar compra
  const checkoutBtn = document.getElementById('checkout-btn');
  checkoutBtn.addEventListener('click', checkout);

  // Cargar el carrito al cargar la página
  loadCart();
});
