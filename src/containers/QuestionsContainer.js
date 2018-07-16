import { connect } from "react-redux";
import Questions from "../components/Questions";
import { loadQuestions, submitAnswer, changeDifficulty } from "../actions";

const mapStateToProps = ({
  questions: { question, answers, difficulty, loading, score, clue }
}) => ({
  question,
  answers,
  score,
  loading,
  difficulty,
  clue
});

const mapDispatchToProps = {
  loadQuestions,
  submitAnswer,
  changeDifficulty
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Questions);
