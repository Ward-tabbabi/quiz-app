import React from "react";
import QuizList from "./QuizList";

const Home = () => {
  return (
    <div className="linding">
      <div className="Home">
        <h1>
          Test your general culture and enrich <br />
          your information background
        </h1>
        <button>Login</button>
        <button className="btnR">Register</button>

        <QuizList />
      </div>
      <div className="list-categories">
        <h1>Categories</h1>
        <ul>
          <li>IT</li>
          <li>Mathematics</li>
          <li>History Geography</li>
          <li>Physical</li>
          <li>Sport</li>
          <li>Countries and capitals</li>
          <li>Wild world</li>
          <li>Cinema and series</li>
          <li>Astronomy</li>
          <li>Languages</li>
          <li>Cars and bikes</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
