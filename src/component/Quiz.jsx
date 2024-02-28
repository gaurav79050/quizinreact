import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { questions } from "../questions";
import { useState } from "react";

let Quiz = (props) => {
  const [quesnumber, setQuestionnumber] = useState(0);
  let handleOnchange = (ans) => {
    props.setAnswer(ans, quesnumber);
  };
  return (
    <Row className="vh-100 align-items-center">
      <Col></Col>
      <Col>
        <Card className="text-center">
          <Card.Header>Quiz App</Card.Header>
          <Card.Body>
            <Card.Title className="d-flex justify-content-start">
              {questions[quesnumber].question}
            </Card.Title>

            {questions[quesnumber].answers.map((ques, index) => {
              return (
                <div key={index} className="d-flex justify-content-start">
                  <input
                    type="radio"
                    name={quesnumber}
                    checked={props.selectedAnswer[quesnumber] === ques}
                    value={ques}
                    onChange={(e) => handleOnchange(e.target.value)}
                  />
                  {ques}

                  <br />
                </div>
              );
            })}
          </Card.Body>
          <Card.Footer className="d-flex justify-content-between">
            <Button
              variant="info"
              onClick={() =>
                setQuestionnumber((prev) => (prev != 0 ? prev - 1 : 0))
              }
            >
              {" "}
              &lt;
            </Button>
            {questions.length - 1 != quesnumber ? (
              <Button
                variant="info"
                onClick={() =>
                  setQuestionnumber((prev) =>
                    prev != questions.length - 1
                      ? prev + 1
                      : questions.length - 1
                  )
                }
              >
                &gt;
              </Button>
            ) : (
              <Button variant="info" onClick={props.handleSubmit}>
                Submit
              </Button>
            )}
          </Card.Footer>
        </Card>
      </Col>
      <Col></Col>
    </Row>
  );
};
export default Quiz;
