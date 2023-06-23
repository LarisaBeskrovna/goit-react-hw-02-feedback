import { Component } from 'react';

import Statistics from './components/Statistics/Statistics';
import Feedback from './components/Feedback/Feedback';


class App extends Component {

  static positivePercent = 0;

  state = {
      good: 0,
      neutral: 0,
      bad: 0,
      positivePercent: 0
  }

  onGoodRank = () => {
    this.setState((prevState) => ({
      good: prevState.good + 1,
    }))
  };

  onNeutralRank = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }))
  };

  onBadRank = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }))
  };


  countTotalFeedback = () => {
    const {good, neutral, bad} = this.state;
    const total = good + neutral + bad;
    return total;
  }

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const {good} = this.state;
    const positivePercent = (good * 100) / total;
    return Math.floor(positivePercent);
  }

  render () {
    const {good, neutral, bad} = this.state;
    const countTotal = this.countTotalFeedback();
    const positivePercent = this.countPositiveFeedbackPercentage();

    return (
      <div className="App">
        <Feedback 
          addGoodRank={this.onGoodRank}
          addNeutralRank={this.onNeutralRank}
          addBadRank={this.onBadRank}/>

        <Statistics 
          good={good} 
          neutral={neutral} 
          bad={bad}
          total={countTotal}
          percentage={positivePercent}
          />
  
      </div>
    );
  }
}

export default App;