const lightbox = document.querySelector(".lightbox");
const lightboxImage = lightbox?.querySelector("img");
const lightboxCaption = lightbox?.querySelector("p");
const lightboxClose = lightbox?.querySelector(".lightbox-close");

document.querySelectorAll(".portfolio-item").forEach((item) => {
  item.addEventListener("click", () => {
    if (!lightbox || !lightboxImage || !lightboxCaption) return;

    lightboxImage.src = item.dataset.full;
    lightboxImage.alt = item.querySelector("img")?.alt || "";
    lightboxCaption.textContent = item.dataset.title || "";
    lightbox.showModal();
  });
});

lightboxClose?.addEventListener("click", () => lightbox.close());

lightbox?.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    lightbox.close();
  }
});
