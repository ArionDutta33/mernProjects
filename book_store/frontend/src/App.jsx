import Home from "./Home/Home";
import Courses from "./Courses/Courses";
import { Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <>
      {/* <Home />
      <Course /> */}
      <div className="dark:bg-slate-900 dark:text-white">
        {" "}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Courses />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
