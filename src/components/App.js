import React from "react";
import QuestionsContainer from "../containers/QuestionsContainer";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <h1>LET'S GET QUIZICAL!</h1>
        <QuestionsContainer />
      </div>
    );
  }
}

export default App;
