importLinkCss('/css/admin/attribute.css')

async function createAttribute(id, rowIndex) {
  const row = document.querySelector(`div.${id}`).querySelector('table').rows[rowIndex]
  const code = row.querySelector('input#code').value
  const name = row.querySelector('input#name').value
  
  const response = await fetch(`/admin/all-attributes/create/${id}`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({code: code, name: name})
  })
  if (!response.ok) throw new Error(`Response status: ${response.status}`)
  const {isValid, message} = await response.json()
  
  pushNotification(message)
  if (!isValid) return

  row.querySelector('input#code').disabled = true
  row.querySelector('input#name').disabled = true
  row.querySelector('td:last-child').innerHTML = `
    <button id="membership" onclick="updateAttribute(this.id, this.parentElement.parentElement.rowIndex)"><i class="fi fi-rr-refresh"></i></button>
    <button id="membership" onclick="deleteAttribute(this.id, this.parentElement.parentElement.rowIndex)"><i class="fi fi-tr-trash-slash"></i></button>
  `
  return
}

async function deleteAttribute(id, rowIndex) {
  const row = document.querySelector(`div.${id}`).querySelector('table').rows[rowIndex]
  if (confirm('Bạn có chắc chắn muốn xóa?')) {
    const code = row.querySelector('input#code').value
    const name = row.querySelector('input#name').value
    const response = await fetch(`/admin/all-attributes/delete/${id}`, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({code: code, name: name})
    })
    if (!response.ok) throw new Error(`Response status: ${response.status}`)
    const {isValid, message} = await response.json()

    pushNotification(message)
    if (!isValid) return

    deleteRow(id, rowIndex)
  } 

  return
}

async function updateAttribute(id, rowIndex) {
  console.log('update:', id, rowIndex)
  const row = document.querySelector(`div.${id}`).querySelector('table').rows[rowIndex]
  if (row.querySelector('input#name').disabled === true) {
    const button = document.createElement('button')
    button.innerHTML = `<i class="fi fi-rr-check"></i>`
    
    row.querySelector('input#name').disabled = false
    row.querySelector('input#name').parentElement.appendChild(button)

  } else {
    row.querySelector('input#name').disabled = true
    row.querySelector('input#name').parentElement.querySelector('button').remove()
  }
}

function deleteRow(id, rowIndex) {
  document.querySelector(`div.${id}`).querySelector('table').deleteRow(rowIndex)
}

function addRow(id) {
  const tbody = document.querySelector(`div.${id}`).querySelector('tbody')
  const tr = document.createElement('tr')
  tbody.appendChild(tr)
  tr.innerHTML = `
    <td><input type="text" id="code" placeholder="Nhập mã"></td>
    <td><input type="text" id="name" placeholder="Nhập tên"></td>
    <td data-id="${id}">
      <button id="create">
        <i class="fi fi-rr-check"></i>
      </button>
      <button id="delete" onclick="deleteRow(this.parentElement.dataset.id, this.parentElement.parentElement.rowIndex)"><i class="fi fi-rr-cross-small"></i></button>
    </td>
  `
  
  tr.querySelector("td[data-id]").querySelector('button#create').addEventListener("click", function () {
    createAttribute(this.parentElement.dataset.id, this.parentElement.parentElement.rowIndex);
  })
}

async function getMembership() {
  const response = await fetch('/admin/all-attributes/data/membership')
  if (!response.ok) throw new Error(`Response status: ${response.status}`)
  const {data} = await response.json()

  const table = document.createElement('div')
  table.innerHTML = `
    <table>
      <thead>
        <tr><td colspan="3">HẠNG THÀNH VIÊN</td></tr>
      </thead>
      <thead>
        <tr>
          <td>Mã</td>
          <td>Tên</td>
          <td>Thao tác</td>
        </tr>
      <tbody>
        ${data.map(item => 
          `
            <tr>
              <td><input type="text" id="code" value="${item.code}" disabled></td>
              <td><input type="text" id="name" value="${item.name}" disabled></td>
              <td>
                <button id="membership" onclick="updateAttribute(this.id, this.parentElement.parentElement.rowIndex)"><i class="fi fi-rr-refresh"></i></button>
                <button id="membership" onclick="deleteAttribute(this.id, this.parentElement.parentElement.rowIndex)"><i class="fi fi-tr-trash-slash"></i></button>
              </td>
            </tr>
          `
        ).join("")}
      </tbody>
    </table>
    <div class="submit-button"><button id="membership" onclick="addRow(this.id)">Thêm</button></div>
  `

  document.querySelector('div.membership').appendChild(table)
}

async function getOrderStatus() {
  const response = await fetch('/admin/all-attributes/data/order-status')
  if (!response.ok) throw new Error(`Response status: ${response.status}`)
  const {data} = await response.json()

  const table = document.createElement('div')
  table.innerHTML = `
    <table>
      <thead>
        <tr><td colspan="3">TRẠNG THÁI ĐƠN HÀNG</td></tr>
      </thead>
      <thead>
        <tr>
          <td style="width:40%">Mã</td>
          <td style="width:40%">Tên</td>
          <td style="width:20%">Thao tác</td>
        </tr>
      <tbody>
        ${data.map(item => 
          `
            <tr>
              <td><input type="text" value="${item.code}" disabled></td>
              <td><input type="text" value="${item.name}" disabled></td>
              <td>
                <i class="fi fi-rr-refresh"></i>
                <i class="fi fi-tr-trash-slash"></i>
              </td>
            </tr>
          `
        ).join("")}
      </tbody>
    </table>
    <div class="submit-button"><button id="order-status" onclick="addRow(this.id)">Thêm</button></div>
  `

  document.querySelector('div.order-status').appendChild(table)
}

async function getPaymentMethod() {
  const response = await fetch('/admin/all-attributes/data/payment-method')
  if (!response.ok) throw new Error(`Response status: ${response.status}`)
  const {data} = await response.json()

  const table = document.createElement('div')
  table.innerHTML = `
    <table>
      <thead>
        <tr><td colspan="3">PHƯƠNG THƯC THANH TOÁN</td></tr>
      </thead>
      <thead>
        <tr>
          <td style="width:40%">Mã</td>
          <td style="width:40%">Tên</td>
          <td style="width:20%">Thao tác</td>
        </tr>
      <tbody>
        ${data.map(item => 
          `
            <tr>
              <td><input type="text" value="${item.code}" disabled></td>
              <td><input type="text" value="${item.name}" disabled></td>
              <td>
                <i class="fi fi-rr-refresh"></i>
                <i class="fi fi-tr-trash-slash"></i>
              </td>
            </tr>
          `
        ).join("")}
      </tbody>
    </table>
    <div class="submit-button"><button id="payment-method" onclick="addRow(this.id)">Thêm</button></div>
  `

  document.querySelector('div.payment-method').appendChild(table)
}

async function getPosition() {
  const response = await fetch('/admin/all-attributes/data/position')
  if (!response.ok) throw new Error(`Response status: ${response.status}`)
  const {data} = await response.json()

  const table = document.createElement('div')
  table.innerHTML = `
    <table>
      <thead>
        <tr><td colspan="3">VỊ TRÍ CÔNG VIỆC</td></tr>
      </thead>
      <thead>
        <tr>
          <td style="width:40%">Mã</td>
          <td style="width:40%">Tên</td>
          <td style="width:20%">Thao tác</td>
        </tr>
      <tbody>
        ${data.map(item => 
          `
            <tr>
              <td><input type="text" value="${item.code}" disabled></td>
              <td><input type="text" value="${item.name}" disabled></td>
              <td>
                <i class="fi fi-rr-refresh"></i>
                <i class="fi fi-tr-trash-slash"></i>
              </td>
            </tr>
          `
        ).join("")}
      </tbody>
    </table>
    <div class="submit-button"><button id="position" onclick="addRow(this.id)">Thêm</button></div>
  `

  document.querySelector('div.position').appendChild(table)
}

async function getProductStatus() {
  const response = await fetch('/admin/all-attributes/data/product-status')
  if (!response.ok) throw new Error(`Response status: ${response.status}`)
  const {data} = await response.json()

  const table = document.createElement('div')
  table.innerHTML = `
    <table>
      <thead>
        <tr><td colspan="3">TRẠNG THÁI SẢN PHẨM</td></tr>
      </thead>
      <thead>
        <tr>
          <td style="width:40%">Mã</td>
          <td style="width:40%">Tên</td>
          <td style="width:20%">Thao tác</td>
        </tr>
      <tbody>
        ${data.map(item => 
          `
            <tr>
              <td><input type="text" value="${item.code}" disabled></td>
              <td><input type="text" value="${item.name}" disabled></td>
              <td>
                <i class="fi fi-rr-refresh"></i>
                <i class="fi fi-tr-trash-slash"></i>
              </td>
            </tr>
          `
        ).join("")}
      </tbody>
    </table>
    <div class="submit-button"><button id="product-status" onclick="addRow(this.id)">Thêm</button></div>
  `

  document.querySelector('div.product-status').appendChild(table)
}

window.addEventListener('DOMContentLoaded', async function loadData() {
  await getMembership()
  await getOrderStatus()
  await getPaymentMethod()
  await getPosition()
  await getProductStatus()
})