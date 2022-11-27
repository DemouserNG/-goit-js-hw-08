
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items';



console.log(galleryItems);

const imagesContainer = document.querySelector(".gallery");

galleryItems.forEach((el) => {
  imagesContainer.insertAdjacentHTML(
    'afterbegin',

    `<a class="gallery__item" href="${el.original}">
     <img class="gallery__image" src="${el.preview}" alt="${el.description}" />

    </a>`)
  imagesContainer.innerHTML;
});


new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
