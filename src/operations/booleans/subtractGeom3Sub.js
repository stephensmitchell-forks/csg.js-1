const {geom3} = require('../../geometry')

const {Tree} = require('./trees')

/**
 * Return a new 3D geometry representing space in the first geometry but not
 * in the second geometry.
 * None of the given geometries are modified.
 * @param {geom3} geometry1 - a geometry
 * @param {geom3} geometry2 - a geometry
 * @returns {geom3} new 3D geometry
 */
const subtractSub = (geometry1, geometry2) => {
  let a = new Tree(geom3.toPolygons(geometry1))
  let b = new Tree(geom3.toPolygons(geometry2))

  a.invert()
  a.clipTo(b)
  b.clipTo(a, true)
  a.addPolygons(b.allPolygons())
  a.invert()

  let newpolygons = a.allPolygons()
  return geom3.create(newpolygons)
}

module.exports = subtractSub
