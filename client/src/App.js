import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddQuestion from "./component/AddQuestion";
import AddQuiz from "./component/AddQuiz";
import Login from "./component/Login";
import Register from "./component/Register";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/addquiz" element={<AddQuiz />} />
        <Route path="/addquestion" element={<AddQuestion />} />
      </Routes>
    </div>
  );
}

export default App;
