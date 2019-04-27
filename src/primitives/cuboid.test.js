const test = require('ava')

const geom3 = require('../geometry/geom3')

const {cuboid} = require('./index')

const comparePolygonsAsPoints = require('../../test/helpers/comparePolygonsAsPoints')

test('cuboid (defaults)', t => {
  const obs = cuboid()
  const pts = geom3.toPoints(obs)
  const exp = [
    [[-1.0000000, -1.0000000, -1.0000000],
     [-1.0000000, -1.0000000, 1.0000000],
     [-1.0000000, 1.0000000, 1.0000000],
     [-1.0000000, 1.0000000, -1.0000000], ],
    [[1.0000000, -1.0000000, -1.0000000],
     [1.0000000, 1.0000000, -1.0000000],
     [1.0000000, 1.0000000, 1.0000000],
     [1.0000000, -1.0000000, 1.0000000], ],
    [[-1.0000000, -1.0000000, -1.0000000],
     [1.0000000, -1.0000000, -1.0000000],
     [1.0000000, -1.0000000, 1.0000000],
     [-1.0000000, -1.0000000, 1.0000000], ],
    [[-1.0000000, 1.0000000, -1.0000000],
     [-1.0000000, 1.0000000, 1.0000000],
     [1.0000000, 1.0000000, 1.0000000],
     [1.0000000, 1.0000000, -1.0000000], ],
    [[-1.0000000, -1.0000000, -1.0000000],
     [-1.0000000, 1.0000000, -1.0000000],
     [1.0000000, 1.0000000, -1.0000000],
     [1.0000000, -1.0000000, -1.0000000], ],
    [[-1.0000000, -1.0000000, 1.0000000],
     [1.0000000, -1.0000000, 1.0000000],
     [1.0000000, 1.0000000, 1.0000000],
     [-1.0000000, 1.0000000, 1.0000000], ]
  ]
  t.is(pts.length, 6)
  t.true(comparePolygonsAsPoints(pts, exp))
})

test('cuboid (options)', t => {
  // test radius
  let obs = cuboid({radius: [2.25, 0.75, 3.5]})
  let pts = geom3.toPoints(obs)
  let exp = [
    [ [ -2.25, -0.75, -3.5 ], [ -2.25, -0.75, 3.5 ], [ -2.25, 0.75, 3.5 ], [ -2.25, 0.75, -3.5 ] ],
    [ [ 2.25, -0.75, -3.5 ], [ 2.25, 0.75, -3.5 ], [ 2.25, 0.75, 3.5 ], [ 2.25, -0.75, 3.5 ] ],
    [ [ -2.25, -0.75, -3.5 ], [ 2.25, -0.75, -3.5 ], [ 2.25, -0.75, 3.5 ], [ -2.25, -0.75, 3.5 ] ],
    [ [ -2.25, 0.75, -3.5 ], [ -2.25, 0.75, 3.5 ], [ 2.25, 0.75, 3.5 ], [ 2.25, 0.75, -3.5 ] ],
    [ [ -2.25, -0.75, -3.5 ], [ -2.25, 0.75, -3.5 ], [ 2.25, 0.75, -3.5 ], [ 2.25, -0.75, -3.5 ] ],
    [ [ -2.25, -0.75, 3.5 ], [ 2.25, -0.75, 3.5 ], [ 2.25, 0.75, 3.5 ], [ -2.25, 0.75, 3.5 ] ]
  ]

  t.is(pts.length, 6)
  t.true(comparePolygonsAsPoints(pts, exp))

  // test center
  obs = cuboid({radius: [3, 3, 3], center: [3, 5, 7]})
  pts = geom3.toPoints(obs)
  exp = [
    [ [ 0, 2, 4 ], [ 0, 2, 10 ], [ 0, 8, 10 ], [ 0, 8, 4 ] ],
    [ [ 6, 2, 4 ], [ 6, 8, 4 ], [ 6, 8, 10 ], [ 6, 2, 10 ] ],
    [ [ 0, 2, 4 ], [ 6, 2, 4 ], [ 6, 2, 10 ], [ 0, 2, 10 ] ],
    [ [ 0, 8, 4 ], [ 0, 8, 10 ], [ 6, 8, 10 ], [ 6, 8, 4 ] ],
    [ [ 0, 2, 4 ], [ 0, 8, 4 ], [ 6, 8, 4 ], [ 6, 2, 4 ] ],
    [ [ 0, 2, 10 ], [ 6, 2, 10 ], [ 6, 8, 10 ], [ 0, 8, 10 ] ]
  ]

  t.is(pts.length, 6)
  t.true(comparePolygonsAsPoints(pts, exp))
})
