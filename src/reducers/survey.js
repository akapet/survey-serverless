import {
  REQUEST_QUESTIONS, REQUEST_QUESTIONS_ERROR, RECEIVE_QUESTIONS, REQUEST_QUESTION, REQUEST_QUESTION_ERROR, RECEIVE_QUESTION
} from '../actions/survey'

const survey = (state = {
  isRequested: false,
  message: "",
  questions: []
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

    case REQUEST_QUESTIONS_ERROR: {
      state = {
        ...state,
        isRequested: true,
        message: action.message
      }
      break;
    }

    case REQUEST_QUESTION: {
      state = {
        ...state,
        isRequested: false,
        questions: action.questions
      }
      break;
    }

    case REQUEST_QUESTIONS: {
      state = {
        ...state,
        isRequested: true,
        message: ""
      }
      break;
    }

    case REQUEST_QUESTION_ERROR: {
      state = {
        ...state,
        isRequested: true,
        message: action.message
      }
      break;
    }

    case RECEIVE_QUESTION: {
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
