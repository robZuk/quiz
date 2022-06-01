import React, { useRef, useState, useEffect } from "react";

function Game({ questions, setQuestion, handleToggle }) {
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState();
  // const [data, setData] = useState();
  // const [question, setQuestion] = useState(
  //   questions !== undefined && questions[index]
  // );
  console.log(answer);
  const question = questions[index];

  // useEffect(() => {
  //   // setQuestion(questions[index]);
  //   // setData(questions);
  // }, [index]);

  // console.log(data);

  const handleClick = (index) => {
    setAnswer(refs.current[index].children[0].innerHTML);
    // handleToggle(question);
    // console.group(index);
  };

  const nextQuestion = () => {
    setIndex(index + 1);
  };
  const refs = useRef([]);

  // console.log(answer);

  const options = question?.options;

  // console.log(answer);
  // const refs = [aRef, bRef];
  // refs.forEach((ref) => {
  //   console.log(ref.current.children[1].innerHTML);
  // });
  // console.log(questions);
  return (
    <div
      className="container-sm d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="col-lg-6 col-md-6 col-sm-8 col-12">
        {/* {questions.map(
          (question) =>
            question.type === "capital" &&
            `${question.question} is the capital of`
        )} */}
        {question?.type === "capital" &&
          `${question?.question} is the capital of`}
        {question?.type === "flag" && (
          <>
            <img
              src={question?.question}
              alt=""
              width="100"
              // height="60"
            ></img>
            <p>Which country does this flag belong to?</p>
          </>
        )}
        <ul className="">
          {options?.map((option, index) => (
            <li
              className="option"
              onClick={() => handleClick(index)}
              key={index}
              ref={(element) => {
                refs.current[index] = element;
              }}
            >
              {/* <p>{questions[index] && "A"}</p> */}
              <p>{option}</p>
            </li>
          ))}

          {/* <li className="option" ref={aRef} onClick={handleClick} id="A">
            <p id="A">{questions[index] && "A"}</p>
            <p id="A">{questions[index]?.options[0]}</p>
          </li>
          <li className="option" ref={bRef} onClick={handleClick} id="B">
            <p id="B">{questions[index] && "B"}</p>
            <p id="B">{questions[index]?.options[1]}</p>
          </li>
          <li className="option" ref={cRef} onClick={handleClick} id="C">
            <p id="C">{questions[index] && "C"}</p>
            <p id="C">{questions[index]?.options[2]}</p>
          </li>
          <li className="option" ref={dRef} onClick={handleClick} id="D">
            <p id="D">{questions[index] && "D"}</p>
            <p id="D">{questions[index]?.options[3]}</p>
          </li> */}
        </ul>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={nextQuestion}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Game;
