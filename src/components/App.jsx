
import { Component } from "react";
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./Section/FeedbackOptions/FeedbackOptions";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  onLeaveFeedback = option => {
    this.setState(prevState => {
return {
  [option]: prevState[option] + 1,
}
})
  }

  render() {
    const options = Object.keys(this.state);

    return (
  <div>
    <Section title="Please leave feedback">
      <FeedbackOptions
      options={options} 
      onLeaveFeedback={this.onLeaveFeedback}
      />
    </Section>
  </div>
    );
  }  
};

