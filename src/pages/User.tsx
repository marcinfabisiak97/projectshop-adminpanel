import { CalendarToday } from "@material-ui/icons";
import Images from "../assets/exportAssets";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import {
  LocationSearching,
  MailOutline,
  PhoneAndroid,
  UploadFile,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
const User = () => {
  return (
    <div className="user">
      <div className="user__titleContainer">
        <h2 className="user__title">Edit User</h2>
        <Link to="/newUser">
          <button className="user__addButton">Create</button>
        </Link>
      </div>
      <div className="user__container">
        <div className="user__display">
          <div className="user__displayTop">
            <img
              src={Images.user1}
              alt="user"
              className="user__displayTopImage"
            />
            <div className="user__displayTopTitle">
              <span className="user__displayTopUsername">Jola Nowak</span>
              <span className="user__displayTopUserJobTitle">Kucharz</span>
            </div>
          </div>
          <div className="user__displayBottom">
            <span className="user__dispalyBottomTitle">Account Details</span>
            <div className="user__displayBottomInfo">
              <PermIdentityIcon className="user__dispalyBottomIcon" />
              <span className="user__displayBottomInfoTitle">jolnowak123</span>
            </div>
            <div className="user__displayBottomInfo">
              <CalendarToday className="user__dispalyBottomIcon" />
              <span className="user__displayBottomInfoTitle">10.11.1997</span>
            </div>
            <span className="user__dispalyBottomTitle">Contact Details</span>
            <div className="user__displayBottomInfo">
              <PhoneAndroid className="user__dispalyBottomIcon" />
              <span className="user__displayBottomInfoTitle">
                +48 652 633 544
              </span>
            </div>
            <div className="user__displayBottomInfo">
              <MailOutline className="user__dispalyBottomIcon" />
              <span className="user__displayBottomInfoTitle">
                jolnowak123@gmail.com
              </span>
            </div>
            <div className="user__displayBottomInfo">
              <LocationSearching className="user__dispalyBottomIcon" />
              <span className="user__displayBottomInfoTitle">
                Warsaw Poland
              </span>
            </div>
          </div>
        </div>
        <div className="user__update">
          <span className="user__updateTitle">Edit</span>
          <form className="user__updateForm">
            <div className="user__updateFormLeft">
              <div className="user__updateFormItem">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  placeholder="jolnowak123"
                  className="user__updateFormInput"
                />
              </div>
              <div className="user__updateFormItem">
                <label htmlFor="fullname">Full Name</label>
                <input
                  type="text"
                  name="fullname"
                  placeholder="Jola Nowak"
                  className="user__updateFormInput"
                />
              </div>
              <div className="user__updateFormItem">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  placeholder="jolnowak123@gmail.com"
                  className="user__updateFormInput"
                />
              </div>
              <div className="user__updateFormItem">
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  name="phone"
                  placeholder="+48 652 633 544"
                  className="user__updateFormInput"
                />
              </div>
              <div className="user__updateFormItem">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  name="address"
                  placeholder="Warsaw Poland"
                  className="user__updateFormInput"
                />
              </div>
            </div>
            <div className="user__updateFormRight">
              <div className="user__updateFormRightUpload">
                <img
                  src={Images.user1}
                  alt="user1"
                  className="user__upadteFormRightImage"
                />

                <label htmlFor="file">
                  <UploadFile className="user__FormRightIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="user__updateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User;
