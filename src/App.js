import React, { Component } from 'react';
import left from './left.svg';
import right from './right.svg';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {gValue: '$2'};
  }

  updateValue = (e) => {
    this.setState({
      gValue: e.target.value,
    })
  }

  handleSubmit = () => {}

  update = () => {
    this.setState({gValue: <form onSubmit={this.handleSubmit}>
      <input type="text" value={this.state.gValue} onChange={this.updateValue}/>
    </form>
   
  });
  }
 
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="date"> 
            <h1 className= "week"> <img src={left} className="left" alt="left-arrow" />Week of August 18th to August 25th <img src={right} className="right" alt="right-arrow" /></h1>
          </div>
          <div className="row">
             <div id="balance"> 
              <h4>Balances</h4>
             </div>
             <div id="target">
               <h4>Target</h4>
             </div>
             <div id="progress">
               <h4>Progress</h4>
             </div>
          </div>

          <div className="type">
              <h4>Groceries</h4>
              <h4>Eating Out</h4>
              <h4>Fun</h4>
          </div>

          <div className="inputs">
             <h1 onClick={this.update}>{this.state.gValue}</h1>
          </div>

        </header>
      </div>
    );
  }
}

export default App;
