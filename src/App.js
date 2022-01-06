
import React, { Component } from 'react';
import Statistics from './component/Statistics';
import FeedbackOptions from './component/FeedbackOptions';

export class App extends Component {
      state = {
      good: 0,
      neutral: 0,
      bad: 0
    };
    
  
  handleChange = (event) => {
       this.setState((prevState) => ({ [event.target.name]: prevState[event.target.name] + 1, }));
  };

 
  render() {
    const total = Object.values(this.state).reduce(function (a, b) { return (a + b) });
    const positivePercentage = Math.round((this.state.good / total) * 100);
    const options = Object.keys(this.state);


    return (
      <div>
        <h1>Pleese leave feedback</h1>
        <FeedbackOptions options={options} onLeaveFeedback={this.handleChange}/>
        
        <h2>Statistic</h2>
        <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={ total} positivePercentage={positivePercentage} />
        
        
      </div>
    )
  }
}

export default App;



