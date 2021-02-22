
class Graph {
    constructor(canvasID) {
        this.canvas = document.getElementById(canvasID)
        this.canvas.width = 500
        this.canvas.height = 500
        this.ctx = this.canvas.getContext('2d')
        this.coord = { x: this.canvas.width / 2, y: this.canvas.height / 2 }
    }
    divideIntoTen(num) {
        let tempArr = []
        for (let i = num / 10; i < num; i += num / 10) {
            tempArr.push(i)
        }
        return tempArr
    }
    drawGrid() {
        this.xAxis = this.divideIntoTen(this.canvas.width)
        this.yAxis = this.divideIntoTen(this.canvas.height)
        this.ctx.beginPath()
        this.ctx.lineWidth = 0.8
        for (let i of this.xAxis) {
            this.ctx.moveTo(i, 0)
            this.ctx.lineTo(i, this.canvas.height)
        }
        for (let i of this.yAxis) {
            this.ctx.moveTo(0, i)
            this.ctx.lineTo(this.canvas.width, i)
        }
        this.ctx.stroke()
    }
    drawAxes() {
        this.ctx.beginPath()
        this.ctx.lineWidth = 3
        this.ctx.moveTo(this.coord.x, 0)
        this.ctx.lineTo(this.coord.x, this.canvas.height)
        this.ctx.moveTo(0, this.coord.y)
        this.ctx.lineTo(this.canvas.width, this.coord.y)
        this.ctx.stroke()
    }
    drawNumbers() {
        for (let x = (this.canvas.width / 10); x < this.canvas.width; x += (this.canvas.width / 10)) {
            if (x !== this.coord.x) {
                this.ctx.font = "15px Arial"
                this.ctx.fillText((x - this.coord.x), x - 10, this.coord.y + 15)
            }
        }
        for (let y = (this.canvas.height / 10); y < this.canvas.height; y += (this.canvas.height / 10)) {
            if (y !== this.coord.y) {
                this.ctx.font = "15px Arial"
                this.ctx.fillText(((this.canvas.height - y) - this.coord.y), this.coord.x - 25, y + 5)
            }
        }
    }
    drawFunction(realA, realB) {
        let y = 0
        let a = -realA
        let b = realB + this.canvas.height
        this.ctx.beginPath()
        this.ctx.lineWidth = 3
        this.ctx.moveTo(0, b)
        for (let x = (0 - this.coord.x); x < ((this.canvas.width + this.canvas.width / 10) - this.coord.x); x += this.canvas.width / 10) {
            y = (a * x + b)
            this.ctx.lineTo(x + this.coord.x, y - this.coord.y - realB * 2)
        }
        this.ctx.stroke()
    }
    clear() {
        this.ctx.beginPath()
        this.ctx.fillStyle = "white"
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
        this.ctx.fillStyle = "black"
        this.ctx.stroke()
    }
    init() {
        this.clear()
        this.drawGrid()
        this.drawAxes()
        this.drawNumbers()
    }
}

let g = new Graph('theCanvas')
let funcA = document.getElementById('funcA')
let funcB = document.getElementById('funcB')

g.init()

document.getElementById('getFunc').addEventListener('click', () => {
    g.init()
    let a = funcA.value
    let b = funcB.value
    if (a.includes(',')) a.replace(',', '.')
    if (b.includes(',')) b.replace(',', '.')
    a = parseFloat(a)
    b = parseFloat(b)
    if (!a) a = 0
    if (!b) b = 0
    g.drawFunction(a, b)
})

function displayFunc() {
    let a = funcA.value
    let b = funcB.value
    if (!a) a = 0
    if (!b) b = 0
    if (funcB.value[0] !== '-') b = '+ ' + b
    document.getElementById('theFunc').innerHTML = `Funktionen: ${a}X ${b}`
}
displayFunc()

funcA.addEventListener('change', displayFunc)
funcB.addEventListener('change', displayFunc)