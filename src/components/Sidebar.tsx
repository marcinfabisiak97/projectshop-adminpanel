import {
  LineStyle,
  Timeline,
  TrendingUp,
  PersonOutline,
  Inventory,
  Paid,
  Assessment,
  MailOutline,
  Forum,
  Message,
  Work,
  ReportGmailerrorred,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
interface MenuItemInterface {
  title: string;
  items: {
    label: string;
    icon: React.ElementType;
    active?: boolean;
    link?: string;
  }[];
}
const Sidebar = () => {
  const menuItems: MenuItemInterface[] = [
    {
      title: "Dashboard",
      items: [
        { label: "Home", icon: LineStyle, active: true, link: "./" },
        { label: "Analytics", icon: Timeline },
        { label: "Sales", icon: TrendingUp },
      ],
    },
    {
      title: "Quick Menu",
      items: [
        { label: "Users", icon: PersonOutline, link: "./users" },
        { label: "Products", icon: Inventory, link: "./products" },
        { label: "Transactions", icon: Paid },
        { label: "Report", icon: Assessment },
      ],
    },
    {
      title: "Notifications",
      items: [
        { label: "Mail", icon: MailOutline },
        { label: "Feedback", icon: Forum },
        { label: "Message", icon: Message },
      ],
    },
    {
      title: "Staff",
      items: [
        { label: "Manage", icon: Work },
        { label: "Analytics", icon: Timeline },
        { label: "Report", icon: ReportGmailerrorred },
      ],
    },
  ];

  return (
    <div className="sidebar">
      <div className="sidebarContainer">
        {menuItems.map((menuItem, index) => (
          <div className="sidebarContainer__menu" key={index}>
            <h3 className="sidebarContainer__title">{menuItem.title}</h3>
            <ul className="sidebarContainer__list">
              {menuItem.items.map((item, i) =>
                item.link ? (
                  <Link to={item.link} key={i} className="link">
                    <li
                      className={`sidebarContainer__listItem  ${
                        item.active !== undefined ? "active" : ""
                      }`}
                    >
                      <item.icon className="sidebarContainer__listIcon" />
                      {item.label}
                    </li>
                  </Link>
                ) : (
                  <li
                    className={`sidebarContainer__listItem  ${
                      item.active !== undefined ? "active" : ""
                    }`}
                    key={i}
                  >
                    <item.icon className="sidebarContainer__listIcon" />
                    {item.label}
                  </li>
                )
              )}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
