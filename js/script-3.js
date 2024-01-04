// Отримуємо посилання на елемент галереї
const gallery = document.querySelector('.gallery');

// Функція для створення розмітки елемента галереї
function createGalleryItem({ preview, original, description }) {
  return `
    <li class="gallery-item">
      <a class="gallery-link" href="${original}">
        <img
          class="gallery-image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>
  `;
}

// Створюємо розмітку для всіх елементів галереї
const galleryMarkup = images.map(createGalleryItem).join('');

// Додаємо розмітку в галерею
gallery.innerHTML = galleryMarkup;

// Додаємо обробник подій для відкриття модального вікна
gallery.addEventListener('click', event => {
  event.preventDefault();

  // Перевіряємо, чи клікнули по зображенню
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  // Отримуємо посилання на велике зображення
  const largeImageURL = event.target.dataset.source;

  // Виводимо посилання на велике зображення в консоль
  console.log(largeImageURL);

  // Відкриваємо модальне вікно
  const instance = basicLightbox.create(`
    <img src="${largeImageURL}" width="800" height="600">
  `);

  instance.show();

  // Додаємо обробник подій для закриття модального вікна по клавіші Escape
  window.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      instance.close();
      window.removeEventListener('keydown', event);
    }
  });
});
/////+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Отримуємо посилання на елемент галереї
const gallery = document.querySelector('.gallery');

// Функція для створення розмітки елемента галереї
function createGalleryItem({ preview, original, description }) {
  return `
    <li class="gallery-item">
      <a class="gallery-link" href="${original}">
        <img
          class="gallery-image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>
  `;
}

// Створюємо розмітку для всіх елементів галереї
const galleryMarkup = images.map(createGalleryItem).join('');

// Додаємо розмітку в галерею
gallery.innerHTML = galleryMarkup;

// Додаємо обробник подій для відкриття модального вікна
gallery.addEventListener('click', event => {
  event.preventDefault();

  // Перевіряємо, чи клікнули по зображенню
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  // Отримуємо посилання на велике зображення
  const largeImageURL = event.target.dataset.source;

  // Відкриваємо модальне вікно
  const instance = basicLightbox.create(`
    <img src="${largeImageURL}" width="800" height="600">
  `);

  instance.show();

  // Додаємо обробник подій для закриття модального вікна по клавіші Escape
  window.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      instance.close();
      window.removeEventListener('keydown', event);
    }
  });
});
//========================css=======================================
/* Загальні стилі */
body {
    font-family: Arial, sans-serif;
  }
  
  /* Стилі для галереї */
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
   //======== Скопійований код ================

   import * as basicLightbox from 'basiclightbox'

const instance = basicLightbox.create(`
    <div class="modal">
        <p>
            Your first lightbox with just a few lines of code.
            Yes, it's really that simple.
        </p>
    </div>
`)

instance.show()