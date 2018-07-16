import React from "react";
import QuestionsContainer from "../containers/QuestionsContainer";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <h1>REDUX TRIVIA!</h1>
        <QuestionsContainer />
      </div>
    );
  }
}

export default App;
