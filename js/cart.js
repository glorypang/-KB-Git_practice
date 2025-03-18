function order() {
  alert('주문이 완료되었습니다!');
}
const cartData = [
  {
    id: 1,
    name: '동결건조 다진생강 20g',
    img: 'https://placehold.co/100x100',
    price: 3990,
    quantity: 1,
  },
  {
    id: 2,
    name: '친환경 양배추 1/4통',
    img: 'https://placehold.co/100x100',
    price: 2490,
    quantity: 1,
  },
];

function renderCart() {
  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = '';
  cartData.forEach((item, index) => {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'cart-item';
    itemDiv.innerHTML = `
              <img src="${item.img}" alt="${item.name}">
              <div class="cart-item-info">
                  <p>${item.name}</p>
                  <p>${item.price.toLocaleString()}원</p>
              </div>
              <div class="cart-item-controls">
                  <button onclick="updateQuantity(${index}, -1)">-</button>
                  <span>${item.quantity}</span>
                  <button onclick="updateQuantity(${index}, 1)">+</button>
              </div>
              <button class="remove-btn" onclick="removeItem(${index})">X</button>
          `;
    cartItems.appendChild(itemDiv);
  });
}

function updateQuantity(index, change) {
  if (cartData[index].quantity + change > 0) {
    cartData[index].quantity += change;
  }
  renderCart();
}

function removeItem(index) {
  cartData.splice(index, 1);
  renderCart();
}

renderCart();
