import React, { Component } from 'react';
import Statistics from './component/Statistics';
import FeedbackOptions from './component/FeedbackOptions';
import Section from './component/Section';
import Notification from './component/Notification';
import { AppContainer, Doyoulike } from './App.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleChange = event => {
    this.setState(prevState => ({
      [event.target.name]: prevState[event.target.name] + 1,
    }));
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
     return good + neutral + bad;
    // return Object.values(this.state).reduce(function (a, b) {
    //   return a + b;
    // });
  };
  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    const options = Object.keys(this.state);
    const total = this.countTotalFeedback();
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();

    return (
      <AppContainer>
        <Doyoulike> Do you like our coffee?</Doyoulike>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleChange}
          />
        </Section>
        <Section title="Statistic">
          {total === 0 ? (
            <Notification message="There is no feedback"></Notification>
          ) : (
            <Statistics
              options={this.state}
              total={total}
              positivePercentage={positiveFeedbackPercentage}
            />
          )}
        </Section>
      </AppContainer>
    );
  }
}

export default App;
