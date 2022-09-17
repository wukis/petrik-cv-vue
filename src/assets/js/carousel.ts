import $ from "jquery";

$(function () {
  normalizeCarouselItems();

  window.addEventListener("resize", function () {
    normalizeCarouselItems();
  });

  function normalizeCarouselItems() {
    $(".carousel").each(function () {
      const $items = $(this).find(".carousel-item");
      $items.css("min-height", 0);
      let maxHeight = 0;
      $items.each(function () {
        const height = $(this).height();
        if (height > maxHeight) {
          maxHeight = height;
        }
      });

      $items.css("min-height", maxHeight);
    });
  }
});
