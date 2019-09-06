import React from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './Search';

function recursiveSearch(data, searchValue, start = 0, end = data.length - 1, count = 0) {
  // let count = this.state.count;
  // console.log(count)
  if (start > end) {
    return { found: false, count }
  }

  const middle = Math.floor((start + end) / 2);
  const item = data[middle]

  console.log(start, end)

  if (item == searchValue) {
    console.log(middle);
    console.log('Count: ', count)
    return { middle, count };
  }
  if (item > searchValue) {
    return recursiveSearch(data, searchValue, start, middle - 1, count + 1);
  }
  if (item < searchValue) {
    return recursiveSearch(data, searchValue, middle + 1, end, count + 1);
  }
}

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

  // binarySearch(e) {
  //   e.preventDefault();
  //   let data = this.state.dataset;
  //   let searchValue = this.state.searchValue;

  //   const num = recursiveSearch(data, searchValue);
  //   console.log(num)
  //   if (num.result) {
  //     return this.setState({ result: `Found Number ${num.searchValue}`, count: num.count })
  //   } else {
  //     return this.setState({ result: 'Not Found', count: num.count })
  //   }
  // }

  binarySearch(e) {
    let data = this.state.dataset;
    let targetValue = this.state.searchValue;
    const output = recursiveSearch(data, targetValue)
    //Represents index in array
    console.log(output)

    if (data[output.middle] == targetValue) {
      return this.setState({ result: `Found Number ${targetValue}`, count: output.count })//, count: this.state.count 
    } else {
      return this.setState({ result: 'Not Found' })//, count: this.state.count 
    }





    // const item = data[index];
    // console.log(item)
    // if (targetValue == item) {
    //   this.setState({ result: `Number Found ${item}`, count: count })
    // } else if (item < targetValue) {
    //   return this.binarySearch()
    // }


    // if (item == targetValue) {
    //   console.log(count);
    //   this.setState({ count: count });
    // } else if (item < targetValue) {
    //   return this.binarySearch(data, targetValue, index + 1, end, count);
    // } else if (item > targetValue) {
    //   return this.binarySearch(data, targetValue, start, index - 1, count);
    // } else {
    //   console.log('else');
    //   this.setState({
    //     result: `item not found after ${count} attempts`
    //   });
  }

  // binarySearchAlgo(arr, targetValue, start = 0, end = arr.length - 1) {
  //   const middle = Math.floor((start + end) / 2);
  //   let searchValue = this.state.searchValue
  //   count++;

  //   const item = arr[middle]
  //   if (searchValue === item) {
  //     this.setState({ result: `Number Found ${item}`, count: count })
  //   }

  // }



  render() {
    return (
      <div className="App">
        <label>Linear search / Binary Search</label>
        <input type='text' value={this.state.searchValue} onChange={(event) => this.setState({ searchValue: event.target.value })} />
        <button type='submit' onClick={(e) => this.linearSearch(e)}>Linear Search</button>
        <button type='submit' onClick={(e) => this.binarySearch(e)}>Binary Search</button>
        <h2>{this.state.result}, found in {this.state.count} number of tries.</h2>
      </div>
    );
  }
}

export default App;
