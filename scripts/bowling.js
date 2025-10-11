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
        frameTotal += frames[idx + 1][0]
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

document.getElementById('copy').addEventListener('click', () => {
  try {
    let input = JSON.parse(document.getElementById('scoreArray').value)
    document.getElementById('output').textContent = totalScoreCalc(input)
  } catch (error) {
    document.getElementById('output').textContent =
      'Invalid input! Try entering a matrix!'
  }
})
