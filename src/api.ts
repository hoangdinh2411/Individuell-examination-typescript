import { Book } from './type'

const API_URL: string =
  'https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books'
export async function fetchingBooks() {
  const res = await fetch(API_URL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  const books: Book[] = await res.json()
  return books
}
