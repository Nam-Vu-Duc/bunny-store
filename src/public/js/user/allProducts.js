importLinkCss('/css/user/allProducts.css')

// update main-title base on params.slug
var mainTitle           = document.querySelector('div.main-title').querySelector('b')
var getSkincareCategory = document.querySelector('div.all-category-skincare')
var getMakeupCategory   = document.querySelector('div.all-category-makeup')

switch (getSlug) {
  case 'flash-sale': 
    mainTitle.innerText = 'Toàn bộ sản phẩm đang sale'
    break
  case 'hot': 
    mainTitle.innerText = 'Toàn bộ sản phẩm đang hot'
    break
  case 'new-arrival': 
    mainTitle.innerText = 'Toàn bộ sản phẩm mới về'
    break
  case 'xit-khoang': 
    mainTitle.innerText = 'Toàn bộ sản phẩm Xịt khoáng'
    break
  case 'mat-na': 
    mainTitle.innerText = 'Toàn bộ sản phẩm Mặt nạ'
    break
  case 'serum': 
    mainTitle.innerText = 'Toàn bộ sản phẩm Serum'
    break
  case 'bha': 
    mainTitle.innerText = 'Toàn bộ sản phẩm Bha'
    break
  case 'tay-da-chet': 
    mainTitle.innerText = 'Toàn bộ sản phẩm Tẩy da chết'
    break
  case 'duong-da': 
    mainTitle.innerText = 'Toàn bộ sản phẩm Dưỡng da'
    break
  case 'toner': 
    mainTitle.innerText = 'Toàn bộ sản phẩm toner'
    break
  case 'nuoc-tay-trang': 
    mainTitle.innerText = 'Toàn bộ sản phẩm Nước tẩy trang'
    break
  case 'cham-mun': 
    mainTitle.innerText = 'Toàn bộ sản phẩm Chấm mụn'
    break
  case 'kem-duong-am': 
    mainTitle.innerText = 'Toàn bộ sản phẩm Kem dưỡng ẩm'
    break
  case 'sua-rua-mat': 
    mainTitle.innerText = 'Toàn bộ sản phẩm Sữa rửa mặt'
    break
  case 'phan-ma': 
    mainTitle.innerText = 'Toàn bộ sản phẩm Phấn má'
    break
  case 'mascara': 
    mainTitle.innerText = 'Toàn bộ sản phẩm mascara'
    break
  case 'ke-mat': 
    mainTitle.innerText = 'Toàn bộ sản phẩm Kẻ mắt'
    break
  case 'kem-chong-nang': 
    mainTitle.innerText = 'Toàn bộ sản phẩm Kem chống nắng'
    break
  case 'che-khuyet-diem': 
    mainTitle.innerText = 'Toàn bộ sản phẩm Che khuyết điểm'
    break
  case 'son': 
    mainTitle.innerText = 'Toàn bộ sản phẩm son'
    break
  case 'makeup': 
    mainTitle.innerText = 'Toàn bộ sản phẩm makeup'
    getMakeupCategory.innerHTML = `
      <ul>
        <li>
          <a href="/all-products/makeup/phan-ma">
            Phấn má
            <img src="https://res.cloudinary.com/bunny-store/image/upload/v1711080154/web-img/o1th0fymd3gzjzgwbrbz_ghkt70.webp" alt="loading" loading="lazy">
          </a>
        </li>
        <li>
          <a href="/all-products/makeup/mascara">
            Mascara
            <img src="https://res.cloudinary.com/bunny-store/image/upload/v1711080143/web-img/ejschlqugyhr4asayspm_hbrdiy.webp" alt="loading" loading="lazy">
          </a>
        </li>
        <li>
          <a href="/all-products/makeup/ke-mat">
            Kẻ mắt
            <img src="https://res.cloudinary.com/bunny-store/image/upload/v1711080172/web-img/djy7wut0chooynp65hov_xxbwxi.webp" alt="loading" loading="lazy">
          </a>
        </li>
        <li>
          <a href="/all-products/makeup/kem-chong-nang">
            Kem chống nắng
            <img src="https://res.cloudinary.com/bunny-store/image/upload/v1711080150/web-img/hspzixrzay9whcg51meo_h4iotk.webp" alt="loading" loading="lazy">
          </a>
        </li>
        <li>
          <a href="/all-products/makeup/che-khuyet-diem">
            Che khuyết điểm
            <img src="https://res.cloudinary.com/bunny-store/image/upload/v1711080188/web-img/vr3yzblr5g0crzkgj9po_e8mrjp.webp" alt="loading" loading="lazy">
          </a>
        </li>
        <li>
          <a href="/all-products/makeup/son">
            Son
            <img src="https://res.cloudinary.com/bunny-store/image/upload/v1711080146/web-img/jd2llxirfbwpdwekk7lz_cpznu5.webp" alt="loading" loading="lazy">
          </a>
        </li>
      </ul>
    `
    break
  case 'skincare': 
    mainTitle.innerText = 'Toàn bộ sản phẩm skincare'
    getSkincareCategory.innerHTML = `
      <ul>
          <li>
            <a href="/all-products/skincare/xit-khoang">
              Xịt khoáng
              <img src="https://res.cloudinary.com/bunny-store/image/upload/v1711079975/web-img/mhseyytpn8h6zvg4tabd_r57wfv.webp" alt="loading" loading="lazy">
            </a>
          </li>
          <li>
            <a href="/all-products/skincare/mat-na">
              Mặt nạ
              <img src="https://res.cloudinary.com/bunny-store/image/upload/v1711079978/web-img/sfudjh00pykqpvav4sgy_xqbzev.webp" alt="loading" loading="lazy">
            </a>
          </li>
          <li>
            <a href="/all-products/skincare/serum">
              Serum
              <img src="https://res.cloudinary.com/bunny-store/image/upload/v1711079970/web-img/kjz3zdlyxo76h1p3t6lm_uk4agl.webp" alt="loading" loading="lazy">
            </a>
          </li>
          <li>
            <a href="/all-products/skincare/bha">
              BHA
              <img src="https://res.cloudinary.com/bunny-store/image/upload/v1730814300/web-img/dfw5hkqs9gww8tzb6q94_amc5t1.webp" alt="loading" loading="lazy">
            </a>
          </li>
          <li>
            <a href="/all-products/skincare/tay-da-chet">
              Tẩy da chết
              <img src="https://res.cloudinary.com/bunny-store/image/upload/v1711079964/web-img/ettmlmf7s4x0g8d98nvq_vklnps.webp" alt="loading" loading="lazy">
            </a>
          </li>
          <li>
            <a href="/all-products/skincare/duong-da">
              Dưỡng da
              <img src="https://res.cloudinary.com/bunny-store/image/upload/v1711079987/web-img/xkkpidyegeiesbea9rk5_b4tgej.webp" alt="loading" loading="lazy">
            </a>
          </li>
          <li>
            <a href="/all-products/skincare/toner">
              Toner
              <img src="https://res.cloudinary.com/bunny-store/image/upload/v1711079967/web-img/k0easo5upkoydszse1i3_jp7mrg.webp" alt="loading" loading="lazy">
            </a>
          </li>
          <li>
            <a href="/all-products/skincare/nuoc-tay-trang">
              Nước tẩy trang
              <img src="https://res.cloudinary.com/bunny-store/image/upload/v1711079972/web-img/md2husxtaoo5kmyp6qxy_cmvvnp.webp" alt="loading" loading="lazy">
            </a>
          </li>
          <li>
            <a href="/all-products/skincare/cham-mun">
              Chấm mụn
              <img src="https://res.cloudinary.com/bunny-store/image/upload/v1711079961/web-img/almfjrziupsfnxh4ikej_hfcib1.webp" alt="loading" loading="lazy">
            </a>
          </li>
          <li>
            <a href="/all-products/skincare/kem-duong-am">
              Kem dưỡng ẩm
              <img src="https://res.cloudinary.com/bunny-store/image/upload/v1711079981/web-img/sznuvy878jkx6irn87wt_molje8.webp" alt="loading" loading="lazy">
            </a>
          </li>
          <li>
            <a href="/all-products/skincare/sua-rua-mat">
              Sữa rửa mặt
              <img src="https://res.cloudinary.com/bunny-store/image/upload/v1711079959/web-img/zeuznbkrsspuucipy2bh_akixfj.webp" alt="loading" loading="lazy">
            </a>
          </li>
      </ul>
    `
    break
}

// pagination 
var pagination = document.querySelector('span.pagination')
var totalPage = 1

// díplay all pages tag
for (let i = 0; i < productLength; i += 10) {
  var newPage = document.createElement('a')
  newPage.setAttribute('href', `/all-products/${getSlug}?page=${totalPage}&column=${sortedColumn}&sort=${sort}`)
  newPage.innerText = `${totalPage}`
  pagination.appendChild(newPage)
  totalPage++
}

// Style the current selected page
var allPagesTag = pagination.querySelectorAll('a')
for (let i = 0; i < allPagesTag.length; ++i) {
  if (allPagesTag[i].innerText === currentPage) {
    allPagesTag[i].style.borderColor = '#D1A6A6'
    allPagesTag[i].style.backgroundColor = '#D1A6A6'
    allPagesTag[i].style.color = 'white'
    allPagesTag[i].style.width = '25px'
    allPagesTag[i].style.height = '25px'
  }
}

// sort
let selectButton = document.querySelector('select')
selectButton.onchange = function () {
  // if (getSlug === 'skincare') {
  //   location = `/all-products/skincare/${getSlug}?page=1&column=price&sort=${this.value}`
  // } else if (getSlug === 'makeup') {
  //   location = `/all-products/makeup/${getSlug}?page=1&column=price&sort=${this.value}`    
  // } else {
  //   location = `/all-products/${getSlug}?page=1&column=price&sort=${this.value}`
  location = `/all-products/${getSlug}?page=1&column=price&sort=${this.value}`
}

let selectButtonOptions = selectButton.querySelectorAll('option')
selectButtonOptions.forEach(option => {
  if (option.value === sort) {
    option.setAttribute('selected', 'selected')
  }
})