class Tile {
  constructor(grid, v0, w, l, h, c1, c2, c3, c4, lineW) {
    this.grid = grid
    this.v0 = v0
    this.w = w
    this.l = l
    this.h = h
    this.c1 = c1
    this.c2 = c2
    this.c3 = c3
    this.c4 = c4
    this.lineW = lineW

    this.vertices = [
      new v3(v0.x, v0.y, v0.z),
      new v3(v0.x + w, v0.y, v0.z),
      new v3(v0.x + w, v0.y + l, v0.z),
      new v3(v0.x, v0.y + l, v0.z),
      new v3(v0.x, v0.y, v0.z + h),
      new v3(v0.x + w, v0.y, v0.z + h),
      new v3(v0.x + w, v0.y + l, v0.z + h),
      new v3(v0.x, v0.y + l, v0.z + h),
    ]

    this.gridVertices = this.vertices.map((v) =>
      this.grid.toScreen(v)
    )
  }

  draw(ctx) {
    const gs = this.gridVertices
    ctx.beginPath()
    ctx.fillStyle = this.c3;
    moveToV(ctx, gs[5])
    lineToV(ctx, gs[1])
    lineToV(ctx, gs[2])
    lineToV(ctx, gs[6])
    ctx.fill()
  
    ctx.beginPath()
    ctx.fillStyle = this.c2;
    moveToV(ctx, gs[6])
    lineToV(ctx, gs[2])
    lineToV(ctx, gs[3])
    lineToV(ctx, gs[7])
    ctx.fill()
  
    ctx.beginPath()
    ctx.fillStyle = this.c1;
    moveToV(ctx, gs[4])
    lineToV(ctx, gs[5])
    lineToV(ctx, gs[6])
    lineToV(ctx, gs[7])
    ctx.fill()
  
    ctx.strokeStyle = this.c4;
    ctx.lineWidth = this.lineW;
  
    ctx.beginPath()
    moveToV(ctx, gs[5])
    lineToV(ctx, gs[1])
    lineToV(ctx, gs[2])
    lineToV(ctx, gs[6])
    lineToV(ctx, gs[5])
    ctx.stroke()
  
    ctx.beginPath()
    moveToV(ctx, gs[6])
    lineToV(ctx, gs[2])
    lineToV(ctx, gs[3])
    lineToV(ctx, gs[7])
    lineToV(ctx, gs[6])
    ctx.stroke()
  
    ctx.beginPath()
    moveToV(ctx, gs[4])
    lineToV(ctx, gs[5])
    lineToV(ctx, gs[6])
    lineToV(ctx, gs[7])
    lineToV(ctx, gs[4])
    ctx.stroke()
  }

}


function moveToV(ctx, v) {
  ctx.moveTo(v.x, v.y)
}
function lineToV(ctx, v) {
  ctx.lineTo(v.x, v.y)
}


class v2 {
  constructor(x,y) {
    this.x = x
    this.y = y
  }
}
class v3 {
  constructor(x,y,z) {
    this.x = x
    this.y = y
    this.z = z
  }
}