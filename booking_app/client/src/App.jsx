import { Route, Routes } from "react-router-dom";
import IndexPage from "./Pages/IndexPage";

const App = () => {
  return (
    <Routes>
      <Route index element={<IndexPage />} />
    </Routes>
  );
};

export default App;
