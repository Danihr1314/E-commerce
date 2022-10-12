const shopArea = document.querySelector('#shopping-cart')
const card = document.querySelector('.card');
let mountCojin = 0;
let mountJuguete = 0;
let mountRascador = 0;

let productsArray = [];

function createProduct(mount){
  if (mount < 2){
    const elements = productsArray.map((products) => {
        return`<div class='card'>
        <h3>${products.product}</h3>
        <a class='minus'>-</a>
        <p class="mount">${mount}</p>
        <a class='plus'>+</a>
        <p class="price-cart">${products.price}</p>
      </div>`})
      shopArea.innerHTML = elements.join("");
    }
  // }else{
  //   let mounty = document.querySelector('.mount')
  //   mounty.innerHTML = mounty.textContent = mount;
  // }
}
  


// Cojin----------------------------------------------------

const firstButton = document.querySelector('.button1');
const cojin = document.querySelector('.product1');
const cojinPrice = document.querySelector('.price')


firstButton.addEventListener('click', (e) =>{
  const product = cojin.textContent;
  const price = cojinPrice.textContent;
  mountCojin +=1;
  productsArray.push({ product,price});
  if (mountCojin === 1){
    createProduct(mountCojin);
  }
})

// Juguete---------------------------------------------------

const secondButton = document.querySelector('.button2');
const toy = document.querySelector('.product2');
const toyPrice = document.querySelector('.price1')

secondButton.addEventListener('click', (e) =>{
  const product = toy.textContent;
  const price = toyPrice.textContent;
  mountJuguete += 1;
  productsArray.push({ product, price });
  createProduct(mountJuguete);
})

// Rascador-----------------------------------------------

const thirdButton = document.querySelector('.button3');
const scraper = document.querySelector('.product3');
const scraperPrice = document.querySelector('.price2')

thirdButton.addEventListener('click', (e) =>{
  const product = scraper.textContent;
  const price = scraperPrice.textContent;
  mountRascador += 1;
  productsArray.push({ product,price});
  createProduct(mountRascador);
})

