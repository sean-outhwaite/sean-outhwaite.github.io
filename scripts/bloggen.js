'use strict'
// Todo: allow editing paragraphs and sections after adding, improve styling, DRY

// Could store headings and paragraphs in the object, allow clicking on the content to enable editing
// Generate the bottom content the same way as the top content
// Make the content element a textbox?

const bottomContent = document.querySelector('.bottomContent')
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

  blog.head = blog.head.replace(
    /(?<=<title>)(.*?)(?=\s?<\/title>)/,
    heading.value
  )

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
  blog.blogDate = `
  <h3>${date.value}</h3>`
  date.value = ''
  generateTop()
}

function generateTop() {
  let top = blog.title + blog.subHead + blog.blogDate
  document.querySelector('.topPreview').innerHTML = top
  preview.classList.remove('hidden')
  makeContent()
}

document.getElementById('secAdd').addEventListener('click', addSecheading)

function addSecheading() {
  let secHeading = document.getElementById('secHeading')
  let secContent = `
  <h4>${secHeading.value}</h4>`
  bottomPreview.innerHTML += secContent
  blog.innerContent += secContent
  secHeading.value = ''
  preview.classList.remove('hidden')
  makeContent()
}

document.getElementById('pAdd').addEventListener('click', addParagraph)

function addParagraph() {
  let paragraph = document.getElementById('paragraph')
  let pContent = `
  <p>${paragraph.value}</p>`
  bottomPreview.innerHTML += pContent
  blog.innerContent += pContent
  paragraph.value = ''
  preview.classList.remove('hidden')
  makeContent()
}

function makeContent() {
  let content =
    blog.head + blog.title + blog.blogDate + blog.innerContent + blog.foot
  document.querySelector('.test').value = content
}
