import "./App.scss";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
function App() {
  return (
    <div>
      <Navbar />
      <div className="mainContainer">
        <Sidebar />
        <div className="others">others</div>
      </div>
    </div>
  );
}

export default App;
