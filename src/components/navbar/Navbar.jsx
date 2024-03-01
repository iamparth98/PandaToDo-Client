import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import "./navbar.scss";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="left">
          <span className="title">DoPanda</span>
        </div>
        <div className="middle">
          <div className="search">
            <SearchIcon className="searchIcon" />
            <div className="searchInput">
              <input
                type="text"
                name="search"
                id="search"
                placeholder="search"
              />
            </div>
          </div>
        </div>
        <div className="right">
          <SettingsIcon className="icon" />
          <PersonIcon className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
