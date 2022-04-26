const contactInputs = document.querySelectorAll('.inputs'),
  contactBtn = document.querySelector('.contact__input-btn'),
  headerButton = document.querySelector('.header__button'),
  headerMenu = document.querySelector('.header__list'),
  headerActive = document.querySelectorAll('.header__link'),
  toTop = document.querySelector('.footer__top');

menuOpened = !1
function menuToggle() {
  menuOpened = !menuOpened
  headerButton.classList.toggle('open')
  headerMenu.classList.toggle('open')
}

headerButton.onclick = menuToggle
window.onclick = function (a) {
  !menuOpened || a.composedPath().includes(headerButton) || a.composedPath().includes(headerMenu) || menuToggle()
}

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    toTop.classList.add('top-active')
  } else {
    toTop.classList.remove('top-active')
  }
})

for (let i = 0; i < headerActive.length; i++) {
  headerActive[i].addEventListener('click', () => {
    headerActive.forEach(item => item.classList.remove('header-active'))
    headerActive[i].classList.add('header-active')
  })
}

contactBtn.onclick = claer = () => contactInputs.forEach(item => item.value = "")