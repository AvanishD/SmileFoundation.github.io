// Automatic Slideshow 

var headerss = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("images");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  headerss++;
  if (headerss > x.length) {headerss = 1}
  x[headerss-1].style.display = "block";
  setTimeout(carousel, 3000);
}


