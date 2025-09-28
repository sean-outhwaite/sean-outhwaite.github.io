'use strict'

const content = document.querySelector('.content')
const preview = document.querySelector('.preview')

document.getElementById('pAdd').addEventListener('click', addParagraph)

function addParagraph() {
  let paragraph = document.getElementById('paragraph')
  content.textContent += `
  <p>${paragraph.value}</p>`
  preview.innerHTML += `
  <p>${paragraph.value}</p>`
  paragraph.value = ''
}

document.getElementById('headAdd').addEventListener('click', addHeading)

function addHeading() {
  let heading = document.getElementById('heading')
  document.querySelector('.content').textContent += `
    <div class="flex-container-nav">
      <a id="previous"> <button id="prevBtn" class="nav">Previous</button></a>
      <h1>${heading.value}</h1>
      <a id="next"><button id="nextBtn" class="nav">Next</button></a>
    </div>`
  preview.innerHTML += `
    <div class="flex-container-nav">
      <a id="previous"> <button id="prevBtn" class="nav">Previous</button></a>
      <h1>${heading.value}</h1>
      <a id="next"><button id="nextBtn" class="nav">Next</button></a>
    </div>`
  heading.value = ''
}

document.getElementById('subAdd').addEventListener('click', addSubheading)

function addSubheading() {
  let subHeading = document.getElementById('subHeading')
  content.textContent += `
  <h2>${subHeading.value}</h2>`
  preview.innerHTML += `
  <h2>${subHeading.value}</h2>`
  subHeading.value = ''
}

document.getElementById('secAdd').addEventListener('click', addSecheading)

function addSecheading() {
  let secHeading = document.getElementById('secHeading')
  content.textContent += `
  <h4>${secHeading.value}</h4>`
  preview.innerHTML += `
  <h4>${secHeading.value}</h4>`
  secHeading.value = ''
}

document.getElementById('dateAdd').addEventListener('click', addDate)

function addDate() {
  let date = document.getElementById('date')
  content.textContent += `
  <h3>${date.value}</h3>`
  preview.innerHTML += `
  <h3>${date.value}</h3>`
  date.value = ''
}
