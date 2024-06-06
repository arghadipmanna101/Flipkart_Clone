document.addEventListener('DOMContentLoaded', () => {
    const inputField_h = document.getElementById('inputField_h');
    const fetchButton_h = document.getElementById('fetchButton_h');

    function fetchValue_h() {
        const value = inputField_h.value;
        window.location.href = `../search/?query=${value}`;
        console.log("dkc")
    }

    fetchButton_h.addEventListener('click', fetchValue_h);

    inputField_h.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            fetchValue_h();
        }
    });
});

