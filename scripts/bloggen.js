'use strict'
// Todo: allow editing elements after adding, improve styling, DRY, always put main sub and date at the top
const content = document.querySelector('.bottomContent')
const preview = document.querySelector('.preview')
let blog = {
  title: '',
  subHead: '',
  blogDate: '',
}

document.getElementById('headAdd').addEventListener('click', addHeading)

function addHeading() {
  let heading = document.getElementById('heading')
  blog.title = `
    <div class="flex-container-nav">
      <a id="previous"> <button id="prevBtn" class="nav">Previous</button></a>
      <h1>${heading.value}</h1>
      <a id="next"><button id="nextBtn" class="nav">Next</button></a>
    </div>`
  heading.value = ''
  generateTop()
}

document.getElementById('subAdd').addEventListener('click', addSubheading)

function addSubheading() {
  let subHeading = document.getElementById('subHeading')
  blog.subHead = `
  <h2>${subHeading.value}</h2>`
  subHeading.value = ''
  generateTop()
}

document.getElementById('dateAdd').addEventListener('click', addDate)

function addDate() {
  let date = document.getElementById('date')
  blog.blogDate += `
  <h3>${date.value}</h3>`
  date.value = ''
  generateTop()
}

function generateTop() {
  let top = blog.title + blog.subHead + blog.blogDate
  document.querySelector('.topContent').textContent = top
  document.querySelector('.topPreview').innerHTML = top
  preview.classList.remove('hidden')
}

document.getElementById('secAdd').addEventListener('click', addSecheading)

function addSecheading() {
  let secHeading = document.getElementById('secHeading')
  content.textContent += `
  <h4>${secHeading.value}</h4>`
  document.querySelector('.bottomPreview').innerHTML += `
  <h4>${secHeading.value}</h4>`
  secHeading.value = ''
  preview.classList.remove('hidden')
}

document.getElementById('pAdd').addEventListener('click', addParagraph)

function addParagraph() {
  let paragraph = document.getElementById('paragraph')
  content.textContent += `
  <p>${paragraph.value}</p>`
  document.querySelector(
    '.bottomPreview'
  ).innerHTML += `<p>${paragraph.value}</p>
  `
  paragraph.value = ''
  preview.classList.remove('hidden')
}
