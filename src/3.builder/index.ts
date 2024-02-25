// console.log('%cHello, World!', 'color: red; font-size: 20px');

import { Color } from './colors';

// const logger = new Logger();

// logger
//   .fontSize(20)
//   .color('red')
//   .backgroundColor('black')
//   .borderRadius(5)
//   .log('Hello, World!');

class Logger {
  private _color = '';
  private _fontSize = '';
  private _backgroundColor = '';
  private _padding = '';
  private _borderRadius = '';

  color(color: Color) {
    this._color = color;
    return this;
  }

  fontSize(size: number) {
    this._fontSize = `${size}px`;
    return this;
  }

  backgroundColor(color: Color) {
    this._backgroundColor = color;
    return this;
  }

  padding(size: number | string) {
    if (typeof size === 'number') {
      this._padding = `${size}px`;
    } else {
      this._padding = size;
    }
    return this;
  }

  borderRadius(size: number) {
    this._borderRadius = `${size}px`;
    return this;
  }

  log(message: string) {
    console.log(
      `%c${message}`,
      `color: ${this._color}; font-size: ${this._fontSize}; background-color: ${this._backgroundColor}; padding: ${this._padding}; border-radius: ${this._borderRadius};`,
    );
  }

  clone() {
    return Object.create(this);
  }
}

const logger = new Logger()
  .color('crimson')
  .backgroundColor('black')
  .fontSize(20)
  .padding('10px 20px')
  .borderRadius(5);

logger.clone().fontSize(50).log('Hello, World!');
logger.log('ITI MEARN Stack');
