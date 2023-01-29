function updateSubtotal(product) {
  const price = Number(product.querySelector(".price span").innerHTML);
  const quantity = Number(product.querySelector(".quantity input").value);
  const subTotal = price * quantity;
  product.querySelector(".subtotal span").textContent = subTotal;
  return subTotal;
}

function calculateAll() {
  const allProducts = document.getElementsByClassName("product");
  let total = 0;
  for (const product of allProducts) {
    total += updateSubtotal(product);
  }
  document.getElementById("total-value").lastChild.textContent = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  target.closest(".product").remove();
  console.log('The target in remove is:', target);
}

// ITERATION 5

function createProduct() {
  const name = document.querySelector('.create-product :nth-child(1) input').innerHTML;
  const price = Number(document.querySelector('.create-product :nth-child(2) input').innerHTML);
  const tr = document.querySelector('.product').cloneNode(true);
  const test = document.createElement("tr");
  tr.querySelector('.name span').textContent = name;
  tr.querySelector('.price span').textContent = price;
  const tbody = document.getElementsByTagName('tbody');
  console.log(tbody);
  tbody.append(test);
  // for (let i = 0; i < 5; i++) {
  //   switch (i) {
  //     case 0:
  //       const td0 = document.createElement('td').classList.add('name');
  //       const span0 = document.createElement('span').textContent = name;
  //       td0.appendChild(span0);
  //       tr.appendChild(td0);
  //       break;
  //     case 1: 
  //       const td1 = document.createElement('td').classList.add('price');
  //       td1.textContent = '$';
  //       const span1 = document.createElement('span').textContent = price;
  //       td1.appendChild(span1);
  //       tr.appendChild(td1);
  //       break;
  //     case 2:
  //       const td2 = document.createElement('td').classList.add('quantity');
  //       const input = document.querySelector('quantity').clodeNode(deep);
  //       td2.appendChild(input);
  //       tr.appendChild(td2);
  //       break;
  //     case 3:
  //       const td3 = document.createElement('td').classList.add('subtotal');
  //       td3.textContent = '$';
  //       const span3 = document.createElement('span');
  //       span3.textContent = '0';
  //       td3.appendChild(span3);
  //       tr.appendChild()
  //       break;
  //     case 4:
  //       const td4 = document.createElement.classList.add('action');
  //       const button = document.createElement.classList.add('btn btn-remove');
  //       button.textContent = 'Remove';
  //       break;
  //     }
  
}
  


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  
  const removeButton = document.querySelectorAll(".btn.btn-remove"); 
  removeButton.forEach((button) => {
    button.addEventListener('click', event => {
      removeProduct(event);
    }
  )});
  
  const createButton = document.getElementById("create");
  createButton.addEventListener('click', createProduct());
  });
