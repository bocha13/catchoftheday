import React from 'react';
import { getFunName} from '../helpers';

class StorePicker extends React.Component {

  myInput= React.createRef();

  goToStore = (event) => {
    //evita al form de realizar el submit
    event.preventDefault();
    //obtener el texto del input
    const storeName = this.myInput.value.value;
    //cambiar la ruta con React Router a /store/Id
    this.props.history.push(`/store/${storeName}`);
  }

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input 
          type="text"
          ref={this.myInput} 
          required 
          placeholder="Store Name" 
          defaultValue={getFunName()} 
        />
        <button type="submit">Visit Store</button>
      </form>
    )
  }
}


export default StorePicker;