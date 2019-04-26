const test = require('ava')

const geom3 = require('../geometry/geom3')

const {cylinderElliptic} = require('./index')

const comparePolygonsAsPoints = require('../../test/helpers/comparePolygonsAsPoints')

test('cylinderElliptic (defaults)', t => {
  const obs = cylinderElliptic()
  const pts = geom3.toPoints(obs)
  const exp = [
    [[0, -1, 0], [1, -1, 0], [0.8660253882408142, -1, 0.5], ],
    [[0.8660253882408142, -1, 0.5], [1, -1, 0], [1, 1, 0], [0.8660253882408142, 1, 0.5], ],
    [[0, 1, 0], [0.8660253882408142, 1, 0.5], [1, 1, 0], ],
    [[0, -1, 0], [0.8660253882408142, -1, 0.5], [0.5, -1, 0.8660253882408142], ],
    [[0.5, -1, 0.8660253882408142], [0.8660253882408142, -1, 0.5],
     [0.8660253882408142, 1, 0.5], [0.5, 1, 0.8660253882408142], ],
    [[0, 1, 0], [0.5, 1, 0.8660253882408142], [0.8660253882408142, 1, 0.5], ],
    [[0, -1, 0], [0.5, -1, 0.8660253882408142], [6.123234262925839e-17, -1, 1], ],
    [[6.123234262925839e-17, -1, 1], [0.5, -1, 0.8660253882408142],
     [0.5, 1, 0.8660253882408142], [6.123234262925839e-17, 1, 1], ],
    [[0, 1, 0], [6.123234262925839e-17, 1, 1], [0.5, 1, 0.8660253882408142], ],
    [[0, -1, 0], [6.123234262925839e-17, -1, 1], [-0.5, -1, 0.8660253882408142], ],
    [[-0.5, -1, 0.8660253882408142], [6.123234262925839e-17, -1, 1],
     [6.123234262925839e-17, 1, 1], [-0.5, 1, 0.8660253882408142], ],
    [[0, 1, 0], [-0.5, 1, 0.8660253882408142], [6.123234262925839e-17, 1, 1], ],
    [[0, -1, 0], [-0.5, -1, 0.8660253882408142], [-0.8660253882408142, -1, 0.5], ],
    [[-0.8660253882408142, -1, 0.5], [-0.5, -1, 0.8660253882408142],
     [-0.5, 1, 0.8660253882408142], [-0.8660253882408142, 1, 0.5], ],
    [[0, 1, 0], [-0.8660253882408142, 1, 0.5], [-0.5, 1, 0.8660253882408142], ],
    [[0, -1, 0], [-0.8660253882408142, -1, 0.5], [-1, -1, 1.2246468525851679e-16], ],
    [[-1, -1, 1.2246468525851679e-16], [-0.8660253882408142, -1, 0.5],
     [-0.8660253882408142, 1, 0.5], [-1, 1, 1.2246468525851679e-16], ],
    [[0, 1, 0], [-1, 1, 1.2246468525851679e-16], [-0.8660253882408142, 1, 0.5], ],
    [[0, -1, 0], [-1, -1, 1.2246468525851679e-16], [-0.8660253882408142, -1, -0.5], ],
    [[-0.8660253882408142, -1, -0.5], [-1, -1, 1.2246468525851679e-16],
     [-1, 1, 1.2246468525851679e-16], [-0.8660253882408142, 1, -0.5], ],
    [[0, 1, 0], [-0.8660253882408142, 1, -0.5], [-1, 1, 1.2246468525851679e-16], ],
    [[0, -1, 0], [-0.8660253882408142, -1, -0.5], [-0.5, -1, -0.8660253882408142], ],
    [[-0.5, -1, -0.8660253882408142], [-0.8660253882408142, -1, -0.5],
     [-0.8660253882408142, 1, -0.5], [-0.5, 1, -0.8660253882408142], ],
    [[0, 1, 0], [-0.5, 1, -0.8660253882408142], [-0.8660253882408142, 1, -0.5], ],
    [[0, -1, 0], [-0.5, -1, -0.8660253882408142], [-1.8369701465288538e-16, -1, -1], ],
    [[-1.8369701465288538e-16, -1, -1], [-0.5, -1, -0.8660253882408142],
     [-0.5, 1, -0.8660253882408142], [-1.8369701465288538e-16, 1, -1], ],
    [[0, 1, 0], [-1.8369701465288538e-16, 1, -1], [-0.5, 1, -0.8660253882408142], ],
    [[0, -1, 0], [-1.8369701465288538e-16, -1, -1], [0.5, -1, -0.8660253882408142], ],
    [[0.5, -1, -0.8660253882408142], [-1.8369701465288538e-16, -1, -1],
     [-1.8369701465288538e-16, 1, -1], [0.5, 1, -0.8660253882408142], ],
    [[0, 1, 0], [0.5, 1, -0.8660253882408142], [-1.8369701465288538e-16, 1, -1], ],
    [[0, -1, 0], [0.5, -1, -0.8660253882408142], [0.8660253882408142, -1, -0.5], ],
    [[0.8660253882408142, -1, -0.5], [0.5, -1, -0.8660253882408142],
     [0.5, 1, -0.8660253882408142], [0.8660253882408142, 1, -0.5], ],
    [[0, 1, 0], [0.8660253882408142, 1, -0.5], [0.5, 1, -0.8660253882408142], ],
    [[0, -1, 0], [0.8660253882408142, -1, -0.5], [1, -1, -2.4492937051703357e-16], ],
    [[1, -1, -2.4492937051703357e-16], [0.8660253882408142, -1, -0.5],
     [0.8660253882408142, 1, -0.5], [1, 1, -2.4492937051703357e-16], ],
    [[0, 1, 0], [1, 1, -2.4492937051703357e-16], [0.8660253882408142, 1, -0.5], ],
  ]

  t.is(pts.length, 36)
  t.true(comparePolygonsAsPoints(pts, exp))
})
