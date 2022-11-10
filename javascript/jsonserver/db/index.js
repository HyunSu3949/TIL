// Read
const btnLoad = document.querySelector("#btn-load");
btnLoad.addEventListener("click", loadSetup());

function loadSetup() {
  let isLoad = false;
  function paintData() {
    fetch("http://localhost:3001/product", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        if (isLoad) {
          return alert("최신 상태입니다");
        }
        for (item of data) {
          const $container = document.createElement("section");
          const $productName = document.createElement("h2");
          const $price = document.createElement("p");

          $container.setAttribute("id", `${item.id}`);
          $productName.innerText = item.productName;
          $price.innerText = item.price;

          $container.appendChild($productName);
          $container.appendChild($price);

          const btnPatch = document.createElement("button");
          btnPatch.textContent = "상품정보변경";
          btnPatch.setAttribute("class", "btn-patch");

          const btnDelete = document.createElement("button");
          btnDelete.textContent = "상품삭제";
          btnDelete.setAttribute("class", "btn-delete");

          $container.append(btnPatch, btnDelete);
          document.body.appendChild($container);

          btnPatch.addEventListener("click", () => {
            return itemPatch($container);
          });
          btnDelete.addEventListener("click", () => {
            return itemDelete($container);
          });
        }
        isLoad = true;
      });
  }
  return paintData;
}

//create
const btnRegister = document.querySelector("#btn-register");
btnRegister.addEventListener("click", itemRegi);

function itemRegi() {
  const productInfo = {
    productName: document.querySelector("#inp-name").value,
    price: document.querySelector("#inp-price").value,
    stockCount: document.querySelector("#inp-stock").value,
    viewCount: 0,
    pubDate: document.querySelector("#inp-date").value,
    modDate: document.querySelector("#inp-date").value,
  };

  fetch("http://localhost:3001/product", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(productInfo),
  })
    .then((response) => response.json())
    .then((item) => {
      const $container = document.createElement("section");
      const $productName = document.createElement("h2");
      const $price = document.createElement("p");

      $productName.innerText = item.productName;
      $price.innerText = item.price;
      const btnPatch = document.createElement("button");
      btnPatch.textContent = "상품정보변경";
      btnPatch.setAttribute("class", "btn-patch");

      const btnDelete = document.createElement("button");
      btnDelete.textContent = "상품삭제";
      btnDelete.setAttribute("class", "btn-delete");

      $container.appendChild($productName);
      $container.appendChild($price);
      $container.append(btnPatch, btnDelete);

      document.body.appendChild($container);
    });
}

function itemPatch(targetCont) {
  const button = targetCont.querySelector(".btn-patch");
  const h2 = targetCont.querySelector("h2");
  const p = targetCont.querySelector("p");
  if (button.textContent == "상품정보변경") {
    const inpModH2 = document.createElement("input");
    const inpModP = document.createElement("input");
    inpModH2.setAttribute("class", "inp-mod-h2");
    inpModH2.value = h2.textContent;

    inpModP.setAttribute("class", "inp-mod-p");
    inpModP.value = p.textContent;

    targetCont.append(inpModH2, inpModP);

    button.textContent = "변경확인";
  } else {
    button.textContent = "상품정보변경";
    const inpValH2 = targetCont.querySelector(".inp-mod-h2");
    const inpValP = targetCont.querySelector(".inp-mod-p");
    const patchData = {
      productName: inpValH2.value,
      price: inpValP.value,
    };
    fetch(`http://localhost:3001/product/${targetCont.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(patchData),
    })
      .then((res) => res.json())
      .then((data) => {
        h2.textContent = data.productName;
        p.textContent = data.price;
        inpValH2.remove();
        inpValP.remove();
      });
  }
}

function itemDelete(targetCont) {
  fetch(`http://localhost:3001/product/${targetCont.id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .then(() => {
      console.log(1);
      targetCont.remove();
    });
}
