import React from "react";

const NewUser = () => {
  return (
    <div className="newUser">
      <h2 className="newUser__title">New User</h2>
      <form action="" className="newUser__form">
        <div className="newUser__formItem">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" />
        </div>
        <div className="newUser__formItem">
          <label htmlFor="fullname">Full Name</label>
          <input type="text" id="fullname" />
        </div>
        <div className="newUser__formItem">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>
        <div className="newUser__formItem">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <div className="newUser__formItem">
          <label htmlFor="phone">Phone</label>
          <input type="text" id="phone" />
        </div>
        <div className="newUser__formItem">
          <label htmlFor="address">Address</label>
          <input type="text" id="address" />
        </div>
        <div className="newUser__formItem">
          <label>Gender</label>
          <div className="newUser__gender">
            <input type="radio" name="gender" id="male" value="male" />
            <label htmlFor="male">male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label htmlFor="female">female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label htmlFor="other">other</label>
          </div>
        </div>
        <div className="newUser__formItem">
          <label>Active</label>
          <select className="newUser__select" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newUser__button">Create</button>
      </form>
    </div>
  );
};

export default NewUser;
