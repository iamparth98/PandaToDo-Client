import "./App.css";
import Item from "./components/Item";

function App() {
  return (
    <div className="todo">
      <div className="container">
        <div className="todoWrapper">
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
        <br />
        <div className="doneWrapper">
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </div>
    </div>
  );
}

export default App;
