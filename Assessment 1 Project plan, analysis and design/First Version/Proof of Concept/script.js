// Toggle between showing and hiding the sidebar when clicking the menu icon
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

// jQuery

// view/hide product specifications
$(document).ready(function(){
  $("#prdct1").click(function(){
    $("#specs1").slideToggle("slow");
  });
});

$(document).ready(function(){
  $("#prdct2").click(function(){
    $("#specs2").slideToggle("slow");
  });
});

$(document).ready(function(){
  $("#prdct3").click(function(){
    $("#specs3").slideToggle("slow");
  });
});