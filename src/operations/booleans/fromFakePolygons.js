const {vec2} = require('../../math')

const {geom2} = require('../../geometry')

const fromFakePolygon = (polygon) => {
  // this can happen based on union, seems to be residuals -
  // return null and handle in caller
  if (polygon.vertices.length < 4) {
    return null
  }
  var vert1Indices = []
  var pts2d = polygon.vertices.filter((vertex, i) => {
    if (vertex[2] > 0) {
      vert1Indices.push(i)
      return true
    }
    return false
  })
    .map((vertex) => {
      return vec2.fromArray(vertex)
    })
  if (pts2d.length !== 2) {
    throw new Error('Assertion failed: _fromFakePolygon: not enough points found') // TBD remove later
  }
  var d = vert1Indices[1] - vert1Indices[0]
  if (d === 1 || d === 3) {
    if (d === 1) {
      pts2d.reverse()
    }
  } else {
    throw new Error('Assertion failed: _fromFakePolygon: unknown index ordering')
  }
  return pts2d
}

/** Convert the given polygons to a list of sides.
 * The polygons must have only z coordinates +1 and -1, as constructed by toCSGWall(-1, 1).
 */
const fromFakePolygons = (polygons) => {
  let sides = polygons.map((polygon) => {
    return fromFakePolygon(polygon)
  }).filter(function (s) {
    return s !== null
  })
  return geom2.create(sides)
}

module.exports = fromFakePolygons
