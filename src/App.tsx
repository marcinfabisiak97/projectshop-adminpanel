import "./App.scss";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/home/Home";
function App() {
  return (
    <div>
      <Navbar />
      <div className="mainContainer">
        <Sidebar />
        <Home />
      </div>
    </div>
  );
}

export default App;
