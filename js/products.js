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
    productElement.style.width = '200px';
    productElement.style.textAlign = 'center';
    productElement.style.margin = '1em';
    productElement.innerHTML = `
      <div style="font-weight: bold; font-size: 16px;">${product.name}</div>
      <img src="${product.productImg}" alt="${
      product.name
    }" style="width: 100%; height: auto;" />
      <p style="font-size: 14px; color: #555;">${product.detail}</p>
      <div style="font-size: 18px; font-weight: bold; color: #000;">${product.price.toLocaleString()}원</div>
      `;
    productsContainer.appendChild(productElement);
  });
};

renderProducts();
