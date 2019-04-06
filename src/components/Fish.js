import React, { Component } from 'react';
import { formatPrice } from '../helpers';

export default class Fish extends Component {
  render() {
    const { name, image, status, desc, price } = this.props.details;
    return (
      <li className="menu-fish">
        <img src={image} alt={name} />
        <h3 className="fish-name">
          {this.props.details.name}
          <span className="price">{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        <button>Add to Cart</button>
      </li>
    );
  }
}