const containerEl = document.querySelector('.container')
const containerThankYouEl = document.querySelector('.container__thank-you')
const submitBtnEl = document.querySelector('.container__submit-btn')
const yourSelectionEl = document.querySelector('.your-selection')
const ratingBtnEl = document.querySelectorAll('.container__rating__btn')

submitBtnEl.addEventListener('click', () => {
    containerThankYouEl.classList.remove('hidden')
    containerEl.style.display = 'none'
})

ratingBtnEl.forEach((rate) => {
    rate.addEventListener('click', () => {
        yourSelectionEl.innerHTML = rate.innerHTML
    })
})