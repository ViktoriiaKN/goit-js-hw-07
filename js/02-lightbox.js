import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');
// Створюємо масив galleryItems
const itemsMarkup = createGalleryItemsMarkup(galleryItems);
// Вставляємо після всіх дітей
galleryContainer.insertAdjacentHTML('beforeend', itemsMarkup);


// rendered items
function createGalleryItemsMarkup(items) {
    return items.map(({ preview,original,description }) => {
        return `<div class='gallery__item'> 
        <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
  </div>`;
    })
    .join('');
};

const lightbox = newSimpleLightbox('.gallery a', {
    captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250
});

console.log(galleryItems);
