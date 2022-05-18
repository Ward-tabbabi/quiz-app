import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Index from "../screen/Play/Index";

const QuizList = () => {
  const navigate = useNavigate();
  const [quizs, setQuizs] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/quiz").then((data, err) => {
      setQuizs(data.data.quiz);
    });
  }, []);

  return (
    <div className="SQContainer">
      {quizs.map((el, i) => (
        <div
          onClick={() => navigate("/quizzes", { state: el })}
          className="SmallCard"
        >
          <p>{el.Name}</p>
          <h3>{el.Questions.length}</h3>
          {/* <Link key={i} to={`/quizzes/${el?._id}`}>
            <Index el={el} />
          </Link> */}
        </div>
      ))}
    </div>
  );
};

export default QuizList;
