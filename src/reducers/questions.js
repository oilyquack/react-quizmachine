import { actions } from "../actions";

const initialState = {
  questions: [],
  answer: ""
};

function questions(state = initialState, action) {
  switch (action.type) {
    case actions.QUESTIONS_LOADED:
      return Object.assign({}, state, { questions: action.questions });

    case actions.ANSWER_SUBMITTED:
      return Object.assign({}, state, { answer: action.answer });

    default:
      return state;
  }
}

export default questions;
