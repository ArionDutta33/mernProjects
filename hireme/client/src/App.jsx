import Index from "./Pages/Index";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Show from "./Pages/Show";
axios.defaults.baseURL = "http://localhost:3000";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/hireme/:id" element={<Show />} />
    </Routes>
  );
};

export default App;
