import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
const App = () => {
  return (
    <div>
      <Navbar className="container" />
      <Hero className="container" />
    </div>
  );
};

export default App;
