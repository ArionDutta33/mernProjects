import Home from "./Home/Home";
import Courses from "./Courses/Courses";
import { Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <>
      {/* <Home />
      <Course /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
      </Routes>
    </>
  );
};

export default App;
