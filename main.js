document.addEventListener('DOMContentLoaded', function() {
  // Array de objetos que representan los modelos de iPhones
  const products = [
    { name: 'iPhone X', price: 560, image: 'https://www.itzoo.sk/resize/e/440/440/files/produkty---hlavne-foto/iphone-xs-64-biely-itzoo.jpg' },
    { name: 'iPhone XR', price: 600, image: 'https://http2.mlstatic.com/D_NQ_NP_2X_641854-MLA46544656693_062021-F.webp' },
    { name: 'iPhone 11', price: 690, image: 'https://http2.mlstatic.com/D_NQ_NP_2X_876679-MLA46114829792_052021-F.webp' },
    { name: 'iPhone 12', price: 799, image: 'https://m.media-amazon.com/images/I/71hIfcIPyxS._AC_SX522_.jpg' },
    { name: 'iPhone 13', price: 850, image: 'https://http2.mlstatic.com/D_NQ_NP_2X_654080-MLA47781882564_102021-F.webp' },
    { name: 'iPhone 13 PRO', price: 1000, image:'https://http2.mlstatic.com/D_NQ_NP_2X_640945-MLA47778929198_102021-F.webp' },
    { name: 'iPhone 14', price: 900, image: 'https://http2.mlstatic.com/D_NQ_NP_2X_881016-MLM51559383738_092022-F.webp' },
    { name: 'iPhone 14 PRO', price:1150, image: 'https://http2.mlstatic.com/D_NQ_NP_2X_651710-MLM51559386433_092022-F.webp' },
    { name: 'iPhone 14 PRO MAX', price:1350, image: 'https://http2.mlstatic.com/D_NQ_NP_2X_782867-MLA69912981355_062023-F.webp' },
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

  // Función para crear la card de producto
  function createCard(product) {
    const card = document.createElement('div');
    card.classList.add('card', 'col-md-3', 'm-2')

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

    // Render total price
    const totalPrice = document.getElementById('total-price')
    totalPrice.innerHTML = '';
    const total = cart.reduce((sum, product) => sum + product.price, 0);
    if (total != 0) {
      totalPrice.innerHTML = `Total: U$S ${total}`;
    }
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