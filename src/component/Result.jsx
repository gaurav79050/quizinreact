import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { questions } from "../questions";
import React from 'react'
let Result = (props) => {
  let count = 0;
  {
    questions.forEach((question, index) => {
      if (question.c_answer == props.selectedAnswer[index]) {
        count++;
      }
    });
  }
  return (
    <>
      <Row>
        <Col></Col>
        <Col>
          <Card className="text-center">
            <Card.Header>
              Your Score : {count} / {questions.length}
            </Card.Header>
            <Card.Body>
              {questions.map((question, index) => {
                return (
                  <React.Fragment key = {index}>
                    <Card.Title className="d-flex justify-content-start">
                      {`${index + 1}. ${question.question}`}
                    </Card.Title>
                    <Card.Text>
                      <span> Correct Answer : {question.c_answer} </span> <br />
                      <span> Your Answer :</span>
                      <span
                        style={{
                          color:
                            props.selectedAnswer[index] == question.c_answer
                              ? "green"
                              : "red",
                        }}
                      >
                        {props.selectedAnswer[index]
                          ? props.selectedAnswer[index]
                          : "Not Attempted"}
                      </span>
                    </Card.Text>
                  </React.Fragment>
                );
                
              })}
            </Card.Body>
           
          </Card>
        </Col>
        <Col></Col>
      </Row>
    </>
  );
};
export default Result;
