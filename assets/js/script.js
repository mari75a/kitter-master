'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navToggler = document.querySelector("[data-nav-toggler]");
const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
}
document.addEventListener('DOMContentLoaded', () => {
  const cartBtn = document.querySelector('[aria-label="cart"]');
  const cartPanel = document.getElementById('cartPanel');
  const closeBtn = document.getElementById('closeCart');
  const cartItemsContainer = document.getElementById('cartItems');
  const cartTotal = document.getElementById('cartTotal');

  let cart = [
    { name: "Dog Toy", price: 10.99, quantity: 1 },
    { name: "Cat Food", price: 5.49, quantity: 2 }
  ];

  function renderCart() {
    cartItemsContainer.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
      total += item.price * item.quantity;

      const itemDiv = document.createElement('div');
      itemDiv.classList.add('cart-item');
      itemDiv.innerHTML = `
        <span>${item.name} x${item.quantity}</span>
        <span>$${(item.price * item.quantity).toFixed(2)}</span>
      `;
      cartItemsContainer.appendChild(itemDiv);
    });

    cartTotal.textContent = `$${total.toFixed(2)}`;
  }

  cartBtn.addEventListener('click', () => {
    cartPanel.classList.toggle('active');
    renderCart();
  });

  closeBtn.addEventListener('click', () => {
    cartPanel.classList.remove('active');
  });
});

addEventOnElem(navToggler, "click", toggleNavbar);


const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/**
 * active header when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElemOnScroll = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", activeElemOnScroll);