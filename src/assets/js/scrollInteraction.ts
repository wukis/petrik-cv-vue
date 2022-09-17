import $ from "jquery";
import scrollStop from "@/assets/js/scrollStop";

const COUNTER_DURATION = 1500;
const COUNTER_INTERVAL = 25;
const OFFSET_RATIO = 1 / 3;
const MIN_TOP = 0;
const MIN_BOTTOM = 80;

$(function () {
  const $sections = $(".section");

  let target: HTMLElement | undefined;
  $sections.each(function () {
    const topThis = Math.abs(this.getBoundingClientRect().top);
    const topTarget = target ? Math.abs(target.getBoundingClientRect().top) : 0;
    if (!target || topThis < topTarget) {
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      target = this;
    }
  });
  handleInteraction(target);

  const offset = $(window).height() * OFFSET_RATIO;
  scrollStop(function () {
    let target;
    $sections.each(function () {
      const top = this.getBoundingClientRect().top;
      const bottom = this.getBoundingClientRect().bottom;

      if (
        top >= MIN_TOP &&
        top <= offset &&
        (!target || top < Math.abs(target.getBoundingClientRect().top))
      ) {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        target = this;
      } else if (
        bottom >= MIN_BOTTOM &&
        (!target || bottom < target.getBoundingClientRect().bottom)
      ) {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        target = this;
      }
    });

    handleInteraction(target);
  });

  function handleInteraction(target: HTMLElement | undefined) {
    if (!target) {
      return;
    }

    const $target = $(target);
    $target.addClass("interaction-in");
    $target
      .find("[data-counter-from][data-counter-to]:not([data-counter-finished])")
      .each(function () {
        const $counter = $(this);
        $counter.attr("data-counter-finished", "");
        const from = parseInt($counter.data("counter-from"));
        const to = parseInt($counter.data("counter-to"));

        if (to > from) {
          const step = to / (COUNTER_DURATION / COUNTER_INTERVAL);
          let currentCount = 0;
          let lastCount = 0;

          // eslint-disable-next-line no-inner-declarations
          function counter() {
            currentCount = currentCount + step;
            currentCount = currentCount < to ? currentCount : to;
            if (currentCount > lastCount) {
              $counter.text(Math.round(currentCount).toLocaleString());
            }
            lastCount = currentCount;
            if (currentCount < to) {
              setTimeout(counter, COUNTER_INTERVAL);
            }
          }

          setTimeout(counter, COUNTER_INTERVAL);
        }
      });
  }

  $("[data-counter-from][data-counter-to]").each(function () {
    $(this).text($(this).data("counter-from"));
  });
});
