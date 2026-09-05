document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".publication-entry__bib").forEach(function (button) {
    button.addEventListener("click", function () {
      var content = document.getElementById(button.getAttribute("aria-controls"));
      var isExpanded = button.getAttribute("aria-expanded") === "true";

      button.setAttribute("aria-expanded", String(!isExpanded));
      content.hidden = isExpanded;
    });
  });
});
