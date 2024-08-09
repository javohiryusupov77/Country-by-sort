import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Carusel from "./components/Carusel";
import RightDrawer from "./components/Drawer";
import Header from "./components/header";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <div>
          <Carusel />
        </div>
        <div>
          <RightDrawer />
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

function HomePage() {
  return <h2>Home Page</h2>;
}

function AboutPage() {
  return <h2>About Page</h2>;
}

function ContactPage() {
  return <h2>Contact Page</h2>;
}

export default App;
