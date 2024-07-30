import { Route, Routes } from "react-router-dom";
import IndexPage from "./Pages/IndexPage";
import LoginPage from "./Pages/LoginPage";
import Layout from "./Layout";
import RegisterPage from "./Pages/RegisterPage";
import axios from "axios";
import { UserContextProvider } from "./UserContext";
import ProfilePage from "./Pages/ProfilePage";
import PlacesPage from "./Pages/PlacesPage";
import PlacesForm from "./Pages/PlacesForm";
axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;
const App = () => {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/account" element={<ProfilePage />} />
          <Route path="/account/places" element={<PlacesPage />} />
          <Route path="/account/places/new" element={<PlacesForm />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
};

export default App;
//set cookie configs to same site none to recieve from all
