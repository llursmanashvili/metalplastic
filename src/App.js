import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Body from "./components/body/Body";
import Card from "./components/body/card";
import Photo from "./components/body/photo";
import Contact from "./components/navbar/contact/Contact";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <Routes>
        <Route path="/" element={[<Photo />, <Card />, <Body />]} />
        <Route path="/contact" element={[<Contact />]} />
      </Routes>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
