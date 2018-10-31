import { connect } from 'react-redux'
import App from '../components/App'
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

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppContainer
