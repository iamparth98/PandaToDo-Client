import Sidebar from "../sidebar/Sidebar";
import TaskBox from "../taskbox/TaskBox";
import "./main.scss";

function Main() {
  return (
    <div className="mainContainer">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="taskbox">
        <TaskBox />
      </div>
    </div>
  );
}

export default Main;
