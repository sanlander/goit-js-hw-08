import { galleryItems } from './gallery-items.js';
// Change code below this line
// Описан в документации
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const refs = {
  boxGallery: document.querySelector(".gallery"),
};

function addGalleryItems() {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
  <li>
  <a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>
</li>`;
    })
    .join("");
}

refs.boxGallery.insertAdjacentHTML("beforeend", addGalleryItems());

refs.boxGallery.addEventListener("click", onClickImg);
function onClickImg(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
}

let gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});