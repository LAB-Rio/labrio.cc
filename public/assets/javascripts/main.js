function scrollBanner() {
  var scrollPos;
  var headerText = document.querySelector('.header-paralax h1');
  scrollPos = window.scrollY;

  if (scrollPos <= 400) {
      headerText.style.transform =  "translateY(" + (-scrollPos/3) +"px" + ")";
      headerText.style.opacity = 1 - (scrollPos/600);
  }
}

window.addEventListener('scroll', scrollBanner);