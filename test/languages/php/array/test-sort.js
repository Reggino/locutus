// warning: This file is auto generated by `npm run build:tests`, do not edit by hand
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set') // eslint-disable-line no-unused-vars
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get') // eslint-disable-line no-unused-vars
var sort = require('/Users/kvz/code/phpjs/src/php/array/sort.js')

describe('src/php/array/sort.js', function () {
  it.skip('should pass example 1', function (done) {
    var $arr = ['Kevin', 'van', 'Zonneveld']
    sort($arr)
    var $result = $arr
    var expected = ['Kevin', 'Zonneveld', 'van']
var $arr = ['Kevin', 'van', 'Zonneveld']
sort($arr)
    var result = $arr
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    ini_set('locutus.strictForIn', true)
    var $fruits = {d: 'lemon', a: 'orange', b: 'banana', c: 'apple'}
    sort($fruits)
    var $result = $fruits
    var expected = {0: 'apple', 1: 'banana', 2: 'lemon', 3: 'orange'}
ini_set('locutus.strictForIn', true)
var $fruits = {d: 'lemon', a: 'orange', b: 'banana', c: 'apple'}
sort($fruits)
    var result = $fruits
    expect(result).to.deep.equal(expected)
    done()
  })
})