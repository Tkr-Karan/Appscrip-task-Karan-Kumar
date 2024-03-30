import "./App.css";
import Footer from "./components/Layouts/Footer/Footer";
import Header from "./components/Layouts/Header/Header";
import DashBoard from "./components/Molecules/DashBoard/DashBoard";

function App() {
  return (
    <div className="App">
      <Header />
      <DashBoard />
      <Footer />
    </div>
  );
}

export default App;
