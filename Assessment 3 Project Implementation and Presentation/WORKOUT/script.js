// Toggle between showing and hiding the sidebar when clicking the hamburger menu icon
var sidebar = document.getElementById("sidebar");

// Open sidebar
function sidebar_open() {
  if (sidebar.style.display === 'block') {
    sidebar.style.display = 'none';
  } else {
    sidebar.style.display = 'block';
  }
}

// Dropdown menu sidebar 'What We Offer'
function sidebar_dropdown() {
  var x = document.getElementById("what_we_offer_drop_down_menu_sidebar");
  if (x.className.indexOf("show") == -1) {
    x.className += " show";
  } else {
    x.className = x.className.replace(" show", "");
  }
}
  
// Close the sidebar with the close button
function sidebar_close() {
  sidebar.style.display = "none";
}