const { describe, it } = require('mocha');
const { expect } = require('chai');
const { checkOverlappingRects } = require('../src');

describe('check-element-overlap', () => {
  let rect1, rect2;

  beforeEach(() => {
    rect1 = {
      top: 0,
      left: 0,
      width: 100,
      height: 50
    };
    rect2 = {
      top: 50,
      left: 100,
      width: 100,
      height: 50
    };
  });

  it('should not find overlap', () => {
    expect(checkOverlappingRects(rect1, rect2)).to.equal(false);
  });

  it('should overlap vertically', () => {
    rect2.top = rect1.height - 1;
    expect(checkOverlappingRects(rect1, rect2)).to.equal(true);
  });

  it('should overlap horizontally', () => {
    rect2.left = rect1.width - 1;
    expect(checkOverlappingRects(rect1, rect2)).to.equal(true);
  });

  describe('swap rects', () => {
    it('should overlap vertically', () => {
      rect2.top = 0;
      rect1.top = 49;
      expect(checkOverlappingRects(rect1, rect2)).to.equal(true);
    });

    it('should find no vertical overlap', () => {
      rect2.top = 0;
      rect1.top = 50;
      expect(checkOverlappingRects(rect1, rect2)).to.equal(false);
    });

    it('should overlap horizontally', () => {
      rect2.left = 0;
      rect1.left = 99;
      expect(checkOverlappingRects(rect1, rect2)).to.equal(true);
    });

    it('should find no horizontal overlap', () => {
      rect2.left = 0;
      rect1.left = 100;
      expect(checkOverlappingRects(rect1, rect2)).to.equal(false);
    });
  });
});
