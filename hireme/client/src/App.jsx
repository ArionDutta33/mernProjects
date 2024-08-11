import Index from "./Pages/Index";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Show from "./Pages/Show";
import IndividualMessage from "./Components/IndividualMessage";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;
const App = () => {
  return (
    <Routes>
      <Route path="/hireme" element={<Index />} />
      <Route path="/:id/email-send" element={<IndividualMessage />} />
      <Route path="/hireme/:id" element={<Show />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;
