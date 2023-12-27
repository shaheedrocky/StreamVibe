import React from "react";
import "./TopBanner.css";
import Banner from "../../Assets/Images/Banner.png";
import Header from "../Header/Header";
import { colors } from "../../Utils";
import { FaPlay } from "react-icons/fa";

import Spinner from ".././../Assets/Images/Abstract Design.png";
const TopBanner = () => {
  return (
    <div>
      <div style={{ position: "absolute", width: "100%" }}>
        <Header />
        <img
          src={Spinner}
          alt=""
          style={{
            opacity: 0.5,
            margin: "auto",
            display: "flex",
            marginTop: "10%",
          }}
        />
        <h2
          style={{
            textAlign: "center",
            color: "white",
            fontSize: 40,
            marginTop: 20,
          }}
        >
          The Best Streaming Experience
        </h2>
        <p
          style={{
            textAlign: "center",
            color: colors.lightGrey,
            fontSize: 12,
            width: "80%",
            margin: "auto",
          }}
        >
          StreamVibe is the best streaming experience for watching your favorite
          movies and shows on demand, anytime, anywhere. With StreamVibe, you
          can enjoy a wide variety of content, including the latest
          blockbusters, classic movies, popular TV shows, and more. You can also
          create your own watchlists, so you can easily find the content you
          want to watch.
        </p>

        <button
          style={{
            height: 40,
            backgroundColor: colors.darkRed,
            border: "none",
            borderRadius: 5,
            padding: "0 10px",
            display: "flex",
            alignItems: "center",
            gap: 5,
            color: "white",
            margin: "auto",
            fontSize: 12,
            marginTop: 20,
            cursor: "pointer",
          }}
        >
          <FaPlay /> Start Watching Now
        </button>
      </div>
      <img
        src={Banner}
        alt="Banner"
        style={{
          width: "100%",
          zIndex: -1,
          position: "relative",
        }}
      />
    </div>
  );
};

export default TopBanner;
