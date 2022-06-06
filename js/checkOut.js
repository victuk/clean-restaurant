const personsName = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const address = document.getElementById('address');
const paymentForm = document.getElementById('placeOrder');
const totalAmount = document.getElementById('total');

const restaurantOwnerEmail = '';

function payWithPaystack() {
    console.log(totalGlobalPrice);
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
      console.log(personsName.value, email.value, phone.value, address.value);
        console.log(message);
        const serviceID = 'service_k7yj1dx';
        const templateID = 'template_dekmsp8';
      emailjs.send(serviceID, templateID, {name: `New Order from ${email.value}`, email: email.value, message: `Phone Number: ${phone.value}, \n Address: ${address.value}, \n Order details ${JSON.stringify(totalCartArray)}`})
    .then(() => {
      
      alert('Sent!');
    }, (err) => {
      alert(JSON.stringify(err));
    });

    // alert('Order Successful');
    //   alert(message);
    }
  });
  handler.openIframe();
}


