class Shape {
    constructor(color) {
      this.color = color;
    }
  }
  
  class Circle extends Shape {
    render() {
      return `<circle cx="150" cy="100" r="80" stroke="black" stroke-width="3" fill="${this.color}" />`;
    }
  }
  
  class Triangle extends Shape {
    render() {
      return `<polygon points="100,10 200,200 0,200" stroke="black" stroke-width="3" fill="${this.color}" />`;
    }
  }
  
  class Square extends Shape {
    render() {
      return `<rect x="50" y="50" width="150" height="150" stroke="black" stroke-width="3" fill="${this.color}" />`;
    }
  }
  
  module.exports = { Circle, Triangle, Square };
  