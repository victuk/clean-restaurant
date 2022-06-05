const personsName = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const address = document.getElementById('address');
const submitButton = document.getElementById('submit');

submitButton.addEventListener('click', function() {
    console.log(personsName.value, email.value, phone.value, address.value);
    alert('Order Successful');
});
