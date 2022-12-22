interface Book {
  audience: string
  author: string
  color: string
  id: number
  pages: number
  plot: string
  publisher: string
  title: string
  year: number
}

interface Elements {
  API_URL: string
  booksContainer: HTMLElement | null
  modal: HTMLElement | null
  back_icon: HTMLElement | null
  modal_overlay: HTMLElement | null
}
export { Book, Elements }
