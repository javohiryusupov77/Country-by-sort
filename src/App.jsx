import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Carusel from "./components/Carusel";
import Header from "./components/header";
import HomePage from "./components/Homepage";
import AboutPage from "./components/About";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <br />
        <div>
          {/* <Carusel /> */}
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about/:coinId" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

 

function ContactPage() {
  return <h2>Contact Page</h2>;
}

export default App;
