/*

This code is a boilerplate not supposed to be changed by the student.
It's okay if you don't understand this code!
All the task-related code is placed in `payload.js` file, which should be loaded first.

This code assumes these names to be already defined:
* `draw (ctx)` — the function to draw something on the canvas

*/

function _setCanvasSize (canvas) {
    // there are HDR screens, like Retina
    // which means, a DOM logical pixel may represent more than one physical screen pixel
    // for best experience, canvas size should match physical pixels
    canvas.width = canvas.clientWidth * window.devicePixelRatio
    canvas.height = canvas.clientHeight * window.devicePixelRatio
}

function initCanvas (canvas) {
    _setCanvasSize(canvas)
    return canvas.getContext('2d')
}

const canvas = document.getElementById('theCanvas')
const ctx = initCanvas(canvas)

draw (ctx)
