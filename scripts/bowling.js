// Score 64 (simple game):
// const frames = [
//   [2, 0], [4, 2], [6, 0], [2, 4], [1, 5], [7, 0], [5, 2], [7, 0], [2, 6], [8, 1]
// ]
// // Score 71 (with spares):
// const frames = [
//   [6, 1], [4, 0], [6, 4], [2, 7], [3, 5], [5, 0], [5, 5], [0, 0], [1, 6], [7, 2]
// ]
// Score 104 (with spares and strikes):
// const frames = [
//   [6, 4], [8, 0], [10, 0], [2, 7], [5, 5], [4, 0], [10, 0], [2, 1], [2, 6], [4, 4]
// ]
//
// Score 119 (with spares, strikes and a double strike):
// const frames = [
//   [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [4, 4]
// ]
//
// Score 141 (includes a strike on the last frame):
// const frames = [
//   [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [10, 10, 10]
// ]
//
// Score 300 (perfect game):
const frames = [
  [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 10, 10]
]

//simple game
// function simpleScore(arr){
//  return arr.map((frame)=> frame.reduce((total, current)=> total + current,0)).reduce((total, current)=> total + current,0)
// }
// console.log(simpleScore(frames))

function totalScoreCalc(arr){
  let total = 0

  arr.forEach((frame, idx)=>{
    let frameTotal = calcFrame(frame)

    // Calculates strike/spare points except if final frame
    if (idx !== 9){
    if (frame[0] === 10){
      const followingFrames = arr.slice(idx+1).flat()
      if (followingFrames[0] === 10){
        frameTotal += (10 + followingFrames[2])
      }else {
      frameTotal += calcFrame(arr[idx + 1])
      }
    }
    else if(frameTotal === 10){
      frameTotal += frames[idx + 1][0]
    } 
  }
  total += frameTotal
})
  return total
}
console.log(totalScoreCalc(frames))

// Returns the sum of a simple frame
function calcFrame(frame){
  return frame.reduce((total, current)=> total + current,0)
}