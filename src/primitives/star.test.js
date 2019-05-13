const test = require('ava')

const {star} = require('./index')

const geom2 = require('../geometry/geom2')

const comparePoints = require('../../test/helpers/comparePoints')

test('star (defaults)', t => {
  const geometry = star()
  const pts = geom2.toPoints(geometry)
  const exp = [
    [ 1, 0 ],
    [ 0.30901700258255005, 0.224513977766037 ],
    [ 0.30901700258255005, 0.9510565400123596 ],
    [ -0.1180339902639389, 0.3632712662220001 ],
    [ -0.80901700258255, 0.5877852439880371 ],
    [ -0.3819660246372223, 4.6777348190004433e-17 ],
    [ -0.80901700258255, -0.5877852439880371 ],
    [ -0.1180339902639389, -0.3632712662220001 ],
    [ 0.30901700258255005, -0.9510565400123596 ],
    [ 0.30901700258255005, -0.224513977766037 ]
  ]

  t.deepEqual(pts.length, 10)
  t.true(comparePoints(pts, exp))
})

test('star (options)', t => {
  // test center
  let geometry = star({outerRadius: 5, center: [5, 5]})
  let pts = geom2.toPoints(geometry)
  let exp = [
    [ 10, 5 ],
    [ 6.5450849533081055, 6.122570037841797 ],
    [ 6.5450849533081055, 9.75528335571289 ],
    [ 4.409830093383789, 6.816356658935547 ],
    [ 0.9549150466918945, 7.9389262199401855 ],
    [ 3.090169906616211, 5 ],
    [ 0.9549150466918945, 2.0610737800598145 ],
    [ 4.409830093383789, 3.1836435794830322 ],
    [ 6.5450849533081055, 0.24471712112426758 ],
    [ 6.5450849533081055, 3.877429962158203 ]
  ]

  t.deepEqual(pts.length, 10)
  t.true(comparePoints(pts, exp))

  // test vertices
  geometry = star({outerRadius: 5, vertices: 8})
  pts = geom2.toPoints(geometry)
  exp = [
    [ 5, 0 ],
    [ 3.535533905029297, 1.4644660949707031 ],
    [ 3.535533905029297, 3.535533905029297 ],
    [ 1.4644660949707031, 3.535533905029297 ],
    [ 3.0616169991140216e-16, 5 ],
    [ -1.4644660949707031, 3.535533905029297 ],
    [ -3.535533905029297, 3.535533905029297 ],
    [ -3.535533905029297, 1.4644660949707031 ],
    [ -5, 6.123233998228043e-16 ],
    [ -3.535533905029297, -1.4644660949707031 ],
    [ -3.535533905029297, -3.535533905029297 ],
    [ -1.4644660949707031, -3.535533905029297 ],
    [ -9.184850467946473e-16, -5 ],
    [ 1.4644660949707031, -3.535533905029297 ],
    [ 3.535533905029297, -3.535533905029297 ],
    [ 3.535533905029297, -1.4644660949707031 ]
  ]

  t.deepEqual(pts.length, 16)
  t.true(comparePoints(pts, exp))

  // test density
  geometry = star({outerRadius: 5, vertices: 8, density: 3})
  pts = geom2.toPoints(geometry)
  exp = [
    [ 5, 0 ],
    [ 2.5, 1.0355339050292969 ],
    [ 3.535533905029297, 3.535533905029297 ],
    [ 1.0355339050292969, 2.5 ],
    [ 3.0616169991140216e-16, 5 ],
    [ -1.0355339050292969, 2.5 ],
    [ -3.535533905029297, 3.535533905029297 ],
    [ -2.5, 1.0355339050292969 ],
    [ -5, 6.123233998228043e-16 ],
    [ -2.5, -1.0355339050292969 ],
    [ -3.535533905029297, -3.535533905029297 ],
    [ -1.0355339050292969, -2.5 ],
    [ -9.184850467946473e-16, -5 ],
    [ 1.0355339050292969, -2.5 ],
    [ 3.535533905029297, -3.535533905029297 ],
    [ 2.5, -1.0355339050292969 ]
  ]

  t.deepEqual(pts.length, 16)
  t.true(comparePoints(pts, exp))

  // test innerRadius
  geometry = star({outerRadius: 5, vertices: 8, innerRadius: 1})
  pts = geom2.toPoints(geometry)
  exp = [
    [ 5, 0 ],
    [ 0.9238795042037964, 0.3826834261417389 ],
    [ 3.535533905029297, 3.535533905029297 ],
    [ 0.3826834261417389, 0.9238795042037964 ],
    [ 3.0616169991140216e-16, 5 ],
    [ -0.3826834261417389, 0.9238795042037964 ],
    [ -3.535533905029297, 3.535533905029297 ],
    [ -0.9238795042037964, 0.3826834261417389 ],
    [ -5, 6.123233998228043e-16 ],
    [ -0.9238795042037964, -0.3826834261417389 ],
    [ -3.535533905029297, -3.535533905029297 ],
    [ -0.3826834261417389, -0.9238795042037964 ],
    [ -9.184850467946473e-16, -5 ],
    [ 0.3826834261417389, -0.9238795042037964 ],
    [ 3.535533905029297, -3.535533905029297 ],
    [ 0.9238795042037964, -0.3826834261417389 ]
  ]

  t.deepEqual(pts.length, 16)
  t.true(comparePoints(pts, exp))

  // test start angle
  geometry = star({outerRadius: 5, startAngle: -45})
  pts = geom2.toPoints(geometry)
  exp = [
    [ 3.535533905029297, -3.535533905029297 ],
    [ 1.8863168954849243, -0.298763245344162 ],
    [ 4.455032825469971, 2.2699525356292725 ],
    [ 0.8670446872711182, 1.7016710042953491 ],
    [ -0.7821723222732544, 4.938441753387451 ],
    [ -1.3504537343978882, 1.3504537343978882 ],
    [ -4.938441753387451, 0.7821723222732544 ],
    [ -1.7016710042953491, -0.8670446872711182 ],
    [ -2.2699525356292725, -4.455032825469971 ],
    [ 0.298763245344162, -1.8863168954849243 ]
  ]

  t.deepEqual(pts.length, 10)
  t.true(comparePoints(pts, exp))
})
