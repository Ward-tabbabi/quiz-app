import React, { useState } from "react";

const AddQuestion = ({ nbr, quizz, setQuizz }) => {
  const [question, setQuestion] = useState({});
  const [show, setShow] = useState(true);
  const [index, setIndex] = useState(0);
  const [Q, setQ] = useState([]);
  const [answers, setAnswers] = useState([]);
  const handleNext = (i) => {
    i < nbr - 1 && setIndex(index + 1);
    i === nbr - 2 && setShow(!show);
    setQ([...Q]);
  };

  const handlePrevious = (i) => {
    i > 0 && setIndex(index - 1);
    i === nbr - 1 && setShow(!show);
  };

  const createAnsewrs = (e, i) => {
    console.log(e.target.value);
    var s = answers;
    console.log(answers)
    // const s = answers;
    s[i] = e.target.value;
    console.log("======", s);
    setAnswers(s);
    console.log(answers);
  };

  return (
    <div className="QuestionInputs">
      {Array(Number(nbr))
        .fill(1)
        .map(
          (el, i) =>
            i === index && (
              <div key={i}>
                <button className="Num">{i + 1}</button>
                <div>
                  <input
                    type="text"
                    placeholder="create a Question"
                    onChange={(e) => setQ(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="answer number 1"
                    onChange={(e, i) => createAnsewrs(e, i)}
                  />
                  <input
                    type="text"
                    placeholder="answer number 2"
                    onChange={(e) =>
                      setQuestion({ ...question, Categorie: e.target.value })
                    }
                  />
                  <input
                    type="text"
                    placeholder="answer number 3"
                    onChange={(e) =>
                      setQuestion({ ...question, Categorie: e.target.value })
                    }
                  />
                  <input
                    type="text"
                    placeholder="answer number 4"
                    onChange={(e) =>
                      setQuestion({ ...question, Categorie: e.target.value })
                    }
                  />
                </div>
                <div className="buttons">
                  <button className="Prev" onClick={() => handlePrevious(i)}>
                    PREVIOUS
                  </button>
                  {show ? (
                    <button className="Next" onClick={() => handleNext(i)}>
                      NEXT
                    </button>
                  ) : (
                    <button className="Fin">FINISH</button>
                  )}
                </div>
              </div>
            )
        )}
    </div>
  );
};

export default AddQuestion;
