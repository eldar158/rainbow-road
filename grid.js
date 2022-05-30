class Grid {
  constructor(i, j, x0, y0) {
    this.i = i
    this.j = j
    this.x0 = x0
    this.y0 = y0
  }

  toScreen(p) {
    return {
      x: this.x0 + p.x * this.i.x + p.y * this.j.x,
      y: this.y0 + p.x * this.i.y + p.y * this.j.y - p.z,
    }
  }
}