import Images from "../assets/exportAssets";
import { NotificationsNone, Language, Settings } from "@mui/icons-material";
const Navbar = () => {
  const icons = [
    { icon: NotificationsNone, badgeCount: 2 },
    { icon: Language, badgeCount: 2 },
    { icon: Settings },
  ];

  return (
    <div className="navbar">
      <div className="navContainer">
        <div className="navContainer__logo">FABICO</div>
        <div className="navContainer__iconsWrapper">
          {icons.map((item, index) => (
            <div className="navContainer__iconContainer" key={index}>
              <item.icon />
              {item.badgeCount ? (
                <span className="navContainer__iconBadge">
                  {item.badgeCount}
                </span>
              ) : null}
            </div>
          ))}
          <img
            src={Images.adminPhoto}
            alt="AdminPhoto"
            className="navContainer__image"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
