importLinkCss('/css/user/allProducts.css')

// update main-title base on params.slug
var mainTitle           = document.querySelector('div.main-title').querySelector('b')
var getSkincareCategory = document.querySelector('div.all-category-skincare')
var getMakeupCategory   = document.querySelector('div.all-category-makeup')
var titles = {
  'flash-sale': 'Toàn bộ sản phẩm đang sale',
  'hot': 'Toàn bộ sản phẩm đang hot',
  'new-arrival': 'Toàn bộ sản phẩm mới về',
  'xit-khoang': 'Toàn bộ sản phẩm Xịt khoáng',
  'mat-na': 'Toàn bộ sản phẩm Mặt nạ',
  'serum': 'Toàn bộ sản phẩm Serum',
  'bha': 'Toàn bộ sản phẩm Bha',
  'tay-da-chet': 'Toàn bộ sản phẩm Tẩy da chết',
  'duong-da': 'Toàn bộ sản phẩm Dưỡng da',
  'toner': 'Toàn bộ sản phẩm toner',
  'nuoc-tay-trang': 'Toàn bộ sản phẩm Nước tẩy trang',
  'cham-mun': 'Toàn bộ sản phẩm Chấm mụn',
  'kem-duong-am': 'Toàn bộ sản phẩm Kem dưỡng ẩm',
  'sua-rua-mat': 'Toàn bộ sản phẩm Sữa rửa mặt',
  'phan-ma': 'Toàn bộ sản phẩm Phấn má',
  'mascara': 'Toàn bộ sản phẩm mascara',
  'ke-mat': 'Toàn bộ sản phẩm Kẻ mắt',
  'kem-chong-nang': 'Toàn bộ sản phẩm Kem chống nắng',
  'che-khuyet-diem': 'Toàn bộ sản phẩm Che khuyết điểm',
  'son': 'Toàn bộ sản phẩm son',
  'makeup': 'Toàn bộ sản phẩm makeup',
  'skincare': 'Toàn bộ sản phẩm skincare'
};

if (titles[getSlug]) mainTitle.innerText = titles[getSlug]

if (getSlug === 'skincare') {
  getSkincareCategory.innerHTML = `
    <ul>
      <li><a href="/all-products/skincare/xit-khoang">Xịt khoáng<img src="https://res.cloudinary.com/bunny-store/image/upload/v1711079975/web-img/mhseyytpn8h6zvg4tabd_r57wfv.webp" alt="loading" loading="lazy"></a></li>
      <li><a href="/all-products/skincare/mat-na">Mặt nạ<img src="https://res.cloudinary.com/bunny-store/image/upload/v1711079978/web-img/sfudjh00pykqpvav4sgy_xqbzev.webp" alt="loading" loading="lazy"></a></li>
      <li><a href="/all-products/skincare/serum">Serum<img src="https://res.cloudinary.com/bunny-store/image/upload/v1711079970/web-img/kjz3zdlyxo76h1p3t6lm_uk4agl.webp" alt="loading" loading="lazy"></a></li>
      <li><a href="/all-products/skincare/bha">BHA<img src="https://res.cloudinary.com/bunny-store/image/upload/v1730814300/web-img/dfw5hkqs9gww8tzb6q94_amc5t1.webp" alt="loading" loading="lazy"></a></li>
      <li><a href="/all-products/skincare/tay-da-chet">Tẩy da chết<img src="https://res.cloudinary.com/bunny-store/image/upload/v1711079964/web-img/ettmlmf7s4x0g8d98nvq_vklnps.webp" alt="loading" loading="lazy"></a></li>
      <li><a href="/all-products/skincare/duong-da">Dưỡng da<img src="https://res.cloudinary.com/bunny-store/image/upload/v1711079987/web-img/xkkpidyegeiesbea9rk5_b4tgej.webp" alt="loading" loading="lazy"></a></li>
      <li><a href="/all-products/skincare/toner">Toner<img src="https://res.cloudinary.com/bunny-store/image/upload/v1711079967/web-img/k0easo5upkoydszse1i3_jp7mrg.webp" alt="loading" loading="lazy"></a></li>
      <li><a href="/all-products/skincare/nuoc-tay-trang">Nước tẩy trang<img src="https://res.cloudinary.com/bunny-store/image/upload/v1711079972/web-img/md2husxtaoo5kmyp6qxy_cmvvnp.webp" alt="loading" loading="lazy"></a></li>
      <li><a href="/all-products/skincare/cham-mun">Chấm mụn<img src="https://res.cloudinary.com/bunny-store/image/upload/v1711079961/web-img/almfjrziupsfnxh4ikej_hfcib1.webp" alt="loading" loading="lazy"></a></li>
      <li><a href="/all-products/skincare/kem-duong-am">Kem dưỡng ẩm<img src="https://res.cloudinary.com/bunny-store/image/upload/v1711079981/web-img/sznuvy878jkx6irn87wt_molje8.webp" alt="loading" loading="lazy"></a></li>
      <li><a href="/all-products/skincare/sua-rua-mat">Sữa rửa mặt<img src="https://res.cloudinary.com/bunny-store/image/upload/v1711079959/web-img/zeuznbkrsspuucipy2bh_akixfj.webp" alt="loading" loading="lazy"></a></li>
    </ul>    
  `
}
if (getSlug === 'makeup') {
  getMakeupCategory.innerHTML = `
    <ul>
      <li><a href="/all-products/makeup/phan-ma">Phấn má<img src="https://res.cloudinary.com/bunny-store/image/upload/v1711080154/web-img/o1th0fymd3gzjzgwbrbz_ghkt70.webp" alt="loading" loading="lazy"></a></li>
      <li><a href="/all-products/makeup/mascara">Mascara<img src="https://res.cloudinary.com/bunny-store/image/upload/v1711080143/web-img/ejschlqugyhr4asayspm_hbrdiy.webp" alt="loading" loading="lazy"></a></li>
      <li><a href="/all-products/makeup/ke-mat">Kẻ mắt<img src="https://res.cloudinary.com/bunny-store/image/upload/v1711080172/web-img/djy7wut0chooynp65hov_xxbwxi.webp" alt="loading" loading="lazy"></a></li>
      <li><a href="/all-products/makeup/kem-chong-nang">Kem chống nắng<img src="https://res.cloudinary.com/bunny-store/image/upload/v1711080150/web-img/hspzixrzay9whcg51meo_h4iotk.webp" alt="loading" loading="lazy"></a></li>
      <li><a href="/all-products/makeup/che-khuyet-diem" loading="lazy">Che khuyết điểm<img src="https://res.cloudinary.com/bunny-store/image/upload/v1711080188/web-img/vr3yzblr5g0crzkgj9po_e8mrjp.webp" alt="loading" loading="lazy"></a></li>
      <li><a href="/all-products/makeup/son">Son<img src="https://res.cloudinary.com/bunny-store/image/upload/v1711080146/web-img/jd2llxirfbwpdwekk7lz_cpznu5.webp" alt="loading" loading="lazy"></a></li>
    </ul>
  `
}

var urlParams = new URLSearchParams(window.location.search)
// pagination 
var pagination = document.querySelector('span.pagination')
var totalPage = 1
for (var i = 0; i < productLength; i += 10) {
  var newPage = document.createElement('p')
  newPage.innerText = `${totalPage}`
  pagination.appendChild(newPage)
  totalPage++
}

// Style the current selected page
var allPagesTag = pagination.querySelectorAll('p')
allPagesTag.forEach((tag, index) => {
  if (tag.innerText === currentPage) {
    tag.style.borderColor = '#D1A6A6'
    tag.style.backgroundColor = '#D1A6A6'
    tag.style.color = 'white'
    tag.style.width = '25px'
    tag.style.height = '25px'
  }
  tag.onclick = function() {
    urlParams.set('page', index+1)
    window.location.search = urlParams
  }
})

// sort
var sortElement = document.querySelector('div.sort')
var selectButton = sortElement.querySelectorAll('select')
selectButton.forEach((button) => {
  button.onchange = function () {
    const sortType = button.id
    const sortValue = button.value
    urlParams.set(`sort_${sortType}`, sortValue)
    window.location.search = urlParams
  }
  
  const options = button.querySelectorAll('option')
  options.forEach((option) => {
    const sortType = button.id
    if (urlParams.get(`sort_${sortType}`) === `${option.value}`) {
      option.setAttribute('selected', 'selected')
    } 
  })
}) 

var clearSortBtn = sortElement.querySelector('button#clear-sort')
clearSortBtn.onclick = function() {
  for (const key of urlParams.keys()) {
    if (key.startsWith("sort_")) {
      urlParams.delete(key)
      window.location.search = urlParams
    }
  }
}

// filter
var filterElement = document.querySelector('div.filter')
var min = parseInt(minPrice) 
var max = parseInt(maxPrice) 
function calcLeftPosition(value) {
  return (value - min)/(max - min) * 100
}
function formatNumber(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ' VND'
}
filterElement.querySelector('input#rangeMin').addEventListener('input', function (e) {
  const newValue = parseInt(e.target.value)
  if (newValue > max) return

  filterElement.querySelector('span#thumbMin').style.left = calcLeftPosition(newValue) + '%'
  filterElement.querySelector('span#min').innerHTML = formatNumber(newValue)
  filterElement.querySelector('input#rangeMin').value = newValue

  const line = filterElement.querySelector('div#line')
  line.style.left = calcLeftPosition(newValue) + '%'
  line.style.right = (100 - calcLeftPosition(max)) + '%'
})
filterElement.querySelector('input#rangeMax').addEventListener('input', function (e) {
  const newValue = parseInt(e.target.value)
  if (newValue > max) return

  filterElement.querySelector('span#thumbMax').style.left = calcLeftPosition(newValue) + '%'
  filterElement.querySelector('span#max').innerHTML = formatNumber(newValue)
  filterElement.querySelector('input#rangeMax').value = newValue

  const line = filterElement.querySelector('div#line')
  line.style.left = calcLeftPosition(min) + '%'
  line.style.right = (100 - calcLeftPosition(newValue)) + '%'
})
filterElement.querySelector('button#submit-filter').addEventListener('click', function() {
  const min = filterElement.querySelector('input#rangeMin').value
  const max = filterElement.querySelector('input#rangeMax').value
  if (min === minPrice && max === maxPrice) return

  urlParams.set('filter_price', `${min}-${max}`)
  window.location.search = urlParams
})

var clearFilterBtn = filterElement.querySelector('button#clear-filter')
clearFilterBtn.onclick = function() {
  for (const key of urlParams.keys()) {
    if (key.startsWith("filter_")) {
      urlParams.delete(key)
      window.location.search = urlParams
    }
  }
}

for (const key of urlParams.keys()) {
  if (key.startsWith("sort_")) {
    clearSortBtn.style.display = ''
  }
  if (key.startsWith("filter_")) {
    clearFilterBtn.style.display = ''
    const [min, max] = urlParams.get(key).split('-')
    filterElement.querySelector('span#thumbMin').style.left = calcLeftPosition(min) + '%'
    filterElement.querySelector('span#min').innerHTML = formatNumber(min)
    filterElement.querySelector('input#rangeMin').value = min

    filterElement.querySelector('span#thumbMax').style.left = calcLeftPosition(max) + '%'
    filterElement.querySelector('span#max').innerHTML = formatNumber(max)
    filterElement.querySelector('input#rangeMax').value = max
  }
}