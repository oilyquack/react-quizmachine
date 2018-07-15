import React from "react";

class Questions extends React.Component {
  componentDidMount() {
    this.props.loadQuestions();
  }

  render() {
    const { questions, loadQuestions, onAnswer } = this.props;

    console.log("questions", questions);

    return (
      <div>
        <h2>Question</h2>
        {questions.questions.map(item => {
          return (
            <div key={item.question}>
              <p>{decodeURIComponent(item.question)}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Questions;
