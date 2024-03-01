import "./App.scss";
import Main from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="todo">
      <div className="todoContainer">
        <Navbar />
        <Main />
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default App;
