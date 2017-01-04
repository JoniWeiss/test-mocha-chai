var assert = chai.assert;

describe('addClass', function() {
  it('should add class to element', function() {
    var element = {className: ''};

    addClass(element, 'test-class');

    assert.equal(element.className, 'test-class');
  });
  it('should NOT add class which already exists')
})
