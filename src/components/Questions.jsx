import React, { useRef, useState, useContext, useEffect } from "react";
import { Context } from "../context";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/adventure.svg";

function Questions({ answer, question, setAnswer, setQuestion, setResult }) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [correctAnswerIndex, setCorrectAnswerIndex] = useState(null);
  const navigate = useNavigate();

  const [questions, loading] = useContext(Context);
  const options = question?.options;
  const refs = useRef([]);
  const array = ["A", "B", "C", "D"];

  useEffect(() => {
    const checkAnswer = (answer, correctAnswerIndex, answerIndex) => {
      refs.current[correctAnswerIndex]?.classList.add("correct");
      answer !== question?.correctAnswer &&
        refs.current[answerIndex]?.classList.add("incorrect");
      answer?.length &&
        answer === question?.correctAnswer &&
        setResult((result) => [...result, answer]);
      answer?.length &&
        refs.current.map((ref) => ref.classList.remove("hover"));
    };

    setQuestion(questions[questionIndex]);
    checkAnswer(answer[1], correctAnswerIndex, answer[0]);
    answer.length &&
      setCorrectAnswerIndex(options?.indexOf(question.correctAnswer));
  }, [
    questionIndex,
    questions,
    setQuestion,
    navigate,
    question,
    correctAnswerIndex,
    answer,
    options,
    setResult,
  ]);

  const choseAnswer = (index) => {
    setAnswer([index, refs.current[index].children[1].innerHTML]);
  };

  const nextQuestion = () => {
    setQuestionIndex(questionIndex + 1);
    setAnswer([]);
    setCorrectAnswerIndex(null);
    refs.current[correctAnswerIndex]?.classList.remove("correct");
    refs.current[answer[0]]?.classList.remove("incorrect");
    refs.current.map((ref) => ref.classList.add("hover"));
  };

  const showResult = () => {
    navigate("/result");
    setAnswer([]);
    setCorrectAnswerIndex(null);
    refs.current[correctAnswerIndex]?.classList.remove("correct");
    refs.current[answer[0]]?.classList.remove("incorrect");
  };

  return (
    <div
      className="container-sm d-flex justify-content-center align-items-center"
      style={{ minHeight: "90vh", paddingTop: "60px" }}
    >
      {!loading ? (
        <div
          className="col-lg-4 col-md-6 col-sm-8 col-12"
          style={{ position: "relative" }}
        >
          <h3 className="title">QUIZ COUNTRY</h3>
          <Logo className="logo" />
          <div className="questions-wrapper">
            <p className="title-question">
              {question?.type === "capital" &&
                `${question?.question} is the capital of`}
            </p>
            {question?.type === "flag" && (
              <>
                <img
                  className="flag"
                  src={question?.question}
                  alt=""
                  width="100"
                ></img>
                <p className="title-question">
                  Which country does this flag belong to?
                </p>
              </>
            )}
            <ul>
              {options?.map((option, index) => (
                <li
                  className="option hover"
                  onClick={!answer.length ? () => choseAnswer(index) : null}
                  key={index}
                  ref={(element) => {
                    refs.current[index] = element;
                  }}
                >
                  <p>{array[index]}</p>
                  <p>{option}</p>
                </li>
              ))}
            </ul>
            <div className="buttons-container">
              {question && questionIndex !== 9
                ? answer.length !== 0 && (
                    <button
                      type="button"
                      className="btn button mt-3"
                      onClick={nextQuestion}
                    >
                      Next
                    </button>
                  )
                : answer.length !== 0 && (
                    <button
                      type="button"
                      className="btn button mt-3"
                      onClick={showResult}
                    >
                      Show Result
                    </button>
                  )}
            </div>
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
}

export default Questions;
