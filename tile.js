class Tile {
  constructor(grid, c, a, w, l, h, co1, co2, co3, co4, borderW) {
    this.grid = grid
    this.c = c // v3, of center position info
    this.a = a // v3, of rotation info
    this.w = w
    this.l = l
    this.h = h
    this.co1 = co1
    this.co2 = co2
    this.co3 = co3
    this.co4 = co4
    this.borderW = borderW

    this.update()
  }

  update() {
    this.updateVertices()
    this.updateGridVertices()
  }

  updateVertices() {
    this.vertices = [
      new v3(this.c.x, this.c.y, this.c.z),
      new v3(this.c.x + this.w, this.c.y, this.c.z),
      new v3(this.c.x + this.w, this.c.y + this.l, this.c.z),
      new v3(this.c.x, this.c.y + this.l, this.c.z),
      new v3(this.c.x, this.c.y, this.c.z + this.h),
      new v3(this.c.x + this.w, this.c.y, this.c.z + this.h),
      new v3(this.c.x + this.w, this.c.y + this.l, this.c.z + this.h),
      new v3(this.c.x, this.c.y + this.l, this.c.z + this.h),
    ]
  }

  updateGridVertices() {
    this.gridVertices = this.vertices.map((v) =>
      this.grid.toScreen(v)
    )
  }

  draw(ctx) {
    ctx.strokeStyle = this.co4;
    ctx.lineWidth = this.borderW;
    const stroke = this.borderW > 0 ? true : false

    this.drawFace([5,1,2,6], this.co3, stroke)
    this.drawFace([6,2,3,7], this.co2, stroke)
    this.drawFace([4,5,6,7], this.co1, stroke)
  }

  drawFace(vArr, fillStyle, stroke) {
    ctx.beginPath()
    ctx.fillStyle = fillStyle
    moveToV(ctx, this.gridVertices[vArr[0]])
    for (let i = 0; i < vArr.length; i++) {
      lineToV(ctx, this.gridVertices[vArr[i]])
    }
    lineToV(ctx, this.gridVertices[vArr[0]])
    ctx.fill()
    if ( stroke ) ctx.stroke()
  }
}


function moveToV(ctx, v) {
  ctx.moveTo(v.x, v.y)
}
function lineToV(ctx, v) {
  ctx.lineTo(v.x, v.y)
}