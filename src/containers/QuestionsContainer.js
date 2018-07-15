import { connect } from "react-redux";
import Questions from "../components/Questions";
import { loadQuestions, submitAnswer } from "../actions";

const mapStateToProps = state => {
  return {
    questions: state.questions
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadQuestions: () => dispatch(loadQuestions()),
    submitAnswer: () => dispatch(submitAnswer())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Questions);
