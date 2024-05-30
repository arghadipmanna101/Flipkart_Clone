function toggleDropdownMenu(event) {
  const dropdownMenu = event.currentTarget.querySelector('.homeHeader .dropdown-menu');
  if (dropdownMenu) {
      if (event.type === 'mouseenter') {
          dropdownMenu.classList.add('show');
          // console.log("shwo")
      } else if (event.type === 'mouseleave') {
          dropdownMenu.classList.remove('show');
          // console.log("hide")
      }
  }
}

// Adding event listeners to both elements
const navbarDropdown = document.getElementById('navbarDropdow');
const moreLinksDropdown = document.getElementById('moreLinksDropdow');

if (navbarDropdown) {
  navbarDropdown.addEventListener('mouseenter', toggleDropdownMenu);
  navbarDropdown.addEventListener('mouseleave', toggleDropdownMenu);
}

if (moreLinksDropdown) {
  moreLinksDropdown.addEventListener('mouseenter', toggleDropdownMenu);
  moreLinksDropdown.addEventListener('mouseleave', toggleDropdownMenu);
}

