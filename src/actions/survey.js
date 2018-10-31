import fetch from 'cross-fetch'

export const REQUEST_QUESTIONS = 'REQUEST_QUESTIONS'
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'

export function getQuestions() {
  return (dispatch, getState) => {
    const apiUrl = "/";

    dispatch(getQuestions())
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
      .then(json => dispatch(requestQuestions(json)))
  }
}

function requestQuestions(json) {
  return {
    type: REQUEST_QUESTIONS
  }
}
