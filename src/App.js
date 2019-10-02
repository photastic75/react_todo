import React, {Component} from 'react';
import Todos from './components/Todos';
import Items from './components/Items';
import './App.css';

class App extends Component {
  inputElement = React.createRef(); //React method giving access

  constructor() {
    super();
    this.state = {
      currentItem: {
        key: '',
        text: '',
      },
      allItems: [], //gives array of all elements, super handy
    }
  } //instantiated the items

  userInput = e => {
    const itemText = e.target.value; //captures the value of text after event click
    console.log(e);
    const currentInputItem = {
      text: itemText,
      key: Date.now()
    }
    this.setState(currentInputItem); //this is referencing the component
  }  
  
  addItem = e => {
    e.preventDefault(); //need it here, prevents the page from refreshing and losing all your data! Good every time 
    const newItem = this.state.currentItem;
    if (newItem.text !== '') {
      const items = [...this.state.items, newItem] //spread operators, push new items and merge, add new items
      this.setState({
        allItems: items,
        currentItem: {text: '', key: ''}
      })
    }
  }
  // deleteItem
  render() {
    return (
      <div className="App">
        <Todos 
          userInput = {this.userInput} 
          inputElement = {this.inputElement}
          addItem = {this.addItem} 
        />
        {/* build deleteItem */}
        <Items entries = {this.state.allItems} /> {/*this is rendering all items of the to do list jsx comment*/}
      </div>
    );
  }
}

export default App;
