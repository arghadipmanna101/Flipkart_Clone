document.getElementById("contact-form").reset();
emailjs.init({
      publicKey: "your_api_key",
});
// Feedback JS
function handleSubmit() {


emailjs.sendForm('your_service_id', 'your_template_id',"#contact-form").then(
(response) => {
console.log('SUCCESS!',  response.status, response.text);
},
(error) => {
console.log('FAILED...', error);
},
);





setTimeout(function() {
messageElement.style.display = "none";
document.getElementById("contact-form").reset();
}, 3000);






};
