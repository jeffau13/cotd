import React, { Component } from 'react';
import PropTypes from 'prop-types';
export default class AddFishForm extends Component {
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  static propTypes = {
    addFish: PropTypes.func
  };
  createFish = event => {
    event.preventDefault();
    const fish = {
      nameRef: this.nameRef.current.value,
      priceRef: parseFloat(this.priceRef.current.value),
      statusRef: this.statusRef.current.value,
      descRef: this.descRef.current.value,
      imageRef: this.imageRef.current.value
    };
    this.props.addFish(fish);
    event.currentTarget.reset();
  };
  render() {
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        <input
          name="name"
          type="text"
          ref={this.nameRef}
          placeholder="Name"
          autoComplete="off"
        />
        <input
          name="price"
          type="text"
          ref={this.priceRef}
          placeholder="Price"
          autoComplete="off"
        />
        <select name="status" ref={this.statusRef} type="text">
          <option value="available">Fresh</option>
          <option value="unavailable">Sold Out</option>
        </select>
        <textarea name="desc" ref={this.descRef} placeholder="Desc" />
        <input
          name="imgage"
          type="text"
          ref={this.imageRef}
          placeholder="Image URL"
          autoComplete="off"
        />
        <button type="submit">Add Fish</button>
      </form>
    );
  }
}
