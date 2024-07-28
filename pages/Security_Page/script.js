// to apply styling to the first paragraph that is immediately followed by a ul element

document.querySelectorAll('p + ul').forEach(ul => {
    ul.previousElementSibling.classList.add('highlight');
});