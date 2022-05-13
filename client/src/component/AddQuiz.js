import React, { useState } from "react";
import AddQuestion from "./AddQuestion";

const AddQuiz = () => {
  const [quest, setQuest] = useState(<AddQuestion nbr={2} />);
  const [show, setShow] = useState(true);
  const [nbr, setNbr] = useState(2)
  const [quizz, setQuizz] = useState({
    Name: "",
    Subject: "",
    Categorie: "",
    Questions:[]
  });
  const [nameErr, setNameErr] = useState("");
  const [categorieErr, setCategorieErr] = useState("");
  const [subjectErr, setSubjectErr] = useState("");
  const createModals = async (nbr) => {
    await setQuest(<AddQuestion nbr={nbr} quizz={quizz} setQuizz={setQuizz}/>);
    await setShow(!show);
  };

  const validate = () => {
    if (quizz.Name === "") {
      setNameErr("Champ obligatoire");
    } else {
      setNameErr("");
    }
    if (quizz.Categorie === "") {
      setCategorieErr("Champ obligatoire");
    } else {
      setCategorieErr("");
    }
    if (quizz.Subject === "") {
      setSubjectErr("Champ obligatoire");
    } else {
      setSubjectErr("");
    }

    if (quizz.Name !== "" && quizz.Categorie !== "" && quizz.Subject !== "") {
      createModals(nbr);
    }
  };

  return show ? (
    <div className="Quiz">
      <h1>Categorie</h1>
      <div className="QuizInputs">
        <input
          type="text"
          placeholder="Quiz Name"
          onChange={(e) => setQuizz({ ...quizz, Name: e.target.value })}
        />
        <p>{nameErr}</p>
        <input
          type="text"
          placeholder="Quiz Categorie"
          onChange={(e) => setQuizz({ ...quizz, Categorie: e.target.value })}
        />
        <p>{categorieErr}</p>
        <input
          type="text"
          placeholder="Quiz Subject"
          onChange={(e) => setQuizz({ ...quizz, Subject: e.target.value })}
        />
        <p>{subjectErr}</p>
        <input
          type="text"
          placeholder="Quiz Overview"
          onChange={(e) => setQuizz({ ...quizz, Overview: e.target.value })}
        />

        <input
          type="text"
          placeholder="Quiz image"
          onChange={(e) => setQuizz({ ...quizz, image: e.target.value })}
        />

        <input
          type="number"
          min="2"
          max="15"
          defaultValue={2}
          onChange={(e) => setNbr(e.target.value )}
        />
      </div>

      <button className="btn-next" onClick={() => validate()}>
        NEXT
      </button>
    </div>
  ) : (
    quest
  );
};

export default AddQuiz;