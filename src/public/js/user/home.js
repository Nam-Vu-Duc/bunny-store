const flashSaleProductsDiv  = document.querySelector('div[class="flash-deal-board"][id="flash-deal"]').querySelectorAll('div.product')
const topSaleProductsDiv    = document.querySelector('div[class="products-board"][id="top-sale"]').querySelectorAll('div.product')
const hotSaleProductsDiv    = document.querySelector('div[class="products-board"][id="hot-sale"]').querySelectorAll('div.product')
const skincareProductsDiv   = document.querySelector('div[class="products-board"][id="skincare"]').querySelectorAll('div.product')
const makeupProductsDiv     = document.querySelector('div[class="products-board"][id="makeup"]').querySelectorAll('div.product')
const allProductsDiv        = document.querySelector('div[class="products-board"][id="all"]').querySelectorAll('div.product')
const allBrandsDiv          = document.querySelector('div[class="famous-brand-board"][id="brand"]').querySelectorAll('img')


function formatNumber(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ' VND'
}

async function getProducts(products, status) {
  const response = await fetch('/data/products', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({status: status})
  })
  if (!response.ok) throw new Error(`Response status: ${response.status}`)
  const json = await response.json()

  const data = json.data

  products.forEach((product, index) => {
    product.querySelector('img').setAttribute('src', data[index].img.path)
    product.querySelector('img').setAttribute('alt', data[index].img.name)
    product.querySelector('p#old-price').textContent = formatNumber(data[index].oldPrice) 
    product.querySelector('p#price').textContent = formatNumber(data[index].price) 
    product.querySelector('p#name').textContent = data[index].name
    product.querySelector('span#rate-score').textContent = data[index].rateNumber
    product.querySelector('p#sale-number').textContent =  'Đã bán: ' + data[index].saleNumber
    product.classList.remove('loading')
    product.parentElement.setAttribute('href', '/all-products/product/' + data[index]._id)
  })
}

async function getBrands(imgs) {
  const response = await fetch('/data/brands', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
  })
  if (!response.ok) throw new Error(`Response status: ${response.status}`)
  const json = await response.json()

  const data = json.data
  console.log(data)

  imgs.forEach((img, index) => {
    img.setAttribute('src', data[index].img.path)
    img.setAttribute('alt', data[index].name)
  })
}

window.addEventListener('DOMContentLoaded', () => {
  getProducts(flashSaleProductsDiv, 'flash-sale')
  getProducts(topSaleProductsDiv, 'flash-sale')
  getProducts(hotSaleProductsDiv, 'hot')
  getProducts(skincareProductsDiv, 'flash-sale')
  getProducts(makeupProductsDiv, 'flash-sale')
  getProducts(allProductsDiv, 'flash-sale')

  getBrands(allBrandsDiv)
})
