import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };

  addFish = fish => {
    //1- copiar el state actual
    const fishes = {...this.state.fishes};
    //2- agregar fish nuevo a la variable
    fishes[`fish${Date.now()}`] = fish;
    //3- pasar el nuevo objeto fish al estado
    this.setState({ fishes });
  };

  loadSampleFishes = () => {
    this.setState({fishes: sampleFishes});
  }


  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
         <Header tagline="Wes is cool"/>
        </div>
        <Order />
        <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes} />
        
      </div>
    )
  }


}

export default App;