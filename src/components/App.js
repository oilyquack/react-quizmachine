import React from "react";
import QuestionsContainer from "../containers/QuestionsContainer";

class App extends React.Component {
  render() {
    return (
      <div>
        REDUX TRIVIA!
        <QuestionsContainer />
      </div>
    );
  }
}

export default App;
