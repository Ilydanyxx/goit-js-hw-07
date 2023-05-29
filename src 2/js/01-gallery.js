import { galleryItems } from './gallery-items.js';
// Change code below this line

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
gallery.addEventListener(`click`, clicker)
function clicker(element) {
    element.preventDefault();
    const target = element.target;
    if (target.nodeName !== `IMG`) {
        return;
        
    }
    const image = target.dataset.source;
    console.log(image)
    modal(image);

}
function modal(url) {
    let instance = null;
    const event = `<img src="${url}">`;
    
    instance = basicLightbox.create(event, {
        
    });

    instance.show()
    

}
