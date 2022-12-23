import { fetchingBooks } from './api'
import { displayBook } from './book'
import { searchBook } from './search'
import { Book } from './type'

const booksContainer: HTMLElement | null = document.querySelector(
  '.library__books-container'
)

const searchButton: HTMLButtonElement | null =
  document.querySelector('.search-bar button')
function renderAllBooks(books: Book[]) {
  books.forEach((book: Book) => {
    const book_wrapper: HTMLElement | null = displayBook(book)
    booksContainer?.appendChild(book_wrapper)
  })
}
async function start() {
  const books: Book[] = await fetchingBooks()
  renderAllBooks(books)

  searchButton?.addEventListener('click', () => searchBook(books))
}

start()
