const sidebar = document.querySelector('.sidebar');
const body = document.querySelector('body');

const showSidebar = () => {
    sidebar.style.display = "flex";
}

const hideSidebar = () => {
    sidebar.style.display = "none";
}

const loadSmallerImage = (query) => {
    const image = document.getElementById('sellers-image');
    if(query.matches){
        image.src = "images/sellers_image_mobile_devices.png";
    }
    else{
        image.src = "images/sellers_image.webp";   
    }
}

const mediaQuery1 = window.matchMedia("(max-width: 1354px)");
loadSmallerImage(mediaQuery1);
mediaQuery1.addEventListener('change', () => {loadSmallerImage(mediaQuery1)});

const carousel_browse_left_btn = document.getElementById('carousel-browse-left');
const carousel_browse_right_btn = document.getElementById('carousel-browse-right');

const testimonials = document.getElementsByClassName('testimonial');
let prevTestimonial = testimonials[0];
let tID = 0;

const carousel_nav_blocks = document.querySelectorAll('.carousel-indicators');
let prev_nav_block = carousel_nav_blocks[0];

const leftBrowseBtn = document.getElementById('carousel-browse-left');
const rightBrowseBtn = document.getElementById('carousel-browse-right');

const updateBrowseBtnStatus = () => {
    if(tID === 0){
        leftBrowseBtn.classList.add('disabled');
    }
    else{
        leftBrowseBtn.classList.remove('disabled');
    }

    if(tID === testimonials.length-1){
        rightBrowseBtn.classList.add('disabled');
    }
    else{
        rightBrowseBtn.classList.remove('disabled');
    }
};

const browseLeft = () => {
    if(tID !== 0){
        tID--;
        testimonials[tID].style.display = "flex";
        prevTestimonial.style.display = "none";
        prevTestimonial = testimonials[tID];

        prev_nav_block.classList.remove('highlighted-carousel-indicator');
        carousel_nav_blocks[tID].classList.add("highlighted-carousel-indicator");

        prev_nav_block = carousel_nav_blocks[tID];
    }
    else{
        clearInterval(intervalId);
        browseRight();
        intervalId = setInterval(browseRight, 4000);
    }

    updateBrowseBtnStatus();
}

const browseRight = () => {
    if(tID !== testimonials.length-1){
        tID++;
        testimonials[tID].style.display = "flex";
        prevTestimonial.style.display = "none";
        prevTestimonial = testimonials[tID];

        prev_nav_block.classList.remove('highlighted-carousel-indicator');
        carousel_nav_blocks[tID].classList.add("highlighted-carousel-indicator");

        prev_nav_block = carousel_nav_blocks[tID];
    }
    else{
        clearInterval(intervalId);
        browseLeft();
        intervalId = setInterval(browseLeft, 4000);
    }

    updateBrowseBtnStatus();
}

let intervalId = setInterval(browseRight, 4000);

carousel_browse_left_btn.addEventListener('click', browseLeft);
carousel_browse_right_btn.addEventListener('click', browseRight);

function navigateToSection(id){
    id = Number(id.substring(id.length-1));
    tID = id-1;

    prevTestimonial.style.display = "none";
    testimonials[tID].style.display = "flex";
    prevTestimonial = testimonials[tID];

    prev_nav_block.classList.remove('highlighted-carousel-indicator');
    carousel_nav_blocks[tID].classList.add("highlighted-carousel-indicator");
    
    prev_nav_block = carousel_nav_blocks[tID];

    updateBrowseBtnStatus();
}

updateBrowseBtnStatus();