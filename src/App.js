import React from 'react';
import FeedbackOptions from './components/FeedbackOptions';
import Section from './components/Section';
import Statistics from './components/Statistics';
import { titles } from './data/titles';
import swal from 'sweetalert';
import './App.css';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = feedback => {
    const feedbackNormalize = feedback.toLowerCase().trim();
    this.setState(prevState => {
      return {
        ...prevState.state,
        [feedbackNormalize]: prevState[feedbackNormalize] + 1,
      };
    });
    swal({
      title: 'Good job!',
      text: 'Thanks for the feedback!',
      icon: 'success',
      button: { className: 'button_color' },
      className: 'swal-modal',
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const { good } = this.state;
    return total ? Math.round((good / total) * 100) : 0;
  };

  render() {
    const total = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();

    return (
      <div className="mainContainer">
        <Section title="Please leave feedback">
          <FeedbackOptions
            buttonsNames={titles}
            onLeaveFeedback={this.handleClick}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={total}
            positivePercentage={positiveFeedback}
          />
        </Section>
      </div>
    );
  }
}

export default App;
