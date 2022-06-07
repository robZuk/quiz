import React, { StrictMode } from "react";
import { Context } from "./context.js";
import useFetch from "./hooks/useFetch";
import useCreateQuestion from "./hooks/useCreateQuestions";
import Quiz from "./components/Quiz";

function App() {
  const { data, loading } = useFetch("https://restcountries.com/v3.1/all", {});

  const { questions } = useCreateQuestion(data);

  return (
    <StrictMode>
      <Context.Provider value={[questions, loading]}>
        <div className="app" style={{ minHeight: "100vh" }}>
          <Quiz />
        </div>
      </Context.Provider>
    </StrictMode>
  );
}

export default App;
