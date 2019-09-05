import React from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './Search';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      dataset: props.dataset,
      count: 0,
      result: '',
    }
  }

  linearSearch = (e) => {
    e.preventDefault()
    // console.log(this.state.searchValue)
    const data = this.state.dataset;
    const search = this.state.searchValue;

    for (let i = 0; i < data.length; i++) {
      if (data[i] == this.state.searchValue) {
        return this.setState({ count: (i + 1), result: `Search Found Number ${data[i]}` });
      }
    }
    this.setState({ count: data.length, result: 'Not Found' })
    return;
  }

  // binarySearch(){
  //   let data = this.state.dataset;
  // }

  render() {
    return (
      <div className="App">
        <label>Search for number in dataset</label>
        <input type='text' value={this.state.searchValue} onChange={(event) => this.setState({ searchValue: event.target.value })} />
        <button type='submit' onClick={(e) => this.linearSearch(e)}>Linear Search</button>
        <h2>{this.state.result}, found in {this.state.count} number of tries.</h2>
      </div>
    );
  }
}

export default App;
