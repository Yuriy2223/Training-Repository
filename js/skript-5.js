const gallery = document.querySelector('.gallery');

const createGalleryItem = ({ preview, original, description }) => `
  <li class="gallery-item">
    <a class="gallery-link" href="${original}">
      <img class="gallery-image" src="${preview}" data-source="${original}" alt="${description}" />
    </a>
  </li>
`;

gallery.innerHTML = images.map(createGalleryItem).join('');

const instance = basicLightbox.create(`
  <img src="" width="800" height="600">
`);

const openModal = event => {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') return;
  instance.element().querySelector('img').src = event.target.dataset.source;
  instance.show();
};

const closeModal = event => {
  if (event.key === 'Escape') {
    instance.close();
    window.removeEventListener('keydown', closeModal);
  }
};

gallery.addEventListener('click', openModal);
window.addEventListener('keydown', closeModal);

//========================= CSS =============

body {
    font-family: Arial, sans-serif;
  }
  
  .gallery {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  
  .gallery-item {
    margin: 10px;
  }
  
  .gallery-image {
    display: block;
    width: 100%;
    height: auto;
  }
  