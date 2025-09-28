'use strict'
// Todo: allow editing paragraphs and sections after adding, improve styling, DRY

// Could store headings and paragraphs in the object, allow clicking on the content to enable editing
// Generate the bottom content the same way as the top content

const bottomContent = document.querySelector('.bottomContent')
const bottomPreview = document.querySelector('.bottomPreview')
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
  bottomContent.textContent += `
  <h4>${secHeading.value}</h4>`
  bottomPreview.innerHTML += `
  <h4>${secHeading.value}</h4>`
  secHeading.value = ''
  preview.classList.remove('hidden')
}

document.getElementById('pAdd').addEventListener('click', addParagraph)

function addParagraph() {
  let paragraph = document.getElementById('paragraph')
  bottomContent.textContent += `
  <p>${paragraph.value}</p>`
  bottomPreview.innerHTML += `<p>${paragraph.value}</p>
  `
  paragraph.value = ''
  preview.classList.remove('hidden')
}
