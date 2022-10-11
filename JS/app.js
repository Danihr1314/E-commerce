const shopArea = document.querySelector('#shopping-cart')

let productsArray = [];

// Cojin----------------------------------------------------

const firstButton = document.querySelector('.button1');
const cojin = document.querySelector('.product1');
const cojinPrice = document.querySelector('.price')

firstButton.addEventListener('click', (e) =>{
  const product = cojin.textContent;
  const price = cojinPrice.textContent;
  productsArray.push({ product, price });
  const elements = productsArray.map((products) => {
    return `
    <div>
        <h3>${products.product}</h3>
        <h3>Cantidad</h3>
        <p class="price-cart">${products.price}</p>
      </div>`
  })
  shopArea.innerHTML = elements.join("");
})

// Juguete---------------------------------------------------

const secondButton = document.querySelector('.button2');
const toy = document.querySelector('.product2');
const toyPrice = document.querySelector('.price')

secondButton.addEventListener('click', (e) =>{
  const product = toy.textContent;
  const price = toyPrice.textContent;
  productsArray.push({ product, price });
  const elements = productsArray.map((products) => {
    return `
    <div>
        <h3>${products.product}</h3>
        <h3>Cantidad</h3>
        <p class="price-cart">${products.price}</p>
      </div>`
  })
  shopArea.innerHTML = elements.join("");
})

// Rascador-----------------------------------------------

const thirdButton = document.querySelector('.button3');
const scraper = document.querySelector('.product3');
const scraperPrice = document.querySelector('.price')

thirdButton.addEventListener('click', (e) =>{
  const product = scraper.textContent;
  const price = scraperPrice.textContent;
  productsArray.push({ product, price });
  const elements = productsArray.map((products) => {
    return `
    <div>
        <h3>${products.product}</h3>
        <h3>Cantidad</h3>
        <p class="price-cart">${products.price}</p>
      </div>`
  })
  shopArea.innerHTML = elements.join("");
})