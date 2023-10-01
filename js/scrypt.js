const accordionItemHeaders = document.querySelectorAll(
  ".accordion__item-header"
);

accordionItemHeaders.forEach((accordionItemHeader) => {
  accordionItemHeader.addEventListener("click", (event) => {
    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if (accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    } else {
      accordionItemBody.style.maxHeight = 0;
    }
  });
});

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    // items: 3,
    loop: true,
    margin: 20,
    autoWidth:true,
    nav: true,
    responsive : {
      // breakpoint from 0 up
      0 : {
          items: 1,
      },
      1300 : {
          items: 2,
      },
      1920 : {
        items: 3,
      }

  }
    // тут настройки плагина
  });

  var owl = $(".owl-carousel");
  owl.owlCarousel();
  // Go to the next item
  $(".customNextBtn").click(function () {
    owl.trigger("next.owl.carousel");
  });
  // Go to the previous item
  $(".customPrevBtn").click(function () {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger("prev.owl.carousel", [300]);
  });
});
