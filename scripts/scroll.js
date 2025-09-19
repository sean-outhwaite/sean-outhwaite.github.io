'use strict'
import * as Tone from 'https://esm.run/tone'

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

// document.addEventListener('mouseup', function () {
//   if ()
//   for (let i = 0; i < beaks.length; i++) {
//       beaks[i].classList.toggle('hidden')
//     }
//   })

window.addEventListener('mouseup', function () {
  beaks[0].classList.remove('hidden')
  beaks[1].classList.add('hidden')
  beaks[2].classList.add('hidden')
  honkNoise.stop()
})
