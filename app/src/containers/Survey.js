import { connect } from 'react-redux'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Survey from '../components/Survey'
import { getQuestions, getQuestion } from '../actions/survey'

class SurveyContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getQuestions())
  }

  render() {
    const { questions, getQuestion } = this.props;

    return (
      <Survey questions={questions} getQuestion={getQuestion}/>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { survey } = state

  return {
    questions: survey.questions
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatch,
    getQuestion: (id) => {
      dispatch(getQuestion(id))
    }
  }
}

SurveyContainer.propTypes = {
  questions: PropTypes.array.isRequired,
  getQuestion: PropTypes.func.isRequired
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SurveyContainer)
