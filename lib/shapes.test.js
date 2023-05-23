const { Circle, Triangle, Square } = require('./shapes.js');

describe('Circle', () => {
  it('should render an SVG string', () => {
    const circle = new Circle('blue');
    expect(circle.render()).toBe('<circle cx="150" cy="100" r="80" stroke="black" stroke-width="3" fill="blue" />');
  });
});

describe('Triangle', () => {
    it('should render an SVG string', () => {
      const triangle = new Triangle('red');
      expect(triangle.render()).toBe('<polygon points="100,10 200,200 0,200" stroke="black" stroke-width="3" fill="red" />');
    });
  });

  
  describe('Square', () => {
    it('should render an SVG string', () => {
      const square = new Square('green');
      expect(square.render()).toBe('<rect x="50" y="50" width="150" height="150" stroke="black" stroke-width="3" fill="green" />');
    });
  });