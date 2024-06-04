function toggleDropdownMenu(event) {
  const dropdownMenu = event.currentTarget.querySelector(
    ".homeHeader .dropdown-menu"
  );
  if (dropdownMenu) {
    if (event.type === "mouseenter") {
      dropdownMenu.classList.add("show");
      // console.log("shwo")
    } else if (event.type === "mouseleave") {
      dropdownMenu.classList.remove("show");
      // console.log("hide")
    }
  }
}

// Adding event listeners to both elements
const navbarDropdown = document.getElementById("navbarDropdow");
const moreLinksDropdown = document.getElementById("moreLinksDropdow");

if (navbarDropdown) {
  navbarDropdown.addEventListener("mouseenter", toggleDropdownMenu);
  navbarDropdown.addEventListener("mouseleave", toggleDropdownMenu);
}

if (moreLinksDropdown) {
  moreLinksDropdown.addEventListener("mouseenter", toggleDropdownMenu);
  moreLinksDropdown.addEventListener("mouseleave", toggleDropdownMenu);
}

// for kart

try {
  document.getElementById("cartItems").style.display="block"
  const cartItemsFromStorage = JSON.parse(
    localStorage.getItem("filteredProducts")
  );
  let cartItemslen = cartItemsFromStorage.length;
  let toggleItmDis = document.getElementById("cartItems");
  let dataItms = document.getElementById("cartItems");
  dataItms.innerText = cartItemslen;
} catch (error) {
  document.getElementById("cartItems").style.display="none"
  console.warn(error)
}
