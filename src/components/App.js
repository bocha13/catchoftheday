import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';
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
  };

  addToOrder = (key) => {
    const order = {...this.state.order};
    order[key] = order[key] + 1 || 1;
    this.setState({order});
  }


  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Wes is cool"/>
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => (
              <Fish 
                key={key}
                index={key}
                details={this.state.fishes[key]} 
                addToOrder={this.addToOrder}/>
            ))}
          </ul>
        </div>
        <Order />
        <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes} />
        
      </div>
    )
  }


}

export default App;