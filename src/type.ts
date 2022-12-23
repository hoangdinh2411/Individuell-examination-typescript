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

type Entry<T> = {
  [K in keyof T]: [K, T[K]]
}[keyof T]
export { Book, Entry }
