const personsName = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const address = document.getElementById('address');
const paymentForm = document.getElementById('placeOrder');
const totalAmount = document.getElementById('total');

const restaurantOwnerEmail = 'victorp3tr@gmail.com';

function payWithPaystack() {

  let handler = PaystackPop.setup({
    key: 'pk_test_8a461ca142641ca634dc9dec5dc7bee44c5e79c0', // Replace with your public key
    email: email.value,
    amount: totalGlobalPrice * 100,
    ref: ''+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
    // label: "Optional string that replaces customer email"
    onClose: function(){
      alert('Window closed.');
    },
    callback: function(response){
      let message = 'Payment complete! Reference: ' + response.reference;
        const serviceID = 'service_k7yj1dx';
        const templateID = 'template_dekmsp8';
        let orderList = '\n Order List \n';

        for(let i = 0; i < totalCartArray.length; i++) {
          orderList += `
            Product ID: ${totalCartArray[i].id}
            Name: ${totalCartArray[i].name}
            Price per ${totalCartArray[i].name}: ${totalCartArray[i].price}
            Quantity: ${totalCartArray[i].quantity}
            Total Price for quantity: ${totalCartArray[i].price * totalCartArray[i].quantity}
          `;
        }

    //   emailjs.send(serviceID, templateID, {name: `New Order from ${restaurantOwnerEmail}`, email: restaurantOwnerEmail, message: `<div>Phone Number: ${phone.value}, \n Address: ${address.value}, \n ${orderList}</div>`})
    // .then(() => {
    //   console.log("Email delivered");
    // }, (err) => {
    //   alert(JSON.stringify(err));
    // });

    emailjs.send(serviceID, templateID, {name: personsName.value, email: email.value, message: `Order from ${personsName.value} (${email.value}) has been received. \n \n ${orderList} \n \n Total Price: ${totalGlobalPrice}`})
    .then(() => {
      alert("Customer Email Delivered.");
      email.value = '';
      personsName.value = '';
      phone.value = '';
      address.value = '';
      localStorage.setItem('cartItems', JSON.stringify([]));
      showCartDetails();
      totalSummary();
    }, (err) => {
      alert(JSON.stringify(err));
    });

    // alert('Order Successful');
    //   alert(message);
    }
  });
  handler.openIframe();
}


