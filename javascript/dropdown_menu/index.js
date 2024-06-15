// Create click event for button and display menu
const dropDownButton = document.querySelector(".dropdown-menu-button");
dropDownButton.addEventListener("click", function displayDropDownMenu() {
  document.getElementById("myDropdown").classList.toggle("visible");
});

// Create click event for window (off button click) that hides menu
window.addEventListener("click", function hideDropDownMenu(event) {
  if (event.target !== dropDownButton) {
    document.getElementById("myDropdown").classList.remove("visible");
  }
});
