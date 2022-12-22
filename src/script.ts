import { Book, Elements } from './type'

const elements: Elements = {
  API_URL:
    'https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books',
  booksContainer: document.querySelector('.library__books-container'),
  modal: document.querySelector('.modal'),
  back_icon: document.querySelector('.back-icon'),
  modal_overlay: document.querySelector('.modal__overlay'),
}

async function fetchingBooks() {
  const res = await fetch(elements.API_URL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  const books: Book[] = await res.json()
  return books
}
function closeModal() {
  elements.modal?.classList.remove('active')
}
function openModal() {
  elements.modal?.classList.add('active')
}

function toggleModal(book: Book) {
  openModal()
  displayBookDetail(book)
  setCloseModalEventForElements()
}

function setCloseModalEventForElements() {
  elements.back_icon?.addEventListener('click', closeModal)
  elements.modal_overlay?.addEventListener('click', closeModal)
}

function showBookJacket(book: Book) {
  const book_jacket: HTMLElement | null = document.querySelector('.jacket')
  book_jacket!.innerHTML = ''
  const book_wrapper: HTMLElement | null = displayBook(book)
  if (book_jacket && book_wrapper) {
    book_jacket!.appendChild(book_wrapper)
  }
}

function showOtherInformation(book: Book) {
  const detailContainer: HTMLElement | null = document.querySelector('.detail')
  const detail: string = `
              <strong class="title title--detail">${book.title}</strong>
              <p class="author author--detail">${book.author}</p>
              <p class="plot">${book.plot}</p>
              <div class="other">
                <p>Audience: <span>${book.audience}</span></p>
                <p>First published: <span>${book.year}</span></p>
                <p>Pages: <span>${book.pages}</span></p>
                <p>Publisher: <span>${book.publisher}</span></p>
              </div>
              <button type="button" class="btn">Oh, I want to read it!</button>`
  if (detailContainer) {
    detailContainer!.innerHTML = detail
  }
}
function displayBookDetail(book: Book) {
  showBookJacket(book)
  showOtherInformation(book)
}

function displayBook(book: Book) {
  const title: HTMLElement | null = document.createElement('strong')
  title.setAttribute('class', 'title')
  title.textContent = book.title
  const author: HTMLElement | null = document.createElement('p')
  author.setAttribute('class', 'author')
  author.textContent = book.author

  const book_info: HTMLElement | null = document.createElement('aside')
  book_info.setAttribute('class', 'book-list')
  book_info.appendChild(title)
  book_info.appendChild(author)

  const book_wrapper: HTMLElement | null = document.createElement('section')
  book_wrapper.setAttribute('class', 'book')
  book_wrapper.style.setProperty(
    'background',
    `linear-gradient(208.29deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 92.13%),${book.color}`
  )
  book_wrapper.addEventListener('click', () => toggleModal(book))
  book_wrapper.appendChild(book_info)
  return book_wrapper
}

function renderAllBooks(books: Book[]) {
  books.forEach((book: Book) => {
    const book_wrapper: HTMLElement | null = displayBook(book)
    elements.booksContainer?.appendChild(book_wrapper)
  })
}
async function start() {
  const books: Book[] = await fetchingBooks()
  renderAllBooks(books)
}

start()
