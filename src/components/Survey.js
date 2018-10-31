import React, { Component } from 'react';
import PropTypes from 'prop-types'

import { Grid } from 'semantic-ui-react'
import Question from './Question'
import Complete from './Complete'

const ONE = 1;

class Survey extends Component {
  constructor(props) {
   super(props);

   this.state = {
     value: "",
     currentQuestionNumber: ONE,
     isSurveyCompleted: false
   };
 }

  handleNextClicked = (e) => {
    let currentQuestionNumber = this.state.currentQuestionNumber;
    let numberOfQuestions = this.state.questions.length;

    if (currentQuestionNumber < numberOfQuestions) {
      this.setState((state, props) => ({
        currentQuestionNumber: state.currentQuestionNumber + ONE
      }));
    } else if (currentQuestionNumber >= numberOfQuestions) {
      this.setState({
        isSurveyCompleted: true
      });
    }
  }

  handleBackClicked = (e) => {
    let currentQuestionNumber = this.state.currentQuestionNumber;

    if (currentQuestionNumber > ONE) {
      this.setState((state, props) => ({
        currentQuestionNumber: state.currentQuestionNumber - ONE
      }));
    }
  }

  render() {
    let { questions } = this.props;
    let { currentQuestionNumber, isSurveyCompleted } = this.state;

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
          {!isSurveyCompleted && currentQuestionNumber <= questions.length &&
            <Question
              questionNumber={currentQuestionNumber}
              question={questions[currentQuestionNumber - ONE]}
              totalQuestions={questions.length}
              handleNextClicked={this.handleNextClicked}
              handleBackClicked={this.handleBackClicked}
            />
          }
          { isSurveyCompleted === true &&
            <Complete />
          }

        </Grid>
      </div>
    );
  }

  getQuestions = () => {
    return [{"Id":1,"Title":"What phone do you use?","Options":[{"Title":"iPhone"},{"Title":"Android"},{"Title":"Windows Phone"}]},{"Id":2,"Title":"How old are you?","Options":[{"Title":"18 - 25 years old."},{"Title":"26 - 35 years old."},{"Title":"36 - 70 years old."},{"Title":"Over 70 years old."}]}];
  }
}

Survey.propTypes = {
  questions: PropTypes.array.isRequired,
  getQuestion: PropTypes.func.isRequired
}

export default Survey;
