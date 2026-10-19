import { expect } from 'chai'
import chunk from '../chunk.js'

describe('chunk', function () {
	it('splits an array into groups of the requested size', function () {
		expect(chunk(['a', 'b', 'c', 'd'], 2)).to.deep.equal([
			['a', 'b'],
			['c', 'd'],
		])
	})

	it('keeps the remaining elements in a shorter final group', function () {
		expect(chunk(['a', 'b', 'c', 'd'], 3)).to.deep.equal([
			['a', 'b', 'c'],
			['d'],
		])
	})

	it('defaults to groups of one element', function () {
		expect(chunk(['a', 'b'])).to.deep.equal([['a'], ['b']])
	})

	it('returns an empty array for empty input or a non-positive size', function () {
		expect(chunk([], 2)).to.deep.equal([])
		expect(chunk(['a', 'b'], 0)).to.deep.equal([])
	})

	it('returns an empty array for null input', function () {
		expect(chunk(null, 2)).to.deep.equal([])
	})
})
