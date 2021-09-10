const dropdownButtons = document.querySelectorAll('.dropdown__header')
const dropdownElements = document.querySelectorAll('.dropdown__body')

const copyrightYear = document.querySelector('.footer__year')
const date = new Date()
let year = date.getFullYear()


const dropdown = () => {
  for(let btn of dropdownButtons) {
    btn.addEventListener('click', () => {
      let dropdownParent = btn.closest('article')
      let dropdownElement = dropdownParent.querySelector('.dropdown__body')
      let arrow = btn.querySelector('span')

      if(dropdownElement.className.includes('show')) {
        dropdownElement.classList.remove('show')
        arrow.classList.remove('rotate')
        btn.classList.remove('active')
      } else {
        dropdownElement.classList.add('show')
        arrow.classList.add('rotate')
        btn.classList.add('active')
      }
    })
  }
}

const setCopyrightYear = (year) => {
  copyrightYear.innerText = year
}



dropdown()
setCopyrightYear(year)