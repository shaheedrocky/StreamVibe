import React, { useState } from "react";
import Logo from "../../Assets/Images/Logo.png";
import "./Header.css";
import { CiSearch } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";
import { colors } from "../../Utils";

const Header = () => {
  const [active, setActive] = useState(0);
  return (
    <div className="header-container">
      <img
        src={Logo}
        height={50}
        width={150}
        style={{ objectFit: "contain" }}
      />
      <ul
        style={{
          backgroundColor: "#0F0F0F",
          padding: "8px",
          borderRadius: 10,
          border:"1px solid grey"
        }}
      >
        <li
          onClick={() => {
            setActive(0);
          }}
          style={{
            backgroundColor: active === 0 ? "#1A1A1A" : "transparent",
            padding: active === 0 ? 5 : 0,
            borderRadius: active === 0 ? 5 : 0,
            fontSize:12
          }}
        >
          Home
        </li>
        <li
          onClick={() => {
            setActive(1);
          }}
          style={{
            backgroundColor: active === 1 ? "#1A1A1A" : "transparent",
            padding: active === 1 ? 5 : 0,
            borderRadius: active === 1 ? 5 : 0,
            fontSize:12
          }}
        >
          Movies & Shows
        </li>
        <li
          onClick={() => {
            setActive(2);
          }}
          style={{
            backgroundColor: active === 2 ? "#1A1A1A" : "transparent",
            padding: active === 2 ? 5 : 0,
            borderRadius: active === 2 ? 5 : 0,
            fontSize:12
          }}
        >
          Support
        </li>
        <li
          onClick={() => {
            setActive(3);
          }}
          style={{
            backgroundColor: active === 3 ? "#1A1A1A" : "transparent",
            padding: active === 3 ? 5 : 0,
            borderRadius: active === 3 ? 5 : 0,
            fontSize:12
          }}
        >
          Subscription
        </li>
      </ul>
      <div className="notifi">
        <CiSearch
          style={{ color: "white", fontSize: "16px", cursor: "pointer" }}
        />
        <IoNotificationsOutline
          style={{
            color: "white",
            marginLeft: "20px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        />
      </div>
    </div>
  );
};

export default Header;
