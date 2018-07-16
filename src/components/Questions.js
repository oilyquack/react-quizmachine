import React from "react";

const difficulties = ["easy", "medium", "hard"];

class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showClue: false };
  }

  componentDidMount() {
    this.props.loadQuestions();
  }

  handleAnswer(answer) {
    this.props.submitAnswer(answer);
    this.setState({ showClue: false });
  }

  changeDifficulty(difficulty) {
    this.props.changeDifficulty(difficulty);
    this.setState({ showClue: false });
  }

  showClue() {
    this.setState({ showClue: true });
  }

  render() {
    const { question, answers, score, loading, difficulty, clue } = this.props;
    const { showClue } = this.state;

    return (
      <div>
        <div className="app__score" />
        <h2>Score: {score}</h2>
        <div />
        <div className="button-group">
          {difficulties.map(d => {
            return (
              <button
                key={`answer-${d}`}
                onClick={() => this.changeDifficulty(d)}
                disabled={difficulty === d}
              >
                {d.toUpperCase().charAt(0) + d.substr(1)}
              </button>
            );
          })}
        </div>
        <hr />
        {loading ? (
          <h4>LOADING...</h4>
        ) : (
          <div>
            <p>{question}</p>

            {answers.map((answer, i) => {
              return (
                <button
                  key={`answer-${i}`}
                  onClick={() => this.handleAnswer(answer)}
                  disabled={showClue && answer === clue}
                >
                  {answer}
                </button>
              );
            })}

            <hr />

            {showClue ? (
              <p>It's not "{clue}"</p>
            ) : (
              <button onClick={() => this.showClue()}>Need a clue?</button>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default Questions;
