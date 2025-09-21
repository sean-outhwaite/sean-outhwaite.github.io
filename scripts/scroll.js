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
