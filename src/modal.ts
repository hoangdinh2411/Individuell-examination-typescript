import { displayBookDetail } from './book'
import { Book } from './type'

const modal: HTMLElement | null = document.querySelector('.modal')
const back_icon: HTMLElement | null = document.querySelector('.back-icon')
const modal_overlay: HTMLElement | null =
  document.querySelector('.modal__overlay')
export function closeModal() {
  modal?.classList.remove('active')
}
export function openModal() {
  modal?.classList.add('active')
}

export function toggleModal(book: Book) {
  openModal()
  displayBookDetail(book)
  setCloseModalEventForElements()
}

export function setCloseModalEventForElements() {
  back_icon?.addEventListener('click', closeModal)
  modal_overlay?.addEventListener('click', closeModal)
}
