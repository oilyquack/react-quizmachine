import shuffle from "shuffle-array";

import {
  QUESTIONS_LOADED,
  QUESTIONS_LOADING,
  INCREMENT_SCORE,
  RESET_SCORE,
  UPDATE_DIFFICULTY
} from "../actions";

const initialState = {
  question: null,
  correctAnswer: null,
  answers: [],
  score: 0,
  loading: false,
  difficulty: "easy"
};

function questions(state = initialState, action) {
  switch (action.type) {
    case QUESTIONS_LOADED:
      return Object.assign({}, state, {
        question: decodeURIComponent(action.questionResponse.question),
        correctAnswer: decodeURIComponent(
          action.questionResponse.correct_answer
        ),
        answers: shuffle(
          [
            ...action.questionResponse.incorrect_answers,
            action.questionResponse.correct_answer
          ].map(decodeURIComponent)
        ),
        clue: shuffle(
          action.questionResponse.incorrect_answers.map(decodeURIComponent)
        )[0],
        loading: false
      });

    case INCREMENT_SCORE:
      return Object.assign({}, state, { score: state.score + 1 });

    case RESET_SCORE:
      return Object.assign({}, state, { score: 0 });

    case QUESTIONS_LOADING:
      return Object.assign({}, state, { loading: true });

    case UPDATE_DIFFICULTY:
      return Object.assign({}, state, { difficulty: action.difficulty });

    default:
      return state;
  }
}

export default questions;
