import React from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as LogoWinners } from "../assets/winners.svg";

function Result({ result, setResult }) {
  const navigate = useNavigate();

  const tryAgain = () => {
    navigate("/quiz");
    setResult([]);
  };

  return (
    <>
      <div
        className="container-sm d-flex justify-content-center align-items-center"
        style={{ minHeight: "90vh", paddingTop: "20px" }}
      >
        <div className="col-lg-4 col-md-6 col-sm-8 col-12">
          <h3 className="title">QUIZ COUNTRY</h3>

          <div className="result-wrapper">
            <LogoWinners className="logo-winners" />
            <h1 className="my-3">Results</h1>
            <p>
              You have got <span>{[...new Set(result)].length}</span> correct
              answer
            </p>
            <button
              type="button"
              className="btn button mt-3"
              onClick={tryAgain}
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Result;
