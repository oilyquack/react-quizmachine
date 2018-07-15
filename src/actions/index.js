export const actions = {
  ANSWER_SUBMITTED: "ANSWER_SUBMITTED",
  QUESTIONS_LOADING: "QUESTIONS_LOADING",
  QUESTIONS_LOADED: "QUESTIONS_LOADED"
};

function onQuestionLoading() {
  return {
    type: "QUESTIONS_LOADING"
  };
}

function onQuestionsLoaded(questions) {
  return {
    type: actions.QUESTIONS_LOADED,
    questions
  };
}

const fetchQuestions = (type = "multiple") => dispatch => {
  dispatch(onQuestionLoading);

  return fetch(
    `https://opentdb.com/api.php?amount=1&type=${type}&encode=url3986`
  )
    .then(response => response.json())
    .then(result => {
      dispatch(onQuestionsLoaded(result.results));
    });
};

export const loadQuestions = type => dispatch => {
  dispatch(fetchQuestions(type));
};

export function submitAnswer(answer) {
  return {
    type: actions.ANSWER_SUBMITTED,
    answer
  };
}
