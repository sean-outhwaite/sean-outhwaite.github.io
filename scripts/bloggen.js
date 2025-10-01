'use strict'
// Todo: format date, add styling to section button, refactor and remove all of the old form code, try and get the output to separate <p> tags

const topPreview = document.querySelector('.topPreview')
const bottomPreview = document.querySelector('.bottomPreview')
const preview = document.querySelector('.preview')

let blog = {
  head: `<!DOCTYPE html>
<html>
  <head>
    <title>placeholder</title>
    <meta charset="UTF-8" />
    <link
      rel="icon"
      href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🦢</text></svg>"
    />
    <link href="../styles/main.css" rel="stylesheet" type="text/css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
      rel="stylesheet"
    />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>

  <body>
  <a id="homeAnchor" href="../index.html"> <button id="home">Home</button></a>
    <main class="container">`,
  title: '',
  subHead: '',
  blogDate: '',
  foot: `
  </main>
    <footer>
      <a href="https://github.com/sean-outhwaite"
        ><img class="gitLogo" src="/images/github-mark.png"
      /></a>
    </footer>
    <script type="module" src="/scripts/script.js"></script>
  </body>
</html>`,
  innerContent: '',
  topContent: '',
}

// Event handlers and functions for the unique elements (main heading, date, etc)
document.getElementById('headAdd').addEventListener('click', addHeading)

function addHeading() {
  let heading = document.getElementById('heading')
  blog.title = `
    <div class="flex-container-nav">
      <a id="previous"> <button id="prevBtn" class="nav">Previous</button></a>
      <h1>Blog Title</h1>
      <a id="next"><button id="nextBtn" class="nav">Next</button></a>
    </div>`

  blog.head = blog.head.replace(
    /(?<=<title>)(.*?)(?=\s?<\/title>)/,
    heading.value
  )

  heading.value = ''
  generateTop()
}
addHeading()

document.getElementById('subAdd').addEventListener('click', addSubheading)

function addSubheading() {
  let subHeading = document.getElementById('subHeading')
  blog.subHead = `
  <h2>Subheading</h2>`
  subHeading.value = ''
  generateTop()
}
addSubheading()

document.getElementById('dateAdd').addEventListener('click', addDate)

function addDate() {
  let date = document.getElementById('date')
  blog.blogDate = `
  <h3>${Date()}</h3>`
  date.value = ''
  generateTop()
}
addDate()

function generateTop() {
  let top = blog.title + blog.subHead + blog.blogDate
  blog.topContent = top
  makePreview()
  makeOutput()
}
generateTop()
// Event handlers and functions for the non unique elements (paragraphs & section headings)
document.getElementById('secAdd').addEventListener('click', addSecheading)

function addSecheading() {
  let secHeading = document.getElementById('secHeading')
  let secContent = `
  <h4>New section</h4>
  <p>Write content here</p>`
  blog.innerContent += secContent
  secHeading.value = ''
  makePreview()
  makeOutput()
}

document.getElementById('pAdd').addEventListener('click', addParagraph)

function addParagraph() {
  let paragraph = document.getElementById('paragraph')
  let pContent = `
  <p>${paragraph.value}</p>`
  blog.innerContent += pContent
  paragraph.value = ''
  makePreview()
  makeOutput()
}

// Build and display the preview + HTML output
function makeOutput() {
  let content = blog.head + blog.topContent + blog.innerContent + blog.foot
  document.querySelector('.output').value = content
}
makeOutput()

function makePreview() {
  topPreview.innerHTML = blog.topContent
  bottomPreview.innerHTML = blog.innerContent
  preview.classList.remove('hidden')
}
makePreview()

// Enables copying the output with a single click
function copyOutput() {
  const output = document.querySelector('.output').value
  navigator.clipboard.writeText(output)
}
document.getElementById('copy').addEventListener('click', copyOutput)

// Takes any edits made to the preview and saves them back to the content in the object, updates the output HTML
function editPreview() {
  blog.topContent = document.querySelector('.topPreview').innerHTML
  blog.innerContent = document.querySelector('.bottomPreview').innerHTML
  makeOutput()
}

preview.addEventListener('focusout', editPreview)
