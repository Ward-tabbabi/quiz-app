import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { initializeUseSelector } from "react-redux/es/hooks/useSelector";
import QuizList from "./QuizList";

const Home = ({ setSearsh, searsh }) => {
  const Cat = [
    "IT",
    "Mathematics",
    "History Geography",
    "Physical",
    "Sport",
    "Countries and capitals",
    "Wild world",
    "Cinema and series",
    "Astronomy",
    "Languages",
    "Cars and bikes",
  ];
  const [catSearch, setCatSearch] = useState("");

  return (
    <div className="linding">
      <div className="Home">
        <h1>
          Test your general culture and enrich <br />
          your information background
        </h1>
        <button>Login</button>
        <button className="btnR">Register</button>

        <QuizList
          setSearsh={setSearsh}
          searsh={searsh}
          catSearch={catSearch}
          setCatSearch={setCatSearch}
        />
      </div>
      <div className="list-categories">
        <h1>Categories</h1>
        <ul>
          {Cat.map((el) => (
            <li
              onClick={() => {
                setCatSearch(el);
              }}
            >
              {el}
            </li>
          ))}
          {/* <li>IT</li>
          <li>Mathematics</li>
          <li>History Geography</li>
          <li>Physical</li>
          <li>Sport</li>
          <li>Countries and capitals</li>
          <li>Wild world</li>
          <li>Cinema and series</li>
          <li>Astronomy</li>
          <li>Languages</li>
          <li>Cars and bikes</li> */}
        </ul>
      </div>
    </div>
  );
};

export default Home;
