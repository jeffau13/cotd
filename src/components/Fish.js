import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { formatPrice } from '../helpers';
export default class Fish extends Component {
  static propTypes = {
    details: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      desc: PropTypes.string,
      status: PropTypes.string,
      price: PropTypes.number
    }),
    addToOrder: PropTypes.func
  };
  handleClick = () => {
    this.props.addToOrder(this.props.index);
  };
  render() {
    const { name, image, status, desc, price } = this.props.details;
    const isAvailable = status === 'available';
    return (
      <li className="menu-fish">
        <img src={image} alt={name} />
        <h3 className="fish-name">
          {this.props.details.name}
          <span className="price">{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        <button disabled={!isAvailable} onClick={this.handleClick}>
          {isAvailable ? 'Add to Order' : 'Sold out!'}
        </button>
      </li>
    );
  }
}
