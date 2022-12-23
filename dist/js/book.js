import { toggleModal } from './modal.js'
export function showBookJacket(book) {
  const book_jacket = document.querySelector('.jacket')
  book_jacket.innerHTML = ''
  const book_wrapper = displayBook(book)
  if (book_jacket && book_wrapper) {
    book_jacket.appendChild(book_wrapper)
  }
}
export function showOtherInformation(book) {
  const detailContainer = document.querySelector('.detail')
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
                <button type="button" class="btn">Oh, I want to read it!</button>`
  if (detailContainer) {
    detailContainer.innerHTML = detail
  }
}
export function displayBookDetail(book) {
  showBookJacket(book)
  showOtherInformation(book)
}
export function displayBook(book) {
  const title = document.createElement('strong')
  title.setAttribute('class', 'title')
  title.textContent = book.title
  const author = document.createElement('p')
  author.setAttribute('class', 'author')
  author.textContent = book.author
  const book_info = document.createElement('aside')
  book_info.setAttribute('class', 'book-list')
  book_info.appendChild(title)
  book_info.appendChild(author)
  const book_wrapper = document.createElement('section')
  book_wrapper.setAttribute('class', 'book')
  book_wrapper.style.setProperty(
    'background',
    `linear-gradient(208.29deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 92.13%),${book.color}`
  )
  book_wrapper.addEventListener('click', () => toggleModal(book))
  book_wrapper.appendChild(book_info)
  return book_wrapper
}
