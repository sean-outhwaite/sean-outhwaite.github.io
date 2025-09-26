'use strict'
import * as Tone from 'https://esm.run/tone'
import { blogs } from './blogs.js'

// Play noise and animate swan beak when holding the mouse button down on the swan
const honkNoise = new Tone.Oscillator({
  type: 'sawtooth',
  frequency: 100,
  detune: 200,
  volume: -20,
}).toDestination()

let beaks = document.querySelectorAll('.honk')
function honk() {
  honkNoise.start()
  for (let i = 0; i < beaks.length; i++) {
    beaks[i].classList.toggle('hidden')
  }
}

document.querySelector('.swan').addEventListener('mousedown', honk)
document.querySelector('.swan').addEventListener('touchstart', honk)

window.addEventListener('touchend', function () {
  beaks[0].classList.remove('hidden')
  beaks[1].classList.add('hidden')
  beaks[2].classList.add('hidden')
  honkNoise.stop()
})

window.addEventListener('mouseup', function () {
  beaks[0].classList.remove('hidden')
  beaks[1].classList.add('hidden')
  beaks[2].classList.add('hidden')
  honkNoise.stop()
})

// Create link for the Random button
function getRandomBlog() {
  let blog = blogs[Math.floor(Math.random() * blogs.length)].link
  document.querySelector('.random').href = `/blog/${blog}.html`
}
getRandomBlog()

// Event listener and scroll behaviour for the "View more" banner
document.getElementById('collapsible').addEventListener('click', function () {
  document
    .querySelector('.collapse-section')
    .scrollIntoView({ behavior: 'smooth' })
})

// Fill the areas above and below "View more" with blog previews

function generateBlogPreviews() {
  const top = document.getElementById('aboveFold')
  let aboveFold = blogs.slice(0, 4)
  aboveFold.forEach((blog) => previewConstruct(blog, top))

  const bottom = document.getElementById('belowFold')
  let belowFold = blogs.slice(4)
  belowFold.forEach((blog) => previewConstruct(blog, bottom))
}

// Create the HTML for the blog preview cards
function previewConstruct(blog, location) {
  let link = location.appendChild(document.createElement('a'))
  let div = link.appendChild(document.createElement('div'))

  if (blog.img) {
    div
      .appendChild(document.createElement('img'))
      .setAttribute('src', `/images/${blog.img}`)
  }

  div.appendChild(document.createElement('h4')).textContent = blog.title
  div.appendChild(document.createElement('h5')).textContent = blog.date
  div.appendChild(document.createElement('p')).textContent = blog.blurb

  link.setAttribute('href', `blog/${blog.link}.html`)
  link.classList.add('blog-link')
  div.classList.add('flex-container-vertical', 'blog-preview')
}
generateBlogPreviews()
