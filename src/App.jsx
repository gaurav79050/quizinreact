import "bootstrap/dist/css/bootstrap.min.css";
import Quiz from "./component/Quiz";
import "./App.css";
import Container from "react-bootstrap/Container";
import { useState } from "react";
import Result from "./component/Result";
function App() {
  const [showAnswer, setShowAnswer] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState([]);

  let handleSubmit = () => {
    setShowAnswer(true);
  };


  let setAnswer = (ans, quesnumber) => {
    setSelectedAnswer((prevSelectedAnswers) => ({
      ...prevSelectedAnswers,
      [quesnumber]: ans,
    }));
  };

  if(showAnswer) {
    return (
      <>
        <Container fluid>
           <Result selectedAnswer = {selectedAnswer}/>
        </Container>
      </>
    )
  }
  return (
    <>
      <Container fluid>
        <Quiz
          selectedAnswer={selectedAnswer}
          setAnswer={setAnswer}
          handleSubmit={handleSubmit}
        />
      </Container>
    </>
  );
}

export default App;
