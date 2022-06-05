var cartArray = [];
let totalCartArray = JSON.parse(localStorage.getItem('cartItems'));

(function() {
    if(!localStorage.getItem('cartItems')) {
        localStorage.setItem('cartItems', JSON.stringify([]));
    }
})();

//add items to the cart
function addToCart(id){
    // console.log(id);
    // return 0;
    let addItem;
    data.forEach((item, i) => {

        // if(cartArray == '') return;

        if (item.id == id) {
          addItem = item;
        }
      });
      for (let j = 0; j < cartArray.length; j++) {
        if(cartArray[j].id == addItem.id) {
          return alert('Your item is already there');
        }
      }
    // cartArray = addItem;
    saveToLocalStorage(addItem);
    additem = '';
    alert('Item added to your cart');
    
    showCartDetails();
}

function saveToLocalStorage(value) {
    let tempCartArray = JSON.parse(localStorage.getItem('cartItems'));
    
    console.log(tempCartArray);
    tempCartArray.push(value);

    localStorage.setItem('cartItems', JSON.stringify(tempCartArray));
}



function showCartDetails() {

    let totalCartArray = JSON.parse(localStorage.getItem('cartItems'));
  
  
  if(totalCartArray.length == 0) {
    document.getElementById('cart-itself').innerHTML = '<div style="padding: 50px; text-align:center;">Your Cart Is Empty</div>';
  } else {
    totalSummary();
    document.getElementById('cart-itself').innerHTML = `<div class="cart-list">
    <div>Picture</div>
    <div>Name</div>
    <div>Quantity</div>
    <div>Increase/Decrease Button</div>
    <div>Price Per Item</div>
    <div>Total Item(s) Price</div>
    <div>Delete Item</div>
    </div>`;
    totalCartArray.forEach((cartItem, i) => {
      document.getElementById('cart-itself').innerHTML +=  `<div class="cart-list">
      <img id="listImg" src="${cartItem.img}" style="width: 100px; width: 100px;" />
      <h3 class="list-name">${cartItem.name}</h3>
      <h3 class="quantity">${cartItem.quantity}</h3>
      <div><button onclick="changeQuantity(${cartItem.id}, 'sub', ${cartItem.quantity})" style="padding: 5px; border: none; background-color: #d0a772; color: white; padding: 0 10px;"> - </button> <button onclick="changeQuantity(${cartItem.id}, 'add')" style="padding: 5px; border: none; background-color: #d0a772; color: white; padding: 0 10px;"> + </button></div>
      <h3 class="pay">${cartItem.price}</h3>
      <h3>${cartItem.price * cartItem.quantity}</h3>
      <button style="height: 40px;" onclick="deleteItem(${cartItem.id})">Delete</button>
      </div>`;
    });
  }
}

function changeQuantity(id, value, quantity) {
    let totalCartArray = JSON.parse(localStorage.getItem('cartItems'));
    function saveIt() {
        localStorage.setItem('cartItems', JSON.stringify(totalCartArray));
    }
  if(quantity -1 <= 0) {
    alert("Negative values are not acceptable");
  } else {
    if(value == 'add') {
      for (let j = 0; j < totalCartArray.length; j++) {
        if(totalCartArray[j].id == id) {
          totalCartArray[j].quantity++;
          saveIt();
        }
      }
    } else if (value == 'sub') {
      for (let j = 0; j < totalCartArray.length; j++) {
        if(totalCartArray[j].id == id) {
          totalCartArray[j].quantity--;
          saveIt();
        }
      }
    }

  }
  showCartDetails();
}

function deleteItem(id) {
  for (let j = 0; j < totalCartArray.length; j++) {
    if(totalCartArray[j].id == id) {
      // cartArray.splice(cartArray[j], 1);
      totalCartArray.splice(totalCartArray.indexOf(totalCartArray[j]), 1);
    }
  }
  localStorage.setItem('cartItems', JSON.stringify(totalCartArray));
  showCartDetails()
}

function totalSummary() {
  let totalPrice = 0;
  let quantity = 0;
  let totalCartArray = JSON.parse(localStorage.getItem('cartItems'));
  for (let j = 0; j < totalCartArray.length; j++) {
    totalPrice += totalCartArray[j].price * totalCartArray[j].quantity;
    quantity += totalCartArray[j].quantity;
  }
  document.getElementById('total').innerHTML = `<h3 id="total-items">Quantity: ${quantity}</h3>
  <h2>Amount: ${totalPrice}</h2>`;
}

showCartDetails();