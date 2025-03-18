const PRODUCTS = [
  {
    name: '[조선호텔] 떡갈비 345g',
    productImg: '../img/갈비.jpg',
    detail: '특제 소스를 곁들여 남녀노소 모두가 좋아하는 떡갈비',
    price: 9900,
  },
  {
    name: '[비비고 순살 생선구이 4종 (택1)] 순살 생선구이 4종 (택1)',
    productImg: '../img/고등어구이.jpg',
    detail: '간편하게 먹고 정리하는 생선간편구이',
    price: 4980,
  },
  {
    name: '[이연복의 목란] 짬뽕 2인분 (맵기 선택)',
    productImg: '../img/짬뽕.jpg',
    detail: '마늘의 감칠맛이 듬뿍',
    price: 8900,
  },
  {
    name: '[마더푸드] 오리지널 쪽갈비',
    productImg: '../img/쪽갈비.jpeg',
    detail: '한 손으로 들고 뜯어 즐기는 쪽갈비',
    price: 15600,
  },
  {
    name: '[신의주 찹쌀 순대] 얼큰 순대국',
    productImg: '../img/순대국.jpg',
    detail: '입에 착 감기는 칼칼함',
    price: 7200,
  },
  {
    name: '[KF365] 훈제오리 2종 (2입)',
    productImg: '../img/훈제오리.jpg',
    detail: '두 팩으로 나눠 담아 간편한 훈제오리',
    price: 10500,
  },
];

const renderProducts = () => {
  const productsContainer = document.getElementById('products-list');
  PRODUCTS.forEach((product) => {
    const productElement = document.createElement('div');
    const cartButton = document.createElement('button');
    cartButton.textContent = '장바구니 담기';
    cartButton.style.width = '100%';
    cartButton.style.height = '40px';
    cartButton.style.backgroundColor = '#FFD600';
    cartButton.style.border = 'none';
    cartButton.style.color = '#333333';
    cartButton.style.fontWeight = 'bold';
    cartButton.style.cursor = 'pointer';
    cartButton.style.marginTop = '1em';
    cartButton.addEventListener('click', () => {
      alert('장바구니에 상품이 담겼습니다.');
    });

    productElement.appendChild(cartButton);
    productElement.style.border = '1px solid #eeeeee';
    productElement.style.padding = '1em';
    productElement.style.borderRadius = '10px';
    productElement.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
    productElement.style.width = '200px';
    productElement.style.margin = '1em';
    productElement.innerHTML = `
    <img src="${product.productImg}" alt="${
      product.name
    }" style="width: 100%; height: auto;" />
    <div style="display: flex; justify-content: center; align-items: center; margin-top: 1em;">
      <button style="width: 100%; height: 40px; color: #333333; border: none; font-weight: bold; cursor: pointer;">
        담기
      </button>
    </div>
    <div style="color: #333333; font-weight: 400;">${product.name}</div>
      <p style="font-size: 0.75em; color: #999999;">${product.detail}</p>
      <div style="font-size: 18px; font-weight: bold; color: #222222;">${product.price.toLocaleString()}원</div>
      `;
    productsContainer.appendChild(productElement);
  });
};

renderProducts();
