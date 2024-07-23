import Home from "./Home/Home";
import Course from "./Components/Course";
import { Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <>
      {/* <Home />
      <Course /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Course />} />
      </Routes>
    </>
  );
};

export default App;
