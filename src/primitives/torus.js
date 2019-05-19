const {defaultResolution2D, defaultResolution3D} = require('../core/constants')

const {extrudeRotate} = require('../operations')

const circle = require('./circle')

/** Construct a torus by revolving a small circle (inner) about the circumference of a large (outer) circle.
 * @param {Object} [options] - options for construction
 * @param {Float} [options.innerRadius=1] - radius of small (inner) circle
 * @param {Float} [options.outerRadius=4] - radius of large (outer) circle
 * @param {Integer} [options.innerSegments=defaultResolution2D] - number of segments to create per 360 rotation
 * @param {Integer} [options.outerSegments=defaultResolution3D] - number of segments to create per 360 rotation
 * @param {Integer} [options.roti=0] - rotation angle of base circle
 * @returns {geom3} new 3D geometry
 *
 * @example
 * let torus1 = torus({
 *   innerRadius: 10
 * })
 */
function torus (options) {
  const defaults = {
    innerRadius: 1,
    innerSegments: defaultResolution2D,
    outerRadius: 4,
    outerSegments: defaultResolution3D,
    roti: 0
  }
  let {innerRadius, innerSegments, outerRadius, outerSegments, roti} = Object.assign({}, defaults, options)

  if (innerRadius >= outerRadius) throw new Error('inner circle is two large to rotate about the outer circle')

  let innerCircle = circle({radius: innerRadius, center: [outerRadius, 0], segments: innerSegments})

  //if (roti) innerCircle = innerCircle.transform(Matrix4x4.rotationZ(roti))

  options = {
    startAngle: 0,
    angle: 360,
    segments: outerSegments
  }
  return extrudeRotate(options, innerCircle)
}

module.exports = torus
