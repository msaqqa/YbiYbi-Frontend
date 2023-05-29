// Run Multiple Items slider Using Bootstrap
const items = document.querySelectorAll(".carousel .carousel-item");
items.forEach((e) => {
  const slide = 3;
  let next = e.nextElementSibling;
  for (let i = 1; i < slide; i++) {
    if (!next) {
      next = items[0];
    }
    let clonechlide = next.cloneNode(true);
    e.appendChild(clonechlide.children[0]);
    next = next.nextElementSibling;
  }
});
