const {defaultResolution2D, EPS} = require('../core/constants')

const vec2 = require('../math/vec2')

const {geom2} = require('../geometry')

/** Construct a rounded rectangle.
 * @param {Object} [options] - options for construction
 * @param {Array} [options.center=[0,0]] - center of rounded rectangle
 * @param {Array} [options.radius=[1,1]] - radius of rounded rectangle, width and height
 * @param {Number} [options.roundradius=0.2] - round radius of corners
 * @param {Number} [options.resolution=defaultResolution2D] - number of sides per 360 rotation
 * @returns {geom2} new 2D geometry
 *
 * @example
 * let myrectangle = roundedRectangle({radius: [5, 10], roundradius: 2})
 */
const roundedRectangle = (options) => {
  const defaults = {
    center: [0, 0],
    radius: [1, 1],
    roundRadius: 0.2,
    resolution: defaultResolution2D
  }
  const {radius, center, roundRadius, resolution} = Object.assign({}, defaults, options)

  if (roundRadius > (radius[0] - EPS) || roundRadius > (radius[1] - EPS)) throw new Error('roundRadius must be smaller then the radius')

  let segments = Math.floor(resolution / 4)
  if (segments < 1) throw new Error('resolution must be greater then 4')

  // create sets of points that define the corners
  let corner0 = vec2.add(center, [radius[0] - roundRadius, radius[1] - roundRadius])
  let corner1 = vec2.add(center, [roundRadius - radius[0], radius[1] - roundRadius])
  let corner2 = vec2.add(center, [roundRadius - radius[0], roundRadius - radius[1]])
  let corner3 = vec2.add(center, [radius[0] - roundRadius, roundRadius - radius[1]])
  let corner0Points = []
  let corner1Points = []
  let corner2Points = []
  let corner3Points = []
  for (let i = 0; i <= segments; i++) {
    let radians = Math.PI / 2 * i / segments
    let point = vec2.fromAngleRadians(radians)
    vec2.scale(point, roundRadius, point)
    corner0Points.push(vec2.add(corner0, point))
    vec2.rotate(point, Math.PI / 2, point)
    corner1Points.push(vec2.add(corner1, point))
    vec2.rotate(point, Math.PI / 2, point)
    corner2Points.push(vec2.add(corner2, point))
    vec2.rotate(point, Math.PI / 2, point)
    corner3Points.push(vec2.add(corner3, point))
  }

  return geom2.fromPoints(corner0Points.concat(corner1Points, corner2Points, corner3Points))
}

module.exports = roundedRectangle
