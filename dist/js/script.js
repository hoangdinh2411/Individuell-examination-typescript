var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value)
          })
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value))
        } catch (e) {
          reject(e)
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value))
        } catch (e) {
          reject(e)
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected)
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next())
    })
  }
import { fetchingBooks } from './api.js'
import { displayBook } from './book.js'
import { searchBook } from './search.js'
const booksContainer = document.querySelector('.library__books-container')
const searchButton = document.querySelector('.search-bar button')
function renderAllBooks(books) {
  books.forEach((book) => {
    const book_wrapper = displayBook(book)
    booksContainer === null || booksContainer === void 0
      ? void 0
      : booksContainer.appendChild(book_wrapper)
  })
}
function start() {
  return __awaiter(this, void 0, void 0, function* () {
    const books = yield fetchingBooks()
    renderAllBooks(books)
    searchButton === null || searchButton === void 0
      ? void 0
      : searchButton.addEventListener('click', () => searchBook(books))
  })
}
start()
