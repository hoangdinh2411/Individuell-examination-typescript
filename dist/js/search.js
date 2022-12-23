import { toggleModal } from './modal.js'
export function searchBook(books) {
  const searchInput = document.querySelector('.search-bar input')
  let searchText = ''
  if (searchInput) {
    searchText = searchInput.value.toLowerCase()
  }
  const result = books.find(
    (book) =>
      book.author.toLowerCase().includes(searchText) ||
      book.title.toLowerCase().includes(searchText)
  )
  if (result) {
    toggleModal(result)
    searchInput.value = ''
  }
  return result
}
