import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.state = { items: [] };
  }

  addNewItem(event) {
    event.preventDefault();
    this.setState({
      items: [...this.state.items, { title: this.inputRef.current.value }]
    })
    this.inputRef.current.value = '';
  }
  
  render() {
    let items = this.state.items.map((item, index) => <li key = {index}>{item.title}</li>);

    return (
      <div className="App">
        <form onSubmit={this.addNewItem.bind(this)}>
          <input ref={this.inputRef}></input>
          <button>Добавить</button>
        </form>
        <ul>
          {items}
        </ul>
      </div>
    );
  }
}

export default App;
