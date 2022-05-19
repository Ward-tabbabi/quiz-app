// import { Button } from "antd";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./play.css";

const QuestionCard = () => {
  const location = useLocation();
  const questions = location.state;
  const [Questions, setQuestions] = useState(questions);
  const [cureentQ, setCurrentQ] = useState(0);
  const [showresult, setshowresult] = useState(false);
  const [score, setscore] = useState(0);

  const handleAnswerBtnClick = (correct, ind) => {
    console.log(correct);
    if (correct === ind) {
      alert("correct answer");
      setscore(score + 1);
    }

    const nextQuestion = cureentQ + 1;
    if (nextQuestion < Questions.length) {
      setCurrentQ(nextQuestion);
    } else {
      setshowresult(true);
    }
  };

  return (
    <>
      {showresult ? (
        <div style={{ marginTop: 180 }} className="result">
          <h1>
            your score is
            <span className="space">
              {score} / {Questions.length}
            </span>
          </h1>
          <h2>See you next time !</h2>
          <br />
        </div>
      ) : (
        <div className="ques-card" style={{ marginTop: 50 }}>
          <div className="head-card">
            <h1>
              Question
              <span className="space">
                {cureentQ + 1}/{Questions?.length}
              </span>
            </h1>
            <h3>{Questions[cureentQ]?.Title}</h3>
          </div>
          <div className="options">
            <button
              onClick={() => {
                handleAnswerBtnClick(Questions[cureentQ]?.rightIndex, 1);
              }}
            >
              {" "}
              <span>1-</span> {Questions[cureentQ]?.answers[0]}
            </button>
            <button
              onClick={() => {
                handleAnswerBtnClick(Questions[cureentQ]?.rightIndex, 2);
              }}
            >
              {" "}
              <span>2-</span> {Questions[cureentQ]?.answers[1]}
            </button>
            <button
              onClick={() => {
                handleAnswerBtnClick(Questions[cureentQ]?.rightIndex, 3);
              }}
            >
              <span>3-</span> {Questions[cureentQ]?.answers[2]}
            </button>
            <button
              onClick={() => {
                handleAnswerBtnClick(Questions[cureentQ]?.rightIndex, 4);

                // console.log(Questions?.answers[Questions.rightIndex-1]);
              }}
            >
              {" "}
              <span>4-</span> {Questions[cureentQ]?.answers[3]}
            </button>
          </div>
          <br />
          <button
            className="next"
            onClick={() => {
              handleAnswerBtnClick();
            }}
          >
            next
          </button>
        </div>
      )}
    </>
  );
};

export default QuestionCard;
