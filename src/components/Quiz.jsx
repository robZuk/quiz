import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Result from "./Result";
import Questions from "./Questions";
import Footer from "./Footer";

function Game() {
  const [question, setQuestion] = useState();
  const [answer, setAnswer] = useState([]);
  const [result, setResult] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/quiz"
          element={
            <Questions
              setAnswer={setAnswer}
              setQuestion={setQuestion}
              answer={answer}
              question={question}
              setResult={setResult}
            />
          }
        />
        <Route
          path="/result"
          element={<Result result={result} setResult={setResult} />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Game;
