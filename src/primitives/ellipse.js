const {defaultResolution2D} = require('../core/constants')

const vec2 = require('../math/vec2')

const geom2 = require('../geometry/geom2')

/** Construct an ellispe.
 * @see https://en.wikipedia.org/wiki/Ellipse
 * @param {Object} [options] - options for construction
 * @param {Array} [options.center=[0,0]] - center of ellipse
 * @param {Array} [options.radius=[1,1]] - radius of ellipse, width and height
 * @param {Number} [options.resolution=defaultResolution2D] - number of sides per 360 rotation
 * @returns {geom2} new 2D geometry
 */
const ellipse = (options) => {
  const defaults = {
    center: [0, 0],
    radius: [1, 1],
    resolution: defaultResolution2D
  }
  let {center, radius, resolution} = Object.assign({}, defaults, options)

  if (!Array.isArray(center)) throw new Error('center must be an array')
  if (center.length < 2) throw new Error('center must contain X and Y values')

  if (!Array.isArray(radius)) throw new Error('radius must be an array')
  if (radius.length < 2) throw new Error('radius must contain X and Y values')

  if (resolution < 4) throw new Error('resolution must be greater than 3')

  const centerv = vec2.fromArray(center)
  const step = 2 * Math.PI / resolution // radians

  let points = []
  for (var i = 0 ; i < resolution ; i++) {
    var point = vec2.fromValues(radius[0] * Math.cos(step * i), radius[1] * Math.sin(step * i))
    vec2.add(point, centerv, point)
    points.push(point)
  }
  return geom2.fromPoints(points)
}

/**
 * Construct a circle where are points are at the same distance from the center.
 * @see {@link ellipse} for additional options, as this is an alias for ellipse
 * @param {Object} [options] - options for construction
 * @param {Array} [options.center=[0,0]] - center of circle
 * @param {Number} [options.radius=1] - radius of circle
 * @param {Number} [options.resolution=defaultResolution2D] - number of segments per 360 rotation
 * @returns {geom2} new 2D geometry
 */
const circle = (options) => {
  const defaults = {
    center: [0, 0],
    radius: 1,
    resolution: defaultResolution2D
  }
  let {radius, resolution, center} = Object.assign({}, defaults, options)

  // TODO check that radius is a number

  radius = [radius, radius]

  return ellipse({center: center, radius: radius, resolution: resolution})
}

module.exports = {
  circle,
  ellipse
}