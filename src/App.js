import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Body from "./components/body/Body";
import Card from "./components/body/card";
import Photo from "./components/body/photo";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <Photo />
      <Card />
      <Body />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
