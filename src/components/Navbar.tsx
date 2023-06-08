import { adminPhoto } from "../assets/exportAssets";
import { NotificationsNone, Language, Settings } from "@mui/icons-material";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="container__logo">FABICO</div>
        <div className="container__iconsWrapper">
          <div className="container__iconContainer">
            <NotificationsNone />
            <span className="container__iconBadge">2</span>
          </div>
          <div className="container__iconContainer">
            <Language />
            <span className="container__iconBadge">2</span>
          </div>
          <div className="container__iconContainer">
            <Settings />
          </div>
          <img src={adminPhoto} className="container__image" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
