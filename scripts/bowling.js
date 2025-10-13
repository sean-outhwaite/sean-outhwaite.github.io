//simple game
// function simpleScore(arr){
//  return arr.map((frame)=> frame.reduce((total, current)=> total + current,0)).reduce((total, current)=> total + current,0)
// }
// console.log(simpleScore(frames))

function totalScoreCalc(arr) {
  let total = 0

  arr.forEach((frame, idx) => {
    let frameTotal = calcFrame(frame)

    // Calculates strike/spare points except if final frame
    if (idx !== 9) {
      if (frame[0] === 10) {
        const followingFrames = arr.slice(idx + 1).flat()
        if (followingFrames[0] === 10) {
          frameTotal += 10 + followingFrames[2]
        } else {
          frameTotal += calcFrame(arr[idx + 1])
        }
      } else if (frameTotal === 10) {
        frameTotal += arr[idx + 1][0]
      }
    }
    total += frameTotal
  })
  return total
}

// Returns the sum of a simple frame
function calcFrame(frame) {
  return frame.reduce((total, current) => total + current, 0)
}

document.getElementById('genScore').addEventListener('click', () => {
  let rawInput = document.getElementById('scoreArray').value
  console.log(JSON.stringify(rawInput))
  try {
    let input = JSON.parse(rawInput)
    document.getElementById('output').textContent = totalScoreCalc(input)
  } catch (error) {
    console.log(error)
    document.getElementById('output').textContent =
      'Invalid input! Try entering a matrix!'
  }
})

function frameGenerator() {
  // Fill the first roll of each frame with a random score between 0 & 10
  let arr = Array(10)
    .fill()
    .map(() => [Math.floor(Math.random() * 11)])

  // Set the second roll score for all frames except final
  arr.forEach((frame, idx) => {
    if (frame[0] === 10 && idx !== 9) {
      frame[1] = 0
    } else if (idx !== 9) {
      frame[1] = Math.floor(Math.random() * (11 - frame[0]))
    }
  })

  // Fill final frame
  if (arr[9][0] !== 10) {
    arr[9].push(Math.floor(Math.random() * (11 - arr[9][0])))
  } else {
    arr[9].push(Math.floor(Math.random() * 11))
  }

  if (arr[9][0] === 10 || arr[9][0] + arr[9][1] === 10)
    arr[9].push(Math.floor(Math.random() * 11))
  return arr
}
frameGenerator()

function copyMatrix() {
  const output = JSON.stringify(frameGenerator())
  navigator.clipboard.writeText(output)
}
document.getElementById('genArray').addEventListener('click', copyMatrix)

let invalid = [
  [10, 0],
  [6, 0],
  [7, 1],
  [4, 4],
  [7, 0],
  [8, 2],
  [7, 1],
  [2, 0],
  [6, 1],
  [6, 3],
]

let valid = [
  [4, 3],
  [9, 0],
  [6, 0],
  [0, 3],
  [2, 0],
  [1, 4],
  [0, 0],
  [5, 0],
  [1, 4],
  [6, 2],
]
