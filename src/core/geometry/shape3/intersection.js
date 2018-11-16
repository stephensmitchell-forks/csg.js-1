const geom3 = require('./geom3')
const clone = require('./clone')
const create = require('./create')

/**
   * Return a new Shape3 solid representing space in both this solid and
   * in the given solids.
   * Immutable: Neither this solid nor the given solids are modified.
   * @param {Shape3[]} shapes - list of Shape3 objects
   * @returns {Shape3} new Shape3 object
   * @example
   * let C = intersection(A, B)
   * @example
   * +-------+
   * |       |
   * |   A   |
   * |    +--+----+   =   +--+ C
   * +----+--+    |       +--+
   *      |   B   |
   *      |       |
   *      +-------+
   */
const intersection = (...shapes) => {
  if (shapes.length < 2) {
    throw new Error(`please provide at least two operands for a boolean intersection.(${shapes.length} given)`)
  }
  // first we transform all geometries to 'bake in' the transforms
  const shapesWithUpdatedGeoms = shapes.map(shape => {
    const transformedGeom = geom3.transform(shape.transforms, shape.geometry)
    const newShape = clone(shape)
    newShape.geometry = transformedGeom
    return newShape
  })

  const newGeometry = geom3.intersection(shapesWithUpdatedGeoms[0], ...shapesWithUpdatedGeoms)
  /* this means that the new shape:
   - has default transforms (reset)
   - does not get any attributes or data from the input shapes
  */
  const newShape = create()
  newShape.geometry = newGeometry
  return newShape
}

module.exports = intersection
