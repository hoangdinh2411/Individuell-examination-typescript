import { displayBookDetail } from './book.js'
const modal = document.querySelector('.modal')
const back_icon = document.querySelector('.back-icon')
const modal_overlay = document.querySelector('.modal__overlay')
export function closeModal() {
  modal === null || modal === void 0 ? void 0 : modal.classList.remove('active')
}
export function openModal() {
  modal === null || modal === void 0 ? void 0 : modal.classList.add('active')
}
export function toggleModal(book) {
  openModal()
  displayBookDetail(book)
  setCloseModalEventForElements()
}
export function setCloseModalEventForElements() {
  back_icon === null || back_icon === void 0
    ? void 0
    : back_icon.addEventListener('click', closeModal)
  modal_overlay === null || modal_overlay === void 0
    ? void 0
    : modal_overlay.addEventListener('click', closeModal)
}
