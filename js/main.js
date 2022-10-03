function scroll() {
  window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("header__fixed", this.window.scrollY > 0);
  });
}
scroll();

function scrollFunction(classname, addClassName) {
  window.addEventListener("scroll", function () {
    var content = this.document.querySelector(classname);
    var contentPos = content.getBoundingClientRect().top;
    var screenPos = this.window.innerHeight;

    if (contentPos < screenPos) {
      content.classList.add(addClassName);
    }
  });
}

scrollFunction(".team__content", "active");
scrollFunction(".courses__form", "active");
scrollFunction(".courses__img", "active");
scrollFunction(".footer__content", "active");

function noscroll() {
  var button = document.querySelector(".navbar-toggler");
  button.addEventListener("click", function () {
    document.querySelector("body").classList.toggle("noscroll");
  });
}
noscroll();
