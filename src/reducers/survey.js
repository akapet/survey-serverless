import {
  REQUEST_QUESTIONS, RECEIVE_QUESTIONS
} from '../actions/survey'

const survey = (state = {
  isRequested: false,
  message: ""
}, action) => {
  switch (action.type) {
    case REQUEST_QUESTIONS: {
      state = {
        ...state,
        isRequested: true,
        message: ""
      }
      break;
    }

    case RECEIVE_QUESTIONS: {
      state = {
        ...state,
        isRequested: false,
        questions: action.questions
      }
      break;
    }

    default:
      break;
  }

  return state;
}

export default survey
