import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems.preview)
console.log(galleryItems);
const gallery = document.querySelector(".gallery");
const item = galleryItems.map(({ preview, original, description }) => {
    const list = `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
    return list;
});
gallery.insertAdjacentHTML(`beforeend`, item.join(``))
let lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: "alt",
    captionsDelay: 250,
 });