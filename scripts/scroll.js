'use strict'
import * as Tone from 'https://esm.run/tone'
// Todo abstract this list somewhere else as it's used in both JS files
const blogs = [
  'te-houtaewa-template',
  'html-css',
  'identity-values',
  'learning-plan',
  'emotional-intelligence',
  'javascript-dom',
  'neuroplasticity',
  'te-whare-tapa-wha',
  'problem-solving',
  'foundations-reflections',
]

const honkNoise = new Tone.Oscillator({
  type: 'sawtooth',
  frequency: 100,
  detune: 200,
  volume: -20,
}).toDestination()

document.getElementById('collapsible').addEventListener('click', function () {
  document
    .querySelector('.collapse-section')
    .scrollIntoView({ behavior: 'smooth' })
})

let beaks = document.querySelectorAll('.honk')
function honk() {
  honkNoise.start()
  for (let i = 0; i < beaks.length; i++) {
    beaks[i].classList.toggle('hidden')
  }
}

document.querySelector('.swan').addEventListener('mousedown', honk)

window.addEventListener('mouseup', function () {
  beaks[0].classList.remove('hidden')
  beaks[1].classList.add('hidden')
  beaks[2].classList.add('hidden')
  honkNoise.stop()
})

function getRandomBlog() {
  let blog = blogs[Math.floor(Math.random() * blogs.length)]
  document.querySelector('.random').href = `/blog/${blog}.html`
}
getRandomBlog()

let blogObj = [
  {
    title: 'Foundations Reflections',
    date: '23 Sep 2025',
    blurb: 'Reflections',
    link: 'foundations-reflections',
  },
  {
    title: 'No Problem.',
    date: '16 Sep 2025',
    blurb: 'Adventures in Slaying Dragons & Squashing Bugs.',
    link: 'problem-solving',
    img: 'jumble.png',
  },
  {
    title: 'Te Whare Tapa Whā.',
    date: '15 Sep 2025',
    blurb: 'My wellbeing plan.',
    link: 'te-whare-tapa-wha',
    img: 'te-whare-tapa-wha.png',
  },
  {
    title: 'Mind, Set, Match',
    date: '15 Sep 2025',
    blurb: 'Neuroplasticity and Growth Mindset musings.',
    link: 'neuroplasticity',
  },
  {
    title: 'JavaScripting',
    date: '10 Sep 2025',
    blurb: 'An introduction to fundamental JavaScript concepts.',
    link: 'javascript-dom',
    img: 'functionExample.png',
  },
  {
    title: 'Emotional Intelligence',
    date: '08 Sep 2025',
    blurb: 'What is EQ and how does it differ to IQ?',
    link: 'emotional-intelligence',
  },
  {
    title: 'Learning Plan',
    date: '03 Sep 2025',
    blurb: 'My plan for success at Dev Academy',
    link: 'learning-plan',
  },
  {
    title: 'Identity & Values',
    date: '03 Sep 2025',
    blurb: 'A bit about me.',
    link: 'identity-values',
    img: 'snow.jpg',
  },
  {
    title: 'CSS Positioning',
    date: '03 Sep 2025',
    blurb: 'Learn about the CSS position property.',
    link: 'html-css',
    img: 'absolute.png',
  },
  {
    title: 'Stories & Legends',
    date: '03 Sep 2025',
    blurb: 'The Story of Te Houtaewa.',
    link: 'te-houtaewa-template',
  },
]

{
  /* <a class="blog-link" href=`blog/${this.link}`>
          <div class="flex-container-vertical blog-preview">
            <img src=`/images/${this.img}` />
            <h4>this.title</h4>
            <h5>this.date</h5>
            <p>this.blurb</p>
          </div>
        </a> */
}

function generateBlogPreviews() {
  const top = document.getElementById('aboveFold')
  let aboveFold = blogObj.slice(0, 4)
  aboveFold.forEach((blog) => previewConstruct(blog, top))

  const bottom = document.getElementById('belowFold')
  let belowFold = blogObj.slice(4)
  belowFold.forEach((blog) => previewConstruct(blog, bottom))
}

function previewConstruct(blog, location) {
  let link = location.appendChild(document.createElement('a'))
  let div = link.appendChild(document.createElement('div'))

  if (blog.img) {
    let img = div.appendChild(document.createElement('img'))
    img.setAttribute('src', `/images/${blog.img}`)
  }

  let h4 = div.appendChild(document.createElement('h4'))
  let h5 = div.appendChild(document.createElement('h5'))
  let p = div.appendChild(document.createElement('p'))

  link.setAttribute('href', `blog/${blog.link}.html`)
  link.classList.add('blog-link')
  div.classList.add('flex-container-vertical', 'blog-preview')

  h4.textContent = blog.title
  h5.textContent = blog.date
  p.textContent = blog.blurb
}
generateBlogPreviews()
