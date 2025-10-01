class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  get width() {
    return this._width;
  }

  get height() {
    return this._height;
  }

  getArea() {
    return this._width * this._height;
  }
}

class Square extends Rectangle {
  constructor(side) {
    super(side, side);
    this._side = side;
  }

  getPerimeter() {
    return this._side * 4;
  }
}

// Do not change this part
window.Rectangle = Rectangle;
window.Square = Square;
