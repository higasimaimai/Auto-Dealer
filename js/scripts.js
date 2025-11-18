//nav stuff
const navElement = document.querySelector('#theNav')
const btnElement = document.querySelector('#theButton')

btnElement.addEventListener('click', () => {
    btnElement.classList.toggle('open')
    navElement.classList.toggle('open')
})

//review stuff
import { reviews } from '../data/reviews.js'
console.log(reviews)

const myTarget = document.querySelector("#reviewCards")

for (let x = 0; x < reviews.length; x++) {
    const mySection = document.createElement('section')
    const myName = document.createElement('h3')
    myName.textContent = reviews[x].name

    const myReview = document.createElement('p')
    myReview.textContent = reviews[x].quote

    const myRating = document.createElement('div')

    for (let step = 0; step<reviews[x].stars; step++) {
        const ratingIndicator = document.createElement('img')
        ratingIndicator.src = "../images/star.svg"
        myRating.appendChild(ratingIndicator)
    }

    mySection.appendChild(myName)
    mySection.appendChild(myReview)
    mySection.appendChild(myRating)

    myTarget.appendChild(mySection)
}

//inject current year in footer
const rightNow = new Date();
document.querySelector('#year').textContent = rightNow.getFullYear()