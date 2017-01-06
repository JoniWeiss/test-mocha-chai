var assert = chai.assert;

describe('the price of one movie', function() {
  it('should be $20', function() {
    assert.equal(movie(1), '20')
  })
})

describe('the price of two movies', function() {
  it('should be $38', function() {
    assert.equal(movie(2), 40 * .95)
  })
})

describe('the price of three movies', function() {
  it('should be $54', function() {
    assert.equal(movie(3), 60 * .90)
  })
})

describe('the price of four movies', function() {
  it('should be $64', function() {
    assert.equal(movie(4), 80 * .80)
  })
})

describe('the price of five movies', function() {
  it('should be $75', function() {
    assert.equal(movie(5), 100 * .75)
  })
})

describe('the price of six movies', function() {
  it('should be 84', function() {
    assert.equal(movie(6), 120 * .7)
  })
})

describe('the price for sets', function() {
  describe('a set of 4, 5, and 6', function() {
    it('should cost $54', function() {
      assert.equal(movies([0, 0, 0, 1, 1, 1]), 54)
    })
  })

  describe('two sets of 4, 5, and 6', function() {
    it('should cost $108', function() {
      assert.equal(movies([0, 0, 0, 2, 2, 2]), 108)
    })
  })
})
