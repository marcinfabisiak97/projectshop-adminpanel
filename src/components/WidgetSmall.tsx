import Images from "../assets/exportAssets";
import { Visibility } from "@mui/icons-material";
const WidgetSmall = () => {
  const usersList = [
    {
      image: Images.user1,
      altName: "user1",
      userName: "Zosia Nowak",
      userJobTitle: "Kucharka",
    },
    {
      image: Images.user2,
      altName: "user2",
      userName: "Adam Bebek",
      userJobTitle: "Rybak",
    },
    {
      image: Images.user3,
      altName: "user3",
      userName: "Karolina Wik",
      userJobTitle: "Kucharka",
    },
    {
      image: Images.user4,
      altName: "user4",
      userName: "Angela Rej",
      userJobTitle: "Kucharka",
    },
    {
      image: Images.user5,
      altName: "user5",
      userName: "Bogdan Klin",
      userJobTitle: "Kucharka",
    },
  ];

  return (
    <div className="widgetSmall">
      <h3 className="widgetSmall__title">New Joined Members</h3>
      <ul className="widgetSmall__list">
        {usersList.map((user, index) => (
          <li className="widgetSmall__listItem" key={index}>
            <img
              src={user.image}
              alt={user.altName}
              className="widgetSmall__image"
            />
            <div className="widgetSmall__user">
              <span className="widgetSmall__userName">{user.userName}</span>
              <span className="widgetSmall__userJobTitle">
                {user.userJobTitle}
              </span>
            </div>
            <button className="widgetSmall__button">
              <Visibility className="widgetSmall__icon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WidgetSmall;
