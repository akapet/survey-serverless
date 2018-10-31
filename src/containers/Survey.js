import { connect } from 'react-redux'
import Survey from '../components/Survey'
import { getQuestions } from '../actions/survey'

const mapStateToProps = (state, ownProps) => {
  return {

  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getQuestions: () => {
      dispatch(getQuestions())
    }
  }
}

const SurveyContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Survey)

export default SurveyContainer
