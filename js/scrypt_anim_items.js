// document.body.onscroll(animOnScroll())
$(document).ready(function () {
  // document.body.onscroll(animOnScroll())

  const animItems = $("._anim-item");
  window.addEventListener("scroll", animOnScroll);
  function animOnScroll() {
    jQuery.map(animItems, function (item) {
      const animItemHeight = item.offsetHeight;
      const animItemOffset = offset(item).top;
      const animStart = 1;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if (
        scrollY > animItemOffset - animItemPoint &&
        scrollY < animItemOffset + animItemHeight
      ) {
        $(item).addClass("_active");
      } else {
        // $(animItem).removeClass('_active')
      }

      function offset(el) {
        const rect = el.getBoundingClientRect();
        scrollLeft = scrollY || document.documentElement.scrollLeft;
        scrollTop = scrollY || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
      }
    });
  }
  setTimeout(() => {
    animOnScroll();
  }, 500);
});
