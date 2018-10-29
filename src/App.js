import React, { Component } from 'react';
import './App.css';
import { Grid } from 'semantic-ui-react'
import Question from './Question'

class App extends Component {
  constructor(props) {
   super(props);
   this.state = {
     value: "",
     questions: this.getQuestions(),
     currentQuestionNumber: 1,
   };
 }

  handleChange = (e, { value }) => {
    this.setState({ value });
  }

  render() {
    let { currentQuestionNumber, questions } = this.state;

    return (
      <div className="question-form">
        <style>{`
          body > div,
          body > div > div,
          body > div > div > div.question-form {
            height: 100%;
          }
        `}</style>

        <Grid relaxed columns={2}  textAlign='center' style={{ height: '100%' }} verticalAlign='middle' padded="horizontally">
          <Question questionNumber={currentQuestionNumber} question={questions[currentQuestionNumber - 1]}
            totalQuestions={questions.length} />
        </Grid>
      </div>
    );
  }

  getQuestions = () => {
    return [{"Id":1,"Title":"What phone do you use?","Options":[{"Title":"iPhone"},{"Title":"Android"},{"Title":"Windows Phone"}]},{"Id":2,"Title":"How old are you?","Options":[{"Title":"18 - 25 years old."},{"Title":"26 - 35 years old."},{"Title":"36 - 70 years old."},{"Title":"Over 70 years old."}]}];
  }
}

export default App;
