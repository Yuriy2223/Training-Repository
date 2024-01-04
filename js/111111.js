class Gallery {
  constructor(selector, images) {
    this.gallery = document.querySelector(selector);
    this.images = images;
    this.init();
  }

  createGalleryItem({ preview, original, description }) {
    return `<li class="gallery-item">
        <a class="gallery-link" href="${original}">
          <img
            class="gallery-image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>`;
  }

  init() {
    const galleryItems = this.images.map(this.createGalleryItem).join("");
    this.gallery.insertAdjacentHTML("beforeend", galleryItems);
    this.addEventListeners();
  }

  addEventListeners() {
    this.gallery.addEventListener("click", (event) => {
      if (event.target.nodeName !== "IMG") return;
      event.preventDefault();
    });
  }
}

new Gallery(".gallery", images);

//   Цей код створює галерею зображень за допомогою JavaScript класу. Ось пояснення кожного кроку:

//   Створення класу Gallery: Клас Gallery створюється з методами для створення елементів галереї, ініціалізації галереї та додавання обробників подій.

//   Конструктор: Конструктор класу приймає селектор, який вказує на контейнер галереї в HTML, та масив зображень. Він зберігає ці значення як властивості об’єкта та викликає метод init() для ініціалізації галереї.

//   Метод createGalleryItem: Цей метод приймає об’єкт зображення та повертає рядок HTML, який представляє елемент галереї. Він використовує деструктуризацію об’єкта для отримання властивостей preview, original та description з об’єкта зображення.

//   Метод init: Цей метод створює масив рядків HTML, які представляють елементи галереї, використовуючи метод createGalleryItem та масив зображень. Він додає ці елементи до контейнера галереї та викликає метод addEventListeners() для додавання обробників подій.

//   Метод addEventListeners: Цей метод додає обробник подій кліку до контейнера галереї. Якщо клікнуто на зображення, він запобігає поведінці за замовчуванням (відкриття посилання).

//   Створення нового об’єкта Gallery: На останньому рядку коду створюється новий об’єкт Gallery з селектором ‘.gallery’ та масивом images. Це викликає конструктор класу, який ініціалізує галерею.

//   Цей код дозволяє легко створювати галереї зображень на веб-сторінці, використовуючи лише JavaScript. Зверніть увагу, що цей код не містить логіки для відкриття модального вікна з великим зображенням. Ви можете додати цю логіку в обробник подій кліку, якщо це необхідно.
