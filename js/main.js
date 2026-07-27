(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    var elements = Array.prototype.slice.call(document.querySelectorAll("[data-io]"));
    var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced || !("IntersectionObserver" in window)) {
      elements.forEach(function (element) {
        element.classList.add("io-on");
      });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("io-on");
        observer.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -6% 0px" });

    elements.forEach(function (element) {
      observer.observe(element);
    });
  });
})();
