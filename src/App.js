import "./App.css";
import React, { useState, useCallback } from "react";
import Result from "./components/Result";
// import axios from "axios";

import useFetch from "./hooks/useFetch";
import useQuestion from "./hooks/useQuestions";
import Game from "./components/Game";

function App() {
  const [answer, setAnswer] = useState();
  const [question, setQuestion] = useState(true);
  const [result, setResult] = useState(0);

  // const handleToggle = (question) => {
  //   setQuestion(question);
  // };

  const handleToggle = useCallback(
    (question) => {
      if (question) {
        setQuestion(question);
      }
    },
    [question]
  );

  // const addTodo = useCallback(
  //   (question) => {
  //     setQuestion(() => question);
  //   },
  //   [setQuestion]
  // );

  // console.log(result);
  // console.log(question);

  // async function fetchData() {
  //   const data = await axios
  //     .get("https://restcountries.com/v3.1/all")
  //     // .then((response) => getQuestions(response.data));
  //     .then((response) => getQuestions(response.data));
  //   return data;
  // }

  // fetchData(data);
  const { data, loading } = useFetch("https://restcountries.com/v3.1/all", {});

  const { questions } = useQuestion(data);
  // console.log(questions);

  return (
    <div className="App">
      <Game
        questions={questions}
        setAnswer={setAnswer}
        handleToggle={handleToggle}
        // setQuestion={setQuestion}
      />
      <Result question={question} answer={answer} />
    </div>
  );
}

export default App;
