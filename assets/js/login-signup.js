document.addEventListener('DOMContentLoaded', () => {
    const components = [
        { id: 'footer-login', url: '../components/footer/footer.html' },
        { id: 'header-login', url: '../components/header/header.html'}
    ];

    components.forEach(component => {
        fetch(component.url)
            .then(response => response.text())
            .then(data => {
                document.getElementById(component.id).innerHTML = data;
            })
            .catch(error => console.error(`Error loading ${component.url}:`, error));
    });
});


document.getElementById('buttonA').addEventListener('click', function() {
    document.getElementById('divA').style.display = 'none';
    document.getElementById('divB').style.display = 'block';
});

document.getElementById('buttonB').addEventListener('click', function() {
    document.getElementById('divB').style.display = 'none';
    document.getElementById('divA').style.display = 'block';
});
