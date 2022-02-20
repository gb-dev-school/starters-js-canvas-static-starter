/*

THIS CODE *IS* SUPPOSED TO BE CHANGED BY THE STUDENT.

Feel free to add new functions and variables, but don't _rename_ these:
* `draw (ctx)`

*/

// const randFloat = () => Math.random()
// const randInt = (i) => Math.round(Math.random() * i)

// const getRandomColor = () => `rgba(${randInt(256)}, ${randInt(256)}, ${randInt(256)}, ${randFloat()})`

const drawBasicTriangle = (ctx, topX, topY, height) => {
  // ctx.fillStyle = getRandomColor()
  ctx.beginPath()
  ctx.moveTo(topX, topY)
  ctx.lineTo(topX - height / 2, topY + height)
  ctx.lineTo(topX + height / 2, topY + height)
  ctx.fill()
}

const drawNegativeTriangle = (ctx, topX, topY, height) => {
  // ctx.fillStyle = getRandomColor()
  ctx.beginPath()
  ctx.moveTo(topX, topY + height)
  ctx.lineTo(topX - height / 4, topY + height / 2)
  ctx.lineTo(topX + height / 4, topY + height / 2)
  ctx.fill()
}

const drawSierpinskiTriangle = (ctx, topX, topY, height, minHeight = 1, maxDepth = Infinity, depth = 0) => {

  drawNegativeTriangle(ctx, topX, topY, height)

  // go deeper, if there's where to go
  if ((height / 2 > minHeight) && (depth + 1 < maxDepth)) {
    // top
    drawSierpinskiTriangle(ctx, topX, topY, height / 2, minHeight, maxDepth, depth+1)
    // left
    drawSierpinskiTriangle(ctx, topX - height / 4, topY + height / 2, height / 2, minHeight, maxDepth, depth+1)
    // right
    drawSierpinskiTriangle(ctx, topX + height / 4, topY + height / 2, height / 2, minHeight, maxDepth, depth+1)
  } else {
    // console.log('stopped', height, depth, (height / 2 > minHeight), (depth + 1 < maxDepth))
  }
}

// actual canvas drawing happens here
function draw (ctx) {
  const triangleSize = Math.min(ctx.canvas.height, ctx.canvas.width)
  ctx.fillStyle = 'black'
  drawBasicTriangle(ctx, ctx.canvas.width / 2, 0, triangleSize)
  ctx.fillStyle = 'white'
  drawSierpinskiTriangle(
    ctx, // drawing context
    ctx.canvas.width / 2, 0, // top triangle vertex
    triangleSize, // triangle size
    // 10, // min size to stop
    // 2, // max depth
  )

}
