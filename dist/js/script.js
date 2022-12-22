var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const elements = {
    API_URL: 'https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books',
    booksContainer: document.querySelector('.library__books-container'),
    modal: document.querySelector('.modal'),
    back_icon: document.querySelector('.back-icon'),
    modal_overlay: document.querySelector('.modal__overlay'),
};
function fetchingBooks() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch(elements.API_URL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const books = yield res.json();
        return books;
    });
}
function closeModal() {
    var _a;
    (_a = elements.modal) === null || _a === void 0 ? void 0 : _a.classList.remove('active');
}
function openModal() {
    var _a;
    (_a = elements.modal) === null || _a === void 0 ? void 0 : _a.classList.add('active');
}
function toggleModal(book) {
    openModal();
    displayBookDetail(book);
    setCloseModalEventForElements();
}
function setCloseModalEventForElements() {
    var _a, _b;
    (_a = elements.back_icon) === null || _a === void 0 ? void 0 : _a.addEventListener('click', closeModal);
    (_b = elements.modal_overlay) === null || _b === void 0 ? void 0 : _b.addEventListener('click', closeModal);
}
function showBookJacket(book) {
    const book_jacket = document.querySelector('.jacket');
    book_jacket.innerHTML = '';
    const book_wrapper = displayBook(book);
    if (book_jacket && book_wrapper) {
        book_jacket.appendChild(book_wrapper);
    }
}
function showOtherInformation(book) {
    const detailContainer = document.querySelector('.detail');
    const detail = `
              <strong class="title title--detail">${book.title}</strong>
              <p class="author author--detail">${book.author}</p>
              <p class="plot">${book.plot}</p>
              <div class="other">
                <p>Audience: <span>${book.audience}</span></p>
                <p>First published: <span>${book.year}</span></p>
                <p>Pages: <span>${book.pages}</span></p>
                <p>Publisher: <span>${book.publisher}</span></p>
              </div>
              <button type="button" class="btn">Oh, I want to read it!</button>`;
    if (detailContainer) {
        detailContainer.innerHTML = detail;
    }
}
function displayBookDetail(book) {
    showBookJacket(book);
    showOtherInformation(book);
}
function displayBook(book) {
    const title = document.createElement('strong');
    title.setAttribute('class', 'title');
    title.textContent = book.title;
    const author = document.createElement('p');
    author.setAttribute('class', 'author');
    author.textContent = book.author;
    const book_info = document.createElement('aside');
    book_info.setAttribute('class', 'book-list');
    book_info.appendChild(title);
    book_info.appendChild(author);
    const book_wrapper = document.createElement('section');
    book_wrapper.setAttribute('class', 'book');
    book_wrapper.style.setProperty('background', `linear-gradient(208.29deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 92.13%),${book.color}`);
    book_wrapper.addEventListener('click', () => toggleModal(book));
    book_wrapper.appendChild(book_info);
    return book_wrapper;
}
function renderAllBooks(books) {
    books.forEach((book) => {
        var _a;
        const book_wrapper = displayBook(book);
        (_a = elements.booksContainer) === null || _a === void 0 ? void 0 : _a.appendChild(book_wrapper);
    });
}
function start() {
    return __awaiter(this, void 0, void 0, function* () {
        const books = yield fetchingBooks();
        renderAllBooks(books);
    });
}
start();
export {};
