import { toggleModal } from './modal'
import { Book } from './type'

export function searchBook(books: Book[]) {
  const searchInput: HTMLInputElement | null =
    document.querySelector('.search-bar input')
  let searchText: string = ''
  if (searchInput) {
    searchText = searchInput.value.toLowerCase()
  }
  const result: Book | undefined = books.find(
    (book: Book) =>
      book.author.toLowerCase().includes(searchText) ||
      book.title.toLowerCase().includes(searchText)
  )

  if (result) {
    toggleModal(result)
    searchInput!.value = ''
  }

  return result
}
