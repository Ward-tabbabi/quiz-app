import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Index from "../screen/Play/Index";

const QuizList = ({ setSearsh, searsh, setCatSearch, catSearch }) => {
  const navigate = useNavigate();
  const [quizs, setQuizs] = useState([]);
  console.log(catSearch);
  useEffect(() => {
    axios.get("http://localhost:5000/quiz").then((data, err) => {
      setQuizs(data.data.quiz);
    });
  }, []);
  //   const handleSearch = () => {
  //     !searsh.length
  //       ? setQuizs(
  //           quizs.filter((el) =>
  //             el.Name.toLocaleLowerCase().includes(searsh.toLocaleLowerCase())
  //           )
  //         )
  //       : setQuiz(quizs);
  return (
    <div className="SQContainer">
      {console.log("pssst" + catSearch)}
      {quizs
        .filter((l) => l?.Category?.toLowerCase() === catSearch.toLowerCase())
        .filter((el) => el.Name.toLowerCase().includes(searsh?.toLowerCase()))
        // .filter((el) => el.Name.toLowerCase().includes(searsh?.toLowerCase()))
        .map((el, i) => (
          <div
            onClick={() => navigate("/quizzes", { state: el })}
            className="SmallCard"
          >
            <p>{el.Name}</p>
            <h3>{el.Questions.length}</h3>
          </div>
        ))}
    </div>
  );
};

export default QuizList;
