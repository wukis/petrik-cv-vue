export default function scrollStop(callback: { (): void }) {
  if (!callback || typeof callback !== "function") return;
  let isScrolling: ReturnType<typeof setTimeout>;
  window.addEventListener(
    "scroll",
    function () {
      window.clearTimeout(isScrolling);
      isScrolling = setTimeout(function () {
        callback();
      }, 66);
    },
    false
  );
}
