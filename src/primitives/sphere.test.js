const test = require('ava')

const geom3 = require('../geometry/geom3')

const {sphere} = require('./index')

const comparePolygonsAsPoints = require('../../test/helpers/comparePolygonsAsPoints')

test('sphere (defaults)', t => {
  const obs = sphere()
  const pts = geom3.toPoints(obs)
  const exp = [
    [[1, 0, 0], [0.8660253882408142, -0.5, 0], [0.75, -0.4330126941204071, -0.5], [0.8660253882408142, 0, -0.5], ],
    [[0.8660253882408142, 0, 0.5], [0.75, -0.4330126941204071, 0.5], [0.8660253882408142, -0.5, 0], [1, 0, 0], ],
    [[0.8660253882408142, 0, -0.5], [0.75, -0.4330126941204071, -0.5], [0.4330126941204071, -0.25, -0.8660253882408142], [0.5, 0, -0.8660253882408142], ],
    [[0.5, 0, 0.8660253882408142], [0.4330126941204071, -0.25, 0.8660253882408142], [0.75, -0.4330126941204071, 0.5], [0.8660253882408142, 0, 0.5], ],
    [[0.5, 0, -0.8660253882408142], [0.4330126941204071, -0.25, -0.8660253882408142], [6.123234262925839e-17, 0, -1], ],
    [[6.123234262925839e-17, 0, 1], [0.4330126941204071, -0.25, 0.8660253882408142], [0.5, 0, 0.8660253882408142], ],
    [[0.8660253882408142, -0.5, 0], [0.5, -0.8660253882408142, 0], [0.4330126941204071, -0.75, -0.5], [0.75, -0.4330126941204071, -0.5], ],
    [[0.75, -0.4330126941204071, 0.5], [0.4330126941204071, -0.75, 0.5], [0.5, -0.8660253882408142, 0], [0.8660253882408142, -0.5, 0], ],
    [[0.75, -0.4330126941204071, -0.5], [0.4330126941204071, -0.75, -0.5], [0.25, -0.4330126941204071, -0.8660253882408142], [0.4330126941204071, -0.25, -0.8660253882408142], ],
    [[0.4330126941204071, -0.25, 0.8660253882408142], [0.25, -0.4330126941204071, 0.8660253882408142], [0.4330126941204071, -0.75, 0.5], [0.75, -0.4330126941204071, 0.5], ],
    [[0.4330126941204071, -0.25, -0.8660253882408142], [0.25, -0.4330126941204071, -0.8660253882408142], [5.302876236065149e-17, -3.0616171314629196e-17, -1], ],
    [[5.302876236065149e-17, -3.0616171314629196e-17, 1], [0.25, -0.4330126941204071, 0.8660253882408142], [0.4330126941204071, -0.25, 0.8660253882408142], ],
    [[0.5, -0.8660253882408142, 0], [6.123234262925839e-17, -1, 0], [5.302876566937394e-17, -0.8660253882408142, -0.5], [0.4330126941204071, -0.75, -0.5], ],
    [[0.4330126941204071, -0.75, 0.5], [5.302876566937394e-17, -0.8660253882408142, 0.5], [6.123234262925839e-17, -1, 0], [0.5, -0.8660253882408142, 0], ],
    [[0.4330126941204071, -0.75, -0.5], [5.302876566937394e-17, -0.8660253882408142, -0.5], [3.0616171314629196e-17, -0.5, -0.8660253882408142], [0.25, -0.4330126941204071, -0.8660253882408142], ],
    [[0.25, -0.4330126941204071, 0.8660253882408142], [3.0616171314629196e-17, -0.5, 0.8660253882408142], [5.302876566937394e-17, -0.8660253882408142, 0.5], [0.4330126941204071, -0.75, 0.5], ],
    [[0.25, -0.4330126941204071, -0.8660253882408142], [3.0616171314629196e-17, -0.5, -0.8660253882408142], [3.0616171314629196e-17, -5.302876236065149e-17, -1], ],
    [[3.0616171314629196e-17, -5.302876236065149e-17, 1], [3.0616171314629196e-17, -0.5, 0.8660253882408142], [0.25, -0.4330126941204071, 0.8660253882408142], ],
    [[6.123234262925839e-17, -1, 0], [-0.5, -0.8660253882408142, 0], [-0.4330126941204071, -0.75, -0.5], [5.302876566937394e-17, -0.8660253882408142, -0.5], ],
    [[5.302876566937394e-17, -0.8660253882408142, 0.5], [-0.4330126941204071, -0.75, 0.5], [-0.5, -0.8660253882408142, 0], [6.123234262925839e-17, -1, 0], ],
    [[5.302876566937394e-17, -0.8660253882408142, -0.5], [-0.4330126941204071, -0.75, -0.5], [-0.25, -0.4330126941204071, -0.8660253882408142], [3.0616171314629196e-17, -0.5, -0.8660253882408142], ],
    [[3.0616171314629196e-17, -0.5, 0.8660253882408142], [-0.25, -0.4330126941204071, 0.8660253882408142], [-0.4330126941204071, -0.75, 0.5], [5.302876566937394e-17, -0.8660253882408142, 0.5], ],
    [[3.0616171314629196e-17, -0.5, -0.8660253882408142], [-0.25, -0.4330126941204071, -0.8660253882408142], [3.74939976039497e-33, -6.123234262925839e-17, -1], ],
    [[3.74939976039497e-33, -6.123234262925839e-17, 1], [-0.25, -0.4330126941204071, 0.8660253882408142], [3.0616171314629196e-17, -0.5, 0.8660253882408142], ],
    [[-0.5, -0.8660253882408142, 0], [-0.8660253882408142, -0.5, 0], [-0.75, -0.4330126941204071, -0.5], [-0.4330126941204071, -0.75, -0.5], ],
    [[-0.4330126941204071, -0.75, 0.5], [-0.75, -0.4330126941204071, 0.5], [-0.8660253882408142, -0.5, 0], [-0.5, -0.8660253882408142, 0], ],
    [[-0.4330126941204071, -0.75, -0.5], [-0.75, -0.4330126941204071, -0.5], [-0.4330126941204071, -0.25, -0.8660253882408142], [-0.25, -0.4330126941204071, -0.8660253882408142], ],
    [[-0.25, -0.4330126941204071, 0.8660253882408142], [-0.4330126941204071, -0.25, 0.8660253882408142], [-0.75, -0.4330126941204071, 0.5], [-0.4330126941204071, -0.75, 0.5], ],
    [[-0.25, -0.4330126941204071, -0.8660253882408142], [-0.4330126941204071, -0.25, -0.8660253882408142], [-3.0616171314629196e-17, -5.302876236065149e-17, -1], ],
    [[-3.0616171314629196e-17, -5.302876236065149e-17, 1], [-0.4330126941204071, -0.25, 0.8660253882408142], [-0.25, -0.4330126941204071, 0.8660253882408142], ],
    [[-0.8660253882408142, -0.5, 0], [-1, -1.2246468525851679e-16, 0], [-0.8660253882408142, -1.0605753133874788e-16, -0.5], [-0.75, -0.4330126941204071, -0.5], ],
    [[-0.75, -0.4330126941204071, 0.5], [-0.8660253882408142, -1.0605753133874788e-16, 0.5], [-1, -1.2246468525851679e-16, 0], [-0.8660253882408142, -0.5, 0], ],
    [[-0.75, -0.4330126941204071, -0.5], [-0.8660253882408142, -1.0605753133874788e-16, -0.5], [-0.5, -6.123234262925839e-17, -0.8660253882408142], [-0.4330126941204071, -0.25, -0.8660253882408142], ],
    [[-0.4330126941204071, -0.25, 0.8660253882408142], [-0.5, -6.123234262925839e-17, 0.8660253882408142], [-0.8660253882408142, -1.0605753133874788e-16, 0.5], [-0.75, -0.4330126941204071, 0.5], ],
    [[-0.4330126941204071, -0.25, -0.8660253882408142], [-0.5, -6.123234262925839e-17, -0.8660253882408142], [-5.302876236065149e-17, -3.0616171314629196e-17, -1], ],
    [[-5.302876236065149e-17, -3.0616171314629196e-17, 1], [-0.5, -6.123234262925839e-17, 0.8660253882408142], [-0.4330126941204071, -0.25, 0.8660253882408142], ],
    [[-1, -1.2246468525851679e-16, 0], [-0.8660253882408142, 0.5, 0], [-0.75, 0.4330126941204071, -0.5], [-0.8660253882408142, -1.0605753133874788e-16, -0.5], ],
    [[-0.8660253882408142, -1.0605753133874788e-16, 0.5], [-0.75, 0.4330126941204071, 0.5], [-0.8660253882408142, 0.5, 0], [-1, -1.2246468525851679e-16, 0], ],
    [[-0.8660253882408142, -1.0605753133874788e-16, -0.5], [-0.75, 0.4330126941204071, -0.5], [-0.4330126941204071, 0.25, -0.8660253882408142], [-0.5, -6.123234262925839e-17, -0.8660253882408142], ],
    [[-0.5, -6.123234262925839e-17, 0.8660253882408142], [-0.4330126941204071, 0.25, 0.8660253882408142], [-0.75, 0.4330126941204071, 0.5], [-0.8660253882408142, -1.0605753133874788e-16, 0.5], ],
    [[-0.5, -6.123234262925839e-17, -0.8660253882408142], [-0.4330126941204071, 0.25, -0.8660253882408142], [-6.123234262925839e-17, -7.49879952078994e-33, -1], ],
    [[-6.123234262925839e-17, -7.49879952078994e-33, 1], [-0.4330126941204071, 0.25, 0.8660253882408142], [-0.5, -6.123234262925839e-17, 0.8660253882408142], ],
    [[-0.8660253882408142, 0.5, 0], [-0.5, 0.8660253882408142, 0], [-0.4330126941204071, 0.75, -0.5], [-0.75, 0.4330126941204071, -0.5], ],
    [[-0.75, 0.4330126941204071, 0.5], [-0.4330126941204071, 0.75, 0.5], [-0.5, 0.8660253882408142, 0], [-0.8660253882408142, 0.5, 0], ],
    [[-0.75, 0.4330126941204071, -0.5], [-0.4330126941204071, 0.75, -0.5], [-0.25, 0.4330126941204071, -0.8660253882408142], [-0.4330126941204071, 0.25, -0.8660253882408142], ],
    [[-0.4330126941204071, 0.25, 0.8660253882408142], [-0.25, 0.4330126941204071, 0.8660253882408142], [-0.4330126941204071, 0.75, 0.5], [-0.75, 0.4330126941204071, 0.5], ],
    [[-0.4330126941204071, 0.25, -0.8660253882408142], [-0.25, 0.4330126941204071, -0.8660253882408142], [-5.302876236065149e-17, 3.0616171314629196e-17, -1], ],
    [[-5.302876236065149e-17, 3.0616171314629196e-17, 1], [-0.25, 0.4330126941204071, 0.8660253882408142], [-0.4330126941204071, 0.25, 0.8660253882408142], ],
    [[-0.5, 0.8660253882408142, 0], [-1.8369701465288538e-16, 1, 0], [-1.5908628708195447e-16, 0.8660253882408142, -0.5], [-0.4330126941204071, 0.75, -0.5], ],
    [[-0.4330126941204071, 0.75, 0.5], [-1.5908628708195447e-16, 0.8660253882408142, 0.5], [-1.8369701465288538e-16, 1, 0], [-0.5, 0.8660253882408142, 0], ],
    [[-0.4330126941204071, 0.75, -0.5], [-1.5908628708195447e-16, 0.8660253882408142, -0.5], [-9.184850732644269e-17, 0.5, -0.8660253882408142], [-0.25, 0.4330126941204071, -0.8660253882408142], ],
    [[-0.25, 0.4330126941204071, 0.8660253882408142], [-9.184850732644269e-17, 0.5, 0.8660253882408142], [-1.5908628708195447e-16, 0.8660253882408142, 0.5], [-0.4330126941204071, 0.75, 0.5], ],
    [[-0.25, 0.4330126941204071, -0.8660253882408142], [-9.184850732644269e-17, 0.5, -0.8660253882408142], [-3.0616171314629196e-17, 5.302876236065149e-17, -1], ],
    [[-3.0616171314629196e-17, 5.302876236065149e-17, 1], [-9.184850732644269e-17, 0.5, 0.8660253882408142], [-0.25, 0.4330126941204071, 0.8660253882408142], ],
    [[-1.8369701465288538e-16, 1, 0], [0.5, 0.8660253882408142, 0], [0.4330126941204071, 0.75, -0.5], [-1.5908628708195447e-16, 0.8660253882408142, -0.5], ],
    [[-1.5908628708195447e-16, 0.8660253882408142, 0.5], [0.4330126941204071, 0.75, 0.5], [0.5, 0.8660253882408142, 0], [-1.8369701465288538e-16, 1, 0], ],
    [[-1.5908628708195447e-16, 0.8660253882408142, -0.5], [0.4330126941204071, 0.75, -0.5], [0.25, 0.4330126941204071, -0.8660253882408142], [-9.184850732644269e-17, 0.5, -0.8660253882408142], ],
    [[-9.184850732644269e-17, 0.5, 0.8660253882408142], [0.25, 0.4330126941204071, 0.8660253882408142], [0.4330126941204071, 0.75, 0.5], [-1.5908628708195447e-16, 0.8660253882408142, 0.5], ],
    [[-9.184850732644269e-17, 0.5, -0.8660253882408142], [0.25, 0.4330126941204071, -0.8660253882408142], [-1.1248198179158957e-32, 6.123234262925839e-17, -1], ],
    [[-1.1248198179158957e-32, 6.123234262925839e-17, 1], [0.25, 0.4330126941204071, 0.8660253882408142], [-9.184850732644269e-17, 0.5, 0.8660253882408142], ],
    [[0.5, 0.8660253882408142, 0], [0.8660253882408142, 0.5, 0], [0.75, 0.4330126941204071, -0.5], [0.4330126941204071, 0.75, -0.5], ],
    [[0.4330126941204071, 0.75, 0.5], [0.75, 0.4330126941204071, 0.5], [0.8660253882408142, 0.5, 0], [0.5, 0.8660253882408142, 0], ],
    [[0.4330126941204071, 0.75, -0.5], [0.75, 0.4330126941204071, -0.5], [0.4330126941204071, 0.25, -0.8660253882408142], [0.25, 0.4330126941204071, -0.8660253882408142], ],
    [[0.25, 0.4330126941204071, 0.8660253882408142], [0.4330126941204071, 0.25, 0.8660253882408142], [0.75, 0.4330126941204071, 0.5], [0.4330126941204071, 0.75, 0.5], ],
    [[0.25, 0.4330126941204071, -0.8660253882408142], [0.4330126941204071, 0.25, -0.8660253882408142], [3.0616171314629196e-17, 5.302876236065149e-17, -1], ],
    [[3.0616171314629196e-17, 5.302876236065149e-17, 1], [0.4330126941204071, 0.25, 0.8660253882408142], [0.25, 0.4330126941204071, 0.8660253882408142], ],
    [[0.8660253882408142, 0.5, 0], [1, 2.4492937051703357e-16, 0], [0.8660253882408142, 2.1211506267749576e-16, -0.5], [0.75, 0.4330126941204071, -0.5], ],
    [[0.75, 0.4330126941204071, 0.5], [0.8660253882408142, 2.1211506267749576e-16, 0.5], [1, 2.4492937051703357e-16, 0], [0.8660253882408142, 0.5, 0], ],
    [[0.75, 0.4330126941204071, -0.5], [0.8660253882408142, 2.1211506267749576e-16, -0.5], [0.5, 1.2246468525851679e-16, -0.8660253882408142], [0.4330126941204071, 0.25, -0.8660253882408142], ],
    [[0.4330126941204071, 0.25, 0.8660253882408142], [0.5, 1.2246468525851679e-16, 0.8660253882408142], [0.8660253882408142, 2.1211506267749576e-16, 0.5], [0.75, 0.4330126941204071, 0.5], ],
    [[0.4330126941204071, 0.25, -0.8660253882408142], [0.5, 1.2246468525851679e-16, -0.8660253882408142], [5.302876236065149e-17, 3.0616171314629196e-17, -1], ],
    [[5.302876236065149e-17, 3.0616171314629196e-17, 1], [0.5, 1.2246468525851679e-16, 0.8660253882408142], [0.4330126941204071, 0.25, 0.8660253882408142], ],
  ]
  t.is(pts.length, 72)
  t.true(comparePolygonsAsPoints(pts, exp))
})

test('sphere (options)', t => {
  // test center
  let obs = sphere({center: [-3, 5, 7]})
  let pts = geom3.toPoints(obs)
  let exp = [
    [ [ -2, 5, 7 ], [ -2.133974552154541, 4.5, 7 ],
      [ -2.25, 4.56698751449585, 6.5 ], [ -2.133974552154541, 5, 6.5 ] ],
    [ [ -2.133974552154541, 5, 7.5 ], [ -2.25, 4.56698751449585, 7.5 ],
      [ -2.133974552154541, 4.5, 7 ], [ -2, 5, 7 ] ],
    [ [ -2.133974552154541, 5, 6.5 ], [ -2.25, 4.56698751449585, 6.5 ],
      [ -2.5669872760772705, 4.75, 6.133974552154541 ], [ -2.5, 5, 6.133974552154541 ] ],
    [ [ -2.5, 5, 7.866025447845459 ], [ -2.5669872760772705, 4.75, 7.866025447845459 ],
      [ -2.25, 4.56698751449585, 7.5 ], [ -2.133974552154541, 5, 7.5 ] ],
    [ [ -2.5, 5, 6.133974552154541 ], [ -2.5669872760772705, 4.75, 6.133974552154541 ], [ -3, 5, 6 ] ],
    [ [ -3, 5, 8 ], [ -2.5669872760772705, 4.75, 7.866025447845459 ], [ -2.5, 5, 7.866025447845459 ] ],
    [ [ -2.133974552154541, 4.5, 7 ], [ -2.5, 4.133974552154541, 7 ],
      [ -2.5669872760772705, 4.25, 6.5 ], [ -2.25, 4.56698751449585, 6.5 ] ],
    [ [ -2.25, 4.56698751449585, 7.5 ], [ -2.5669872760772705, 4.25, 7.5 ],
      [ -2.5, 4.133974552154541, 7 ], [ -2.133974552154541, 4.5, 7 ] ],
    [ [ -2.25, 4.56698751449585, 6.5 ], [ -2.5669872760772705, 4.25, 6.5 ],
      [ -2.75, 4.56698751449585, 6.133974552154541 ], [ -2.5669872760772705, 4.75, 6.133974552154541 ] ],
    [ [ -2.5669872760772705, 4.75, 7.866025447845459 ], [ -2.75, 4.56698751449585, 7.866025447845459 ],
      [ -2.5669872760772705, 4.25, 7.5 ], [ -2.25, 4.56698751449585, 7.5 ] ],
    [ [ -2.5669872760772705, 4.75, 6.133974552154541 ], [ -2.75, 4.56698751449585, 6.133974552154541 ], [ -3, 5, 6 ] ],
    [ [ -3, 5, 8 ], [ -2.75, 4.56698751449585, 7.866025447845459 ], [ -2.5669872760772705, 4.75, 7.866025447845459 ] ],
    [ [ -2.5, 4.133974552154541, 7 ], [ -3, 4, 7 ],
      [ -3, 4.133974552154541, 6.5 ], [ -2.5669872760772705, 4.25, 6.5 ] ],
    [ [ -2.5669872760772705, 4.25, 7.5 ], [ -3, 4.133974552154541, 7.5 ],
      [ -3, 4, 7 ], [ -2.5, 4.133974552154541, 7 ] ],
    [ [ -2.5669872760772705, 4.25, 6.5 ], [ -3, 4.133974552154541, 6.5 ],
      [ -3, 4.5, 6.133974552154541 ], [ -2.75, 4.56698751449585, 6.133974552154541 ] ],
    [ [ -2.75, 4.56698751449585, 7.866025447845459 ], [ -3, 4.5, 7.866025447845459 ],
      [ -3, 4.133974552154541, 7.5 ], [ -2.5669872760772705, 4.25, 7.5 ] ],
    [ [ -2.75, 4.56698751449585, 6.133974552154541 ], [ -3, 4.5, 6.133974552154541 ], [ -3, 5, 6 ] ],
    [ [ -3, 5, 8 ], [ -3, 4.5, 7.866025447845459 ], [ -2.75, 4.56698751449585, 7.866025447845459 ] ],
    [ [ -3, 4, 7 ], [ -3.5, 4.133974552154541, 7 ],
      [ -3.4330127239227295, 4.25, 6.5 ], [ -3, 4.133974552154541, 6.5 ] ],
    [ [ -3, 4.133974552154541, 7.5 ], [ -3.4330127239227295, 4.25, 7.5 ],
      [ -3.5, 4.133974552154541, 7 ], [ -3, 4, 7 ] ],
    [ [ -3, 4.133974552154541, 6.5 ], [ -3.4330127239227295, 4.25, 6.5 ],
      [ -3.25, 4.56698751449585, 6.133974552154541 ], [ -3, 4.5, 6.133974552154541 ] ],
    [ [ -3, 4.5, 7.866025447845459 ], [ -3.25, 4.56698751449585, 7.866025447845459 ],
      [ -3.4330127239227295, 4.25, 7.5 ], [ -3, 4.133974552154541, 7.5 ] ],
    [ [ -3, 4.5, 6.133974552154541 ], [ -3.25, 4.56698751449585, 6.133974552154541 ], [ -3, 5, 6 ] ],
    [ [ -3, 5, 8 ], [ -3.25, 4.56698751449585, 7.866025447845459 ], [ -3, 4.5, 7.866025447845459 ] ],
    [ [ -3.5, 4.133974552154541, 7 ], [ -3.866025447845459, 4.5, 7 ],
      [ -3.75, 4.56698751449585, 6.5 ], [ -3.4330127239227295, 4.25, 6.5 ] ],
    [ [ -3.4330127239227295, 4.25, 7.5 ], [ -3.75, 4.56698751449585, 7.5 ],
      [ -3.866025447845459, 4.5, 7 ], [ -3.5, 4.133974552154541, 7 ] ],
    [ [ -3.4330127239227295, 4.25, 6.5 ], [ -3.75, 4.56698751449585, 6.5 ],
      [ -3.4330127239227295, 4.75, 6.133974552154541 ], [ -3.25, 4.56698751449585, 6.133974552154541 ] ],
    [ [ -3.25, 4.56698751449585, 7.866025447845459 ], [ -3.4330127239227295, 4.75, 7.866025447845459 ],
      [ -3.75, 4.56698751449585, 7.5 ], [ -3.4330127239227295, 4.25, 7.5 ] ],
    [ [ -3.25, 4.56698751449585, 6.133974552154541 ], [ -3.4330127239227295, 4.75, 6.133974552154541 ], [ -3, 5, 6 ] ],
    [ [ -3, 5, 8 ], [ -3.4330127239227295, 4.75, 7.866025447845459 ], [ -3.25, 4.56698751449585, 7.866025447845459 ] ],
    [ [ -3.866025447845459, 4.5, 7 ], [ -4, 5, 7 ],
      [ -3.866025447845459, 5, 6.5 ], [ -3.75, 4.56698751449585, 6.5 ] ],
    [ [ -3.75, 4.56698751449585, 7.5 ], [ -3.866025447845459, 5, 7.5 ],
      [ -4, 5, 7 ], [ -3.866025447845459, 4.5, 7 ] ],
    [ [ -3.75, 4.56698751449585, 6.5 ], [ -3.866025447845459, 5, 6.5 ],
      [ -3.5, 5, 6.133974552154541 ], [ -3.4330127239227295, 4.75, 6.133974552154541 ] ],
    [ [ -3.4330127239227295, 4.75, 7.866025447845459 ], [ -3.5, 5, 7.866025447845459 ],
      [ -3.866025447845459, 5, 7.5 ], [ -3.75, 4.56698751449585, 7.5 ] ],
    [ [ -3.4330127239227295, 4.75, 6.133974552154541 ], [ -3.5, 5, 6.133974552154541 ], [ -3, 5, 6 ] ],
    [ [ -3, 5, 8 ], [ -3.5, 5, 7.866025447845459 ], [ -3.4330127239227295, 4.75, 7.866025447845459 ] ],
    [ [ -4, 5, 7 ], [ -3.866025447845459, 5.5, 7 ],
      [ -3.75, 5.43301248550415, 6.5 ], [ -3.866025447845459, 5, 6.5 ] ],
    [ [ -3.866025447845459, 5, 7.5 ], [ -3.75, 5.43301248550415, 7.5 ],
      [ -3.866025447845459, 5.5, 7 ], [ -4, 5, 7 ] ],
    [ [ -3.866025447845459, 5, 6.5 ], [ -3.75, 5.43301248550415, 6.5 ],
      [ -3.4330127239227295, 5.25, 6.133974552154541 ], [ -3.5, 5, 6.133974552154541 ] ],
    [ [ -3.5, 5, 7.866025447845459 ], [ -3.4330127239227295, 5.25, 7.866025447845459 ],
      [ -3.75, 5.43301248550415, 7.5 ], [ -3.866025447845459, 5, 7.5 ] ],
    [ [ -3.5, 5, 6.133974552154541 ], [ -3.4330127239227295, 5.25, 6.133974552154541 ], [ -3, 5, 6 ] ],
    [ [ -3, 5, 8 ], [ -3.4330127239227295, 5.25, 7.866025447845459 ], [ -3.5, 5, 7.866025447845459 ] ],
    [ [ -3.866025447845459, 5.5, 7 ], [ -3.5, 5.866025447845459, 7 ],
      [ -3.4330127239227295, 5.75, 6.5 ], [ -3.75, 5.43301248550415, 6.5 ] ],
    [ [ -3.75, 5.43301248550415, 7.5 ], [ -3.4330127239227295, 5.75, 7.5 ],
      [ -3.5, 5.866025447845459, 7 ], [ -3.866025447845459, 5.5, 7 ] ],
    [ [ -3.75, 5.43301248550415, 6.5 ], [ -3.4330127239227295, 5.75, 6.5 ],
      [ -3.25, 5.43301248550415, 6.133974552154541 ], [ -3.4330127239227295, 5.25, 6.133974552154541 ] ],
    [ [ -3.4330127239227295, 5.25, 7.866025447845459 ], [ -3.25, 5.43301248550415, 7.866025447845459 ],
      [ -3.4330127239227295, 5.75, 7.5 ], [ -3.75, 5.43301248550415, 7.5 ] ],
    [ [ -3.4330127239227295, 5.25, 6.133974552154541 ], [ -3.25, 5.43301248550415, 6.133974552154541 ], [ -3, 5, 6 ] ],
    [ [ -3, 5, 8 ], [ -3.25, 5.43301248550415, 7.866025447845459 ], [ -3.4330127239227295, 5.25, 7.866025447845459 ] ],
    [ [ -3.5, 5.866025447845459, 7 ], [ -3, 6, 7 ],
      [ -3, 5.866025447845459, 6.5 ], [ -3.4330127239227295, 5.75, 6.5 ] ],
    [ [ -3.4330127239227295, 5.75, 7.5 ], [ -3, 5.866025447845459, 7.5 ],
      [ -3, 6, 7 ], [ -3.5, 5.866025447845459, 7 ] ],
    [ [ -3.4330127239227295, 5.75, 6.5 ], [ -3, 5.866025447845459, 6.5 ],
      [ -3, 5.5, 6.133974552154541 ], [ -3.25, 5.43301248550415, 6.133974552154541 ] ],
    [ [ -3.25, 5.43301248550415, 7.866025447845459 ], [ -3, 5.5, 7.866025447845459 ],
      [ -3, 5.866025447845459, 7.5 ], [ -3.4330127239227295, 5.75, 7.5 ] ],
    [ [ -3.25, 5.43301248550415, 6.133974552154541 ], [ -3, 5.5, 6.133974552154541 ], [ -3, 5, 6 ] ],
    [ [ -3, 5, 8 ], [ -3, 5.5, 7.866025447845459 ], [ -3.25, 5.43301248550415, 7.866025447845459 ] ],
    [ [ -3, 6, 7 ], [ -2.5, 5.866025447845459, 7 ],
      [ -2.5669872760772705, 5.75, 6.5 ], [ -3, 5.866025447845459, 6.5 ] ],
    [ [ -3, 5.866025447845459, 7.5 ], [ -2.5669872760772705, 5.75, 7.5 ],
      [ -2.5, 5.866025447845459, 7 ], [ -3, 6, 7 ] ],
    [ [ -3, 5.866025447845459, 6.5 ], [ -2.5669872760772705, 5.75, 6.5 ],
      [ -2.75, 5.43301248550415, 6.133974552154541 ], [ -3, 5.5, 6.133974552154541 ] ],
    [ [ -3, 5.5, 7.866025447845459 ], [ -2.75, 5.43301248550415, 7.866025447845459 ],
      [ -2.5669872760772705, 5.75, 7.5 ], [ -3, 5.866025447845459, 7.5 ] ],
    [ [ -3, 5.5, 6.133974552154541 ], [ -2.75, 5.43301248550415, 6.133974552154541 ], [ -3, 5, 6 ] ],
    [ [ -3, 5, 8 ], [ -2.75, 5.43301248550415, 7.866025447845459 ], [ -3, 5.5, 7.866025447845459 ] ],
    [ [ -2.5, 5.866025447845459, 7 ], [ -2.133974552154541, 5.5, 7 ],
      [ -2.25, 5.43301248550415, 6.5 ], [ -2.5669872760772705, 5.75, 6.5 ] ],
    [ [ -2.5669872760772705, 5.75, 7.5 ], [ -2.25, 5.43301248550415, 7.5 ],
      [ -2.133974552154541, 5.5, 7 ], [ -2.5, 5.866025447845459, 7 ] ],
    [ [ -2.5669872760772705, 5.75, 6.5 ], [ -2.25, 5.43301248550415, 6.5 ],
      [ -2.5669872760772705, 5.25, 6.133974552154541 ], [ -2.75, 5.43301248550415, 6.133974552154541 ] ],
    [ [ -2.75, 5.43301248550415, 7.866025447845459 ], [ -2.5669872760772705, 5.25, 7.866025447845459 ],
      [ -2.25, 5.43301248550415, 7.5 ], [ -2.5669872760772705, 5.75, 7.5 ] ],
    [ [ -2.75, 5.43301248550415, 6.133974552154541 ], [ -2.5669872760772705, 5.25, 6.133974552154541 ], [ -3, 5, 6 ] ],
    [ [ -3, 5, 8 ], [ -2.5669872760772705, 5.25, 7.866025447845459 ], [ -2.75, 5.43301248550415, 7.866025447845459 ] ],
    [ [ -2.133974552154541, 5.5, 7 ], [ -2, 5, 7 ],
      [ -2.133974552154541, 5, 6.5 ], [ -2.25, 5.43301248550415, 6.5 ] ],
    [ [ -2.25, 5.43301248550415, 7.5 ], [ -2.133974552154541, 5, 7.5 ],
      [ -2, 5, 7 ], [ -2.133974552154541, 5.5, 7 ] ],
    [ [ -2.25, 5.43301248550415, 6.5 ], [ -2.133974552154541, 5, 6.5 ],
      [ -2.5, 5, 6.133974552154541 ], [ -2.5669872760772705, 5.25, 6.133974552154541 ] ],
    [ [ -2.5669872760772705, 5.25, 7.866025447845459 ], [ -2.5, 5, 7.866025447845459 ],
      [ -2.133974552154541, 5, 7.5 ], [ -2.25, 5.43301248550415, 7.5 ] ],
    [ [ -2.5669872760772705, 5.25, 6.133974552154541 ], [ -2.5, 5, 6.133974552154541 ], [ -3, 5, 6 ] ],
    [ [ -3, 5, 8 ], [ -2.5, 5, 7.866025447845459 ], [ -2.5669872760772705, 5.25, 7.866025447845459 ] ]
  ]
  t.is(pts.length, 72)
  t.true(comparePolygonsAsPoints(pts, exp))

  // test radius
  obs = sphere({radius: 5})
  pts = geom3.toPoints(obs)
  exp = [
  ]
  t.is(pts.length, 72)
  //t.true(comparePolygonsAsPoints(pts, exp))

  // test resolution
  obs = sphere({resolution: 8})
  pts = geom3.toPoints(obs)
  exp = [
  ]
  t.is(pts.length, 32)
})
