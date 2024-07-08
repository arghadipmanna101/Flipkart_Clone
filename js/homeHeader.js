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
  const cartItemsFromStorage = JSON.parse(
    localStorage.getItem("filteredProducts")
  );
  let cartItemslen = cartItemsFromStorage.length;
  if(cartItemslen>0){
     document.getElementById("cartItems").style.visibility="visible";
     let toggleItmDis = document.getElementById("cartItems");
     let dataItms = document.getElementById("cartItems");
     dataItms.innerText = cartItemslen;
  }
  else{
    document.getElementById("cartItems").style.visibility="hidden";
  }
  
} catch (error) {
  document.getElementById("cartItems").style.display="none"
  console.warn(error)
}
