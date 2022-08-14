import { galleryItems } from "./gallery-items.js";
// Change code below this line

const refs = {
  boxGallery: document.querySelector(".gallery"),
};

const addGalleryItem = () => {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>`;
    })
    .join("");
};
refs.boxGallery.insertAdjacentHTML("beforeend", addGalleryItem());

refs.boxGallery.addEventListener("click", onOpenImg);
function onOpenImg(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }

  const largeImg = e.target.dataset.source;
  // console.log(largeImg);

  const instance = basicLightbox.create(`
  <img src="${largeImg}">
`);
  instance.show();
  window.addEventListener("keydown", onKey);
  function onKey(e) {
    if (e.key === "Escape") {
      instance.close();
      window.removeEventListener("keydown", onKey);
    }
  }
}

