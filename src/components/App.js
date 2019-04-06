import React, { Component } from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

export default class App extends Component {
  state = {
    fishes: {},
    order: {}
  };
  addFish = fish => {
    // update state:
    // 1.take a copy of the existing state
    const fishes = { ...this.state.fishes };
    // 2. add new fish to that fishes variable (unique)
    fishes[`fish${Date.now()}`] = fish;
    // 3. Set the new fishes object ot state
    this.setState({ fishes });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Daily" />
          {/* <Fish /> */}
        </div>
        <Order />
        <Inventory addFish={this.addFish} />
      </div>
    );
  }
}
