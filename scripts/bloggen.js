'use strict'

document.getElementById('pAdd').addEventListener('click', addParagraph)

function addParagraph() {
  let paragraph = document.getElementById('paragraph')
  document.querySelector('.content').textContent += `
  <p>${paragraph.value}</p>`
  paragraph.value = ''
}

document.getElementById('headAdd').addEventListener('click', addHeading)

function addHeading() {
  let heading = document.getElementById('heading')
  document.querySelector(
    '.content'
  ).textContent += `<a id="homeAnchor" href="../index.html"> <button id="home">Home</button></a>
  <main class="container">
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
  document.querySelector('.content').textContent += `
  <h2>${subHeading.value}</h2>`
  subHeading.value = ''
}

document.getElementById('secAdd').addEventListener('click', addSecheading)

function addSecheading() {
  let secHeading = document.getElementById('secHeading')
  document.querySelector('.content').textContent += `
  <h4>${sucHeading.value}</h4>`
  secHeading.value = ''
}

document.getElementById('dateAdd').addEventListener('click', addDate)

function addDate() {
  let date = document.getElementById('date')
  document.querySelector('.content').textContent += `
  <h3>${date.value}</h3>`
  date.value = ''
}
