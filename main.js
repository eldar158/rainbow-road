const canvas = document.querySelector('#canvas')

const ctx = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const i = new v2(1, 0.5)
const j = new v2(-1, 0.5)
const x0 = window.innerWidth / 2
const y0 = 150

const grid = new Grid(i, j, x0, y0)

const w = 25
const l = 25
const h = 25

const margin = 3
const borderW = 0.2

const tiles = []
for (let i = 0; i < 15; i++) {
  tiles.push([])
  for (let j = 0; j < 15; j++) {
    tiles[i].push([])
    for (let k = 0; k < 1; k++) {
      const iPart = i / tiles.length // -1 ???
      const jPart = j / tiles[i].length
      const co1 = `rgb(
        ${Math.random() * 255},
        ${Math.random() * 255},
        ${Math.random() * 255}
      )`
      const co2 = co1
      const co3 = co1
      tiles[i][j].push(new Tile(
        grid,
        {x: i*(w + margin), y: j*(l + margin), z: k*(h + margin)},
        {x: 0, y: 0, z: 0},
        w, l, h,
        // '#cc00cc', '#00a000', '#2200cc',
        co1, co2, co3,
        'black', borderW
      ))
    }
  }
}

const fases = tiles.map((sheet, i) => {
  return sheet.map((row, j) => {
    const iPart = i / tiles.length
    const jPart = j / tiles[i].length
    return  iPart + jPart + ((Math.random() - 0.5) * 2 / 3)
  })
})
animate()

function animate(time=0) {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  for (let i = 0; i < tiles.length; i++) {
    for (let j = 0; j < tiles[i].length; j++) {
      for (let k = 0; k < tiles[i][j].length; k++) {
        const tile = tiles[i][j][k]
        tile.c.z = (
          Math.sin(((time / 1000) + fases[i][j]) * Math.PI / 2) * 20 +
          k * (h + margin)
        )
        tile.update()
        tile.draw(ctx)
      }
      // for (let k = tiles[i][j].length - 1; k >= 0; k--) {
      //   tiles[i][j][k].draw(ctx)
      // }
    }
  }
  
  requestAnimationFrame((time) => { animate(time) })
}


