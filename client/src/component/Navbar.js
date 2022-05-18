import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
const Navbar = () => {
  const [ping, setPing] = useState(false);
  const [isAuth, setIsAuth] = useState();
  useEffect(() => {
    setIsAuth(localStorage.getItem("token"));
  }, [isAuth]);

  return (
    <div className="navigation">
      {/*  <img
        src="https://img.freepik.com/vecteurs-libre/quiz-logo_2728-12.jpg"
        alt=""
      /> */}
      <h1 className="logo1" style={{ color: "white" }}>
        QUIZ
      </h1>
      <div className="list">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About as</Link>
          </li>
          <li>
            <Link to="/quizzes">Quizzes</Link>
          </li>
          <li>
            <Link to="/addquiz">AddQuiz</Link>
          </li>
        </ul>
      </div>
      <div className="filter">
        <input type="text" placeholder="what is your fav categorie" />
      </div>
      <div className="sign">
        {isAuth ? (
          <button
            onClick={() => {
              localStorage.removeItem("token");
              setTimeout(() => {
                window.location.reload();
              }, 1000);
            }}
          >
            Log OUt
          </button>
        ) : (
          <>
            <button>
              <Link to="login">Login</Link>
            </button>
            <button>
              <Link to="register">Register</Link>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
