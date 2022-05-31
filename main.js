const canvas = document.querySelector('#canvas')

const ctx = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const i = new v2(1, 0.5)
const j = new v2(-1, 0.5)
const x0 = window.innerWidth / 2
const y0 = 300

const grid = new Grid(i, j, x0, y0)

const w = 50
const l = 50
const h = 50

const margin = 4

const tiles = []
for (let i = 0; i < 5; i++) {
  tiles.push([])
  for (let j = 0; j < 5 - i; j++) {
    tiles[i].push([])
    for (let k = 0; k < 5 - i; k++) {
      tiles[i][j].push(new Tile(
        grid,
        {x: i*(w + margin), y: j*(l + margin), z: +k*(h + margin)},
        w, l, h,
        '#cc00cc', '#00a000', '#2200cc',
        'black', 1.4
      ))
    }
  }
}

for (let i = 0; i < tiles.length; i++) {
  for (let j = 0; j < tiles[i].length; j++) {
    for (let k = 0; k < tiles[i][j].length; k++) {
      tiles[i][j][k].draw(ctx)
    }
    // for (let k = tiles[i][j].length - 1; k >= 0; k--) {
    //   tiles[i][j][k].draw(ctx)
    // }
  }
}