import "./sidebar.scss";

function Sidebar() {
  return (
    <div className="container">
      <div className="item">
        <span>My Day</span>
      </div>
      <div className="item">
        <span>Important</span>
      </div>
      <div className="item">
        <span>Planned</span>
      </div>
      <div className="item">
        <span>Assigned</span>
      </div>
    </div>
  );
}

export default Sidebar;
