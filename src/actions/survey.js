import axios from 'axios';

export const REQUEST_QUESTIONS = 'REQUEST_QUESTIONS'
export const REQUEST_QUESTIONS_ERROR = 'REQUEST_QUESTIONS_ERROR'
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'

export const REQUEST_QUESTION = 'REQUEST_QUESTION'
export const REQUEST_QUESTION_ERROR = 'REQUEST_QUESTION_ERROR'
export const RECEIVE_QUESTION = 'RECEIVE_QUESTION'

export function getQuestions() {
  return (dispatch, getState) => {
    const serverlessSurveyUrl = "https://h8dt4pumdi.execute-api.us-west-2.amazonaws.com/Prod";

    dispatch(requestQuestions());

    axios
      .get(`${serverlessSurveyUrl}/questions`, {
        completed: false
      })
      .then(result => {
        dispatch(receiveQuestions(result.data));
      })
      .catch(err => {
        dispatch(getQuestionsError(err.message));
      });
    };
}

function requestQuestions() {
  return {
    type: REQUEST_QUESTIONS
  }
}

export function getQuestionsError(message) {
  return (dispatch, getState) => {
    dispatch(requestQuestionsError(message));
  }
}

function requestQuestionsError(message) {
  return {
    type: REQUEST_QUESTIONS_ERROR,
    message: message
  }
}

function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions: questions
  }
}

export function getQuestion(id) {
  return (dispatch, getState) => {
    const apiUrl = "/";

    dispatch(requestQuestion());

    console.log(`requesting questions...`);
    return fetch(
      `${apiUrl}/mortgages/lender/$`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      })
      .then(response => {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }

        return response.json();
      })
      .then(json => dispatch(recieveQuestion(json)))
  }
}

function requestQuestion() {
  return {
    type: REQUEST_QUESTION
  }
}

function recieveQuestion(json) {
  return {
    type: RECEIVE_QUESTION,
    json
  }
}

export function getQuestionError(message) {
  return (dispatch, getState) => {
    dispatch(requestQuestionError(message));
  }
}

function requestQuestionError(message) {
  return {
    type: REQUEST_QUESTION_ERROR,
    message: message
  }
}
