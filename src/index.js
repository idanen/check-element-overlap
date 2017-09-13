(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    root.checkOverlap = factory();
  }
}(this, function () {
  return Object.assign(checkOverlap, { checkOverlappingRects });

  function checkOverlap(element1, element2) {
    return checkOverlappingRects(element1.getBoundingClientRect(), element2.getBoundingClientRect());
  }

  function checkOverlappingRects(rect1, rect2) {
    const rect1VerticalReach = rect1.top + rect1.height;
    const rect1HorizontalReach = rect1.left + rect1.width;
    const rect2VerticalReach = rect2.top + rect2.height;
    const rect2HorizontalReach = rect2.left + rect2.width;

    return (
      (rect2.top < rect1VerticalReach && rect1.top < rect2VerticalReach)
      || (rect2.left < rect1HorizontalReach && rect1.left < rect2HorizontalReach)
    );
  }
}));
