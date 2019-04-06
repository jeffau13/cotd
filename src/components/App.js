import React, { Component } from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';
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

  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  };

  addToOrder = key => {
    //1. take a copy of existing state of order
    const order = { ...this.state.order };
    //2. add to order or update order
    order[key] = order[key] + 1 || 1;
    //3. call setState
    this.setState({ order });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Daily" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => (
              <Fish
                key={key}
                index={key}
                details={this.state.fishes[key]}
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
          {/* <Fish /> */}
        </div>
        <Order fishes={this.state.fishes} order={this.state.order} />
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    );
  }
}
