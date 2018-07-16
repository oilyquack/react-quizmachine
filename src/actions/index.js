export const QUESTIONS_LOADING = "QUESTIONS_LOADING";
export const QUESTIONS_LOADED = "QUESTIONS_LOADED";
export const INCREMENT_SCORE = "INCREMENT_SCORE";
export const RESET_SCORE = "RESET_SCORE";
export const UPDATE_DIFFICULTY = "UPDATE_DIFFICULTY";

/* Simple Action Creators */
export const onQuestionLoading = () => ({
  type: QUESTIONS_LOADING
});

export const onQuestionsLoaded = questionResponse => ({
  type: QUESTIONS_LOADED,
  questionResponse
});

export const incrementScore = () => ({
  type: INCREMENT_SCORE
});

export const resetScore = () => ({
  type: RESET_SCORE
});

export const updateDifficulty = difficulty => ({
  type: UPDATE_DIFFICULTY,
  difficulty
});

/* "Thunk" actions */

const fetchQuestions = () => (dispatch, getState) => {
  dispatch(onQuestionLoading());

  const difficulty = getState().questions.difficulty;

  return fetch(
    `https://opentdb.com/api.php?amount=1&type=multiple&difficulty=${difficulty}&encode=url3986`
  )
    .then(response => response.json())
    .then(result => {
      const [question] = result.results || [];
      dispatch(onQuestionsLoaded(question));
    });
};

export const loadQuestions = type => dispatch => {
  dispatch(fetchQuestions(type));
};

export const submitAnswer = answer => (dispatch, getState) => {
  const { correctAnswer } = getState().questions;

  if (correctAnswer === answer) {
    dispatch(incrementScore());
    dispatch(fetchQuestions());
  } else {
    dispatch(resetScore());
    dispatch(fetchQuestions());
  }
};

export const changeDifficulty = difficulty => dispatch => {
  dispatch(updateDifficulty(difficulty));
  dispatch(resetScore());
  dispatch(fetchQuestions());
};
