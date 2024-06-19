// script.js

document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById('search-input');
    const voiceSearchBtn = document.getElementById('voice-search-btn');

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.onstart = function() {
        console.log("Voice recognition started. Try speaking into the microphone.");
    };

    recognition.onspeechend = function() {
        recognition.stop();
    };

    recognition.onresult = function(event) {
        const transcript = event.results[0][0].transcript;
        searchInput.value = transcript;
        performSearch(transcript);
    };

    voiceSearchBtn.addEventListener('click', () => {
        recognition.start();
    });

    searchInput.addEventListener('input', () => {
        performSearch(searchInput.value);
    });

    function performSearch(query) {
        const products = document.querySelectorAll('.product-item');
        products.forEach(product => {
            const productName = product.getAttribute('data-name').toLowerCase();
            const productCategory = product.getAttribute('data-category').toLowerCase();
            if (productName.includes(query.toLowerCase()) || productCategory.includes(query.toLowerCase())) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    }
});
