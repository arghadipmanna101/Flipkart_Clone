document.addEventListener("DOMContentLoaded", function() {
    fetch('../footer/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        })
        .catch(error => console.error('Error loading footer:', error));
});

document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById('searchInput');
    const promoWrapper = document.getElementById('promoWrapper');
    const deals = promoWrapper.getElementsByClassName('deal');

    searchInput.addEventListener('input', function() {
        const filter = searchInput.value.toLowerCase();
        for (let i = 0; i < deals.length; i++) {
            const deal = deals[i];
            const title = deal.querySelector('h3').textContent.toLowerCase();
            if (title.includes(filter)) {
                deal.classList.add('visible');
                deal.style.display = "";
            } else {
                deal.classList.remove('visible');
                deal.style.display = "none";
            }
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    // Set the end time for the countdown timer (in milliseconds)
    const endTime = new Date().getTime() + (24 * 60 * 60 * 1000); // Example: 24 hours from now

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = endTime - now;

        if (distance <= 0) {
            document.getElementById('countdown').innerHTML = "EXPIRED";
            return;
        }

        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('countdown').innerHTML =
            `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    }

    function pad(number) {
        return number < 10 ? '0' + number : number;
    }

    // Update the countdown every second
    const interval = setInterval(updateCountdown, 1000);
});
