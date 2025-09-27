'use strict'

document.getElementById('pAdd').addEventListener('click', addParagraph)

function addParagraph() {
  let paragraph = document.getElementById('paragraph')
  document.querySelector('.content').textContent += `<p>${paragraph.value}</p>`
  paragraph.value = ''
}

document.getElementById('headAdd').addEventListener('click', addHeading)

function addHeading() {
  let heading = document.getElementById('heading')
  document.querySelector('.content').textContent = document
    .querySelector('.content')
    .textContent.replace('placeholder', heading.value)
  heading.value = ''
}

document.getElementById('subAdd').addEventListener('click', addSubheading)

function addSubheading() {
  let subHeading = document.getElementById('subHeading')
  document.querySelector(
    '.content'
  ).textContent += `<h2>${subHeading.value}</h2>`
  subHeading.value = ''
}
