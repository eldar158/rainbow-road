const canvas = document.querySelector('#canvas')

const ctx = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const i = new v2(1, 0.5)
const j = new v2(-1, 0.5)
const x0 = window.innerWidth / 2
const y0 = 100

const grid = new Grid(i, j, x0, y0)

const w = 50
const l = 50
const h = 50

const margin = 4

const tiles = []
for (let i = 0; i < 5; i++) {
  tiles.push([])
  for (let j = 0; j < 5; j++) {
    
    tiles[i].push(new Tile(
      grid,
      {x: i*(w + margin), y: j*(l + margin), z: 0},
      w, l, h,
      '#cc00cc', 'green', '#2200aa',
      'black', 1
    ))
  }
}

for (let i = 0; i < tiles.length; i++) {
  for (let j = 0; j < tiles[i].length; j++) {
    tiles[i][j].draw(ctx)
  }
}