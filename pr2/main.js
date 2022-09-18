/*2. * У товара может быть несколько изображений. Нужно:
a. Реализовать функционал показа полноразмерных картинок товара в модальном окне;
b. Реализовать функционал перехода между картинками внутри модального окна.*/

'use strict'

let products = [
  {
    title: "Iphone",
    descreption: "Описание",
    price: 100,
    id: 1,
    images: ['1.jpg','2.jpg']
  },
  {
    title: "Samsung",
    descreption: "Описание",
    price: 200,
    id: 2,
    images: ['3.jpg','4.jpg']
  },
  {
    title: "Honor",
    descreption: "Описание",
    price: 300,
    id: 3,
    images: ['5.jpg','6.jpg']
  }
];

let product_in_basket = [
  {
    title: "Iphone",
    id: 1,
    count: 0
  },
  {
    title: "Samsung",
    id: 2,
    count: 0
  },
  {
    title: "Honor",
    id: 3,
    count: 0
  }
];

// переменная для id
 let id = 1;
// function for data-id
function att_id (img) { 
  img.setAttribute("id",id + '.jpg');
  id++;
}
let idx = 0;// переменная для data-idx 
// function for data-idx
function data_idx (gallery) { 
  gallery.setAttribute("data-id",idx);
  idx++;
}

function card(product) {
  // Созданиие главного div card
  let catalog_div = document.querySelector("#catalog");
  let card = document.createElement("div");
  card.style.cssText =
    "width: 400px; min-height: 450px; margin: 0px 30px 30px 0px; background-color: gray; color: white; border: 7px; border-radius: 10px; border-color: rgb(211, 182, 87);";

  catalog_div.appendChild(card);
  // span Title
  let title = document.createElement("span");
  title.style.cssText =
    "display: flex; color: white; width: 100%; min-height: 50px; margin: 5px auto 5px auto; text-align: center; align-items: center; justify-content: center; font-size: 20px;";
  title.textContent = product.title;
  card.appendChild(title);
  // Gallery
  let gallery = document.createElement("div");
  gallery.style.cssText =
    "display: flex; width: 100%; margin: 5px auto 5px auto; justify-content: center;";
  card.appendChild(gallery);
  data_idx(gallery);  
  // Событие на карточку 
  gallery.addEventListener("click",openPopup);
  // images
  // Первая картинка
  let img_1 = document.createElement("img");
  // atrribute id  
  att_id(img_1);
  // attribute source for img_1 
  img_1.setAttribute("src",`img/little/${product.images[0]}`);
  gallery.appendChild(img_1);  
  // Вторая картинка
  let img_2 = document.createElement("img");
  // atrribute id
  att_id(img_2);
  // attribute source for img_2 
  img_2.setAttribute("src",`img/little/${product.images[1]}`);
  gallery.appendChild(img_2);  
  // span Description
  let descreption = document.createElement("span");
  descreption.style.cssText =
    "display: flex; color: white; width: 100%; min-height: 50px; margin: 5px auto 5px auto; text-align: center; align-items: center; justify-content: center; font-size: 17px;";
  descreption.textContent = product.descreption;
  card.appendChild(descreption);
  // span for Price
  let span_price = document.createElement("span");
  span_price.style.cssText =
    "display: flex; color: white; width: 100%; min-height: 50px; margin: 5px auto 5px auto; text-align: center; align-items: center; justify-content: center; font-size: 17px;";
  span_price.textContent = "Цена:" + " " + product.price;
  card.appendChild(span_price);
  // div for button
  let div_cont = document.createElement("div");
  div_cont.style.cssText =
    "display: flex; justify-content: center; width: 100%;";
  card.appendChild(div_cont);
  // button
  let btn = document.createElement("button");
  btn.style.cssText =
    "width: 70px; height: 50px; background-color: white; color: black; border-radius: 10px;";
  btn.textContent = "Купить";
  div_cont.appendChild(btn);
  // handler for button
  btn.addEventListener("click", function (e) {
    basket(product);
    let name_phone = product.title;
    console.log(name_phone);
    console.log(e);
    
  });
}

function catalog(products) {
  // цикл
  for (let product of products) {
    card(product);
  }
}

catalog(products);

  // popup for image
  function drawPopupContent (currentImg) {
    let catalog_div = document.querySelector("#catalog");
    let popup = document.createElement("div");
    popup.setAttribute("id","popup");
    popup.style.cssText = "width: 800px; background: #EEE; position: absolute; top: 50px; left: calc(50% - 400px); border: 2px solid #ccc; border-radius: 6px; padding: 30px; box-shadow: 5px 5px 10px #555; display: block;";
    catalog_div.appendChild(popup);
    // wrapper for img
    let wrapper = document.createElement("div");
    wrapper.setAttribute("id","wrapper");
    wrapper.textContent = " ";
    popup.appendChild(wrapper);
    // img 
    let img = document.createElement("img");
    img.style.height = "90%";
    img.src = `img/big/${currentImg}`;
    wrapper.appendChild(img);  
    // Левая кнопка
    let btn_left = document.createElement("button");
    btn_left.textContent = "<";
    btn_left.setAttribute("id","btnleft");
    popup.appendChild(btn_left);
    // Правая кнопка 
    let btn_right = document.createElement("button");
    btn_right.textContent = ">";
    btn_right.setAttribute("id","btnright");
    popup.appendChild(btn_right);
    
    btn_right.addEventListener("click",function () {
      if (currentImg === images[0]) {
        currentImg = images[1]; 
        console.log(currentImg);
        img.src = `img/big/${currentImg}`; 
        }
        else {
          currentImg= images[0];
          img.src = `img/big/${currentImg}`;
          console.log(currentImg);
        }
    })
    
    console.log(images);
    btn_left.addEventListener("click",function () {
      if (currentImg === images[0]) {
        currentImg = images[1]; 
        console.log(currentImg);
        img.src = `img/big/${currentImg}`; 
        }
        else {
          currentImg= images[0];
          img.src = `img/big/${currentImg}`;
          console.log(currentImg)
        
      }
    })
    
  }
// массив для добавления названия картинок
  let images = [];
  let currentImg = "";
  
  function openPopup(e) {
    images = products[Number(this.getAttribute("data-id"))]["images"];
    currentImg = e.target.getAttribute("id");
    console.log(this);
    console.log('images'+ ' ' + images);
    console.log(currentImg);

    drawPopupContent(currentImg);
  }
  // Функция для перелистования картинок в модальном окне
  function slide (images,currentImg) { 
    if (currentImg === images[0]) {
    currentImg = images[1]; 
    console.log(currentImg);
      drawPopupContent (images,currentImg);  
    }
    else {
      currentImg= images[0];
      console.log(currentImg);
      drawPopupContent(images,currentImg);
    }
  }

  // Корзина 
function basket(product) {
  // Созданиие главного div
  let basket_div = document.querySelector("#basket");
  let bask_prime = document.createElement("div");
  bask_prime.style.cssText =
    "width: 200px; min-height: 200px; background-color: gray; border-width: 7px; border-radius: 10px; border-color: rgb(211, 182, 87);";
  basket_div.replaceChildren(bask_prime);
  let maybe_product = product_in_basket.find((p) => p.id == product.id);
  console.log(maybe_product.count);
  maybe_product.count++;
  const maybe_title = product.title;
  console.log('title' + maybe_title);
  // Строка корзина пуста
  if (product_in_basket.length == 0) {
    let span_empty = document.createElement("span");
    span_empty.style.cssText =
      "display: flex; color: white; width: 100%; min-height: 50px; margin: 5px auto 5px auto; text-align: center; align-items: center; justify-content: center; font-size: 20px;";
    span_empty.textContent = "Корзина пуста";
    bask_prime.appendChild(span_empty);
  }
  // Если в корзине есть товары
  else {
    let sum = 0;
    let quantity = 0;
    for (let item of product_in_basket) {
      const product = products.find((p) => p.id == item.id);
      sum += product.price * item.count;

      quantity += item.count;
    }
    // Строка "В корзине:"
    let span_basket = document.createElement("span");
    span_basket.style.cssText =
      "display: flex; color: white; width: 100%; min-height: 50px; margin: 5px auto 5px auto; text-align: center; align-items: center; justify-content: center; font-size: 20px;";
    span_basket.textContent = "В корзине:";
    bask_prime.appendChild(span_basket);
    // span for product
    let span_product = document.createElement("span");
    span_product.style.cssText =
      "display: flex; color: white; width: 100%; min-height: 50px; margin: 5px auto 5px 5px; align-items: center; font-size: 17px;";
    if ((quantity == 1)) {
      span_product.textContent = quantity + " " + "товар";
    } else if (quantity == 2 || quantity == 3 || quantity == 4) {
      span_product.textContent = quantity + " " + "товара";
    } else {
      span_product.textContent = quantity + " " + "товаров";
    }
    bask_prime.appendChild(span_product);
    // span for sum
    let span_sum = document.createElement("span");
    span_sum.style.cssText =
      "display: flex; color: white; width: 100%; min-height: 50px; margin: 5px auto 5px 5px; align-items: center; font-size: 17px;";
    span_sum.textContent = "на сумму" + " " + sum + " " + "рублей";
    bask_prime.appendChild(span_sum);
    // Событие при нажатии на корзину
    basket_div.addEventListener("click",function(){
      popup_basket(product_in_basket);
    })
  }
}
  

console.log(product_in_basket);

// Модалное окно карзины 

function popup_basket (product_in_basket) {
      let popup_div = document.querySelector("#basket");
      let popup_prime = document.createElement("div");
      popup_prime.setAttribute("id","popup_prime");
      popup_prime.style.cssText = "width: 600px; background: #EEE; position: absolute; top: 50px; left: calc(50% - 400px); color: black; border: 2px solid #ccc; border-radius: 6px; padding: 30px; box-shadow: 5px 5px 10px #555; display: block;";
      popup_div.appendChild(popup_prime);
      // container
      const container = document.createElement("div");
      container.textContent = " ";
      container.style.cssText = "display: flex; width: 100%; min-height: 300px; margin: 5px auto 5px auto; text-align: center; align-items: center; justify-content: center; flex-direction: column;"
      container.setAttribute("id","wrapper_popup");
      popup_prime.appendChild(container);
      // Обертка для строки "Состав корзины"
      const wrapper = document.createElement("div");
      wrapper.style.cssText = "display: flex; width: 100%; margin: 5px auto 5px auto;"
      container.appendChild(wrapper);
      // Строка "Состав корзины"
      const span_title = document.createElement("span");
      span_title.style.cssText = "display: flex; width: 100%; min-height: 30px;  text-align: center; align-items: center; justify-content: center; font-size: 30px;";
      span_title.textContent = "Состав корзины"; 
      span_title.setAttribute("id", "Bucket_list") 
      wrapper.appendChild(span_title);
      // Строка с названием и количеством товара
      let span_composition = document.createElement("span");
      span_composition.style.cssText = "display: flex; width: 100%; min-height: 20px; margin: 5px auto 5px auto; text-align: center; align-items: center; justify-content: center; font-size: 25px;";
      span_composition.textContent = span_in_basket(product_in_basket);
      container.appendChild(span_composition);
      // Кнопка "Далее"
      const btn_popup = document.createElement("button");
      btn_popup.textContent = "Далее";
      btn_popup.setAttribute("id","btnpopup");
      btn_popup.style.cssText = "width: 50px; height: 50px; border: 1px solid #ccc; background: white; font-size: 24  px; border-radius: 10%;";
      popup_prime.appendChild(btn_popup);
      btn_popup.addEventListener("click", function(){
       const element = document.getElementById("wrapper_popup");
        element.parentElement.removeChild(element);
        console.log(element)
        //address(popup_prime);
        /*btn_popup.addEventListener("click",function(){
          container.style.display = "none";
          comment();
    })*/
  })
}

function span_in_basket (product_in_basket) {
  console.log(product_in_basket);
  return product_in_basket.map(product => { 
    console.log(product);
    if (product["count"] > 0 ) {
        let count = product["count"];
        console.log("Счет" + " " + count);
        let name = product["title"];
        let span = name + count;
        console.log("Имя" + " " + name);
        console.log(span);
        return span;
    }
  });
}

// address

  function address (popup_prime) {
    const span_address = document.createElement("span");
    span_address.style.cssText = "display: flex; color: white; width: 100%; min-height: 50px; margin: 5px auto 5px auto; text-align: center; align-items: center; justify-content: center; font-size: 20px;";
    span_address.textContent = "Адресс доставки";
    popup_prime.appendChild(span_address);
    const address_input = document.createElement("input");
    address_input.style.cssText = "display: flex; color: black; width: 100%; min-height: 50px; margin: 5px auto 5px auto; text-align: center; align-items: center; justify-content: center; font-size: 20px;";
    popup_prime.appendChild(address_input);
  }

  // comment

  function comment () {
    const span_comm = document.createElement("span");
    span_comm.style.cssText = "display: flex; color: white; width: 100%; min-height: 50px; margin: 5px auto 5px auto; text-align: center; align-items: center; justify-content: center; font-size: 20px;";
    span_address.textContent = "Комментарий";
    popup_prime.appendChild(span_comm);
    const comm_input = document.createElement("input");
    comm_input.style.cssText = "display: flex; color: black; width: 100%; min-height: 50px; margin: 5px auto 5px auto; text-align: center; align-items: center; justify-content: center; font-size: 20px;";
    popup_prime.appendChild(comm_input);
  }