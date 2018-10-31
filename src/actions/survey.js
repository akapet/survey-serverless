import fetch from 'cross-fetch'

export const REQUEST_QUESTIONS = 'REQUEST_QUESTIONS'
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'

export const REQUEST_QUESTION = 'REQUEST_QUESTION'
export const RECEIVE_QUESTION = 'RECEIVE_QUESTION'

export function getQuestions() {
  return (dispatch, getState) => {
    const apiUrl = "/";

    dispatch(requestQuestions());

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
      .then(json => dispatch(recieveQuestions(json)))
  }
}

function requestQuestions() {
  return {
    type: REQUEST_QUESTIONS
  }
}

function recieveQuestions(json) {
  return {
    type: RECEIVE_QUESTIONS,
    json
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
