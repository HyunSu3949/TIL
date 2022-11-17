import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import shoppingCart from "./assets/icon-shopping-cart-white.svg";
// npx create-react-app my-app --template basic-react
// cd my-app
// npm install styled-components styled-reset

const GlobalStyle = createGlobalStyle`
  /* reset코드 + 커스텀reset코드 + 유틸리티코드 */
  /* 한 줄 말줄임, 두 줄 말줄임... */
  ${reset}
  
  span {
    color: red;
    font-size: 12px;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    border: none;
    cursor: pointer;
  }

  * {
    box-sizing: border-box;
  }
`;

const ContainerMain = styled.main`
  display: flex;
  justify-content: center;
  margin-top: 160px;
`;

const 

async function requests() {
  const response = await fetch("http://test.api.weniv.co.kr/mall");
  const data = await response.json();
  return data;
}

function ProductList() {
  const [productListData, setProductListData] = useState([]);
  const [dataLoadSwitch, setDataLoadSwitch] = useState(true);

  if (dataLoadSwitch) {
    requests().then((productData) => {
      setProductListData(productData);
      setDataLoadSwitch(false);
    });
  }

  // 무한반복
  // requests().then(productData => setProductListData(productData))
  // console.log(productListData)

  // const productListData = requests()
  // console.log(productListData) // 위와 같이 실행하면 promise입니다.

  return (
    <ul>
      {productListData.map((item) => (
        <ProductListItem
          key={item.id}
          productName={item.productName}
          price={item.price}
          thumbnailImg={item.thumbnailImg}
        />
      ))}
    </ul>
  );
}

function ProductListItem({ productName, price, thumbnailImg }) {
  return (
    <li>
      <img
        src={"http://test.api.weniv.co.kr/" + thumbnailImg}
        alt={productName}
      />
      <p>{productName}</p>
      <span>하트</span>
      <p>{price}</p>
    </li>
  );
}

function ShoppingCart() {
  return <a href="#">쇼핑카트</a>;
}

function App() {
  return (
    <ContainerMain>
      <GlobalStyle />
      <ProductList />
      <ShoppingCart />
    </ContainerMain>
  );
}
export default App;
