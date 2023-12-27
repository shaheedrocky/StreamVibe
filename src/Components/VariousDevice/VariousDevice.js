import React from "react";
import { colors } from "../../Utils";
import { IoPhonePortrait } from "react-icons/io5";
import { FaTablet } from "react-icons/fa6";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { FaLaptopCode } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
import { PiVirtualRealityFill } from "react-icons/pi";

const VariousDevice = () => {
  const VARIOUS_DEVICE = [
    {
      id: 0,
      title: "Smartphones",
      desc: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
      image: <IoPhonePortrait />,
    },
    {
      id: 1,
      title: "Tablet",
      desc: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
      image: <FaTablet />,
    },
    {
      id: 2,
      title: "Smart TV",
      desc: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
      image: <PiTelevisionSimpleBold />,
    },
    {
      id: 3,
      title: "Laptops",
      desc: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
      image: <FaLaptopCode />,
    },
    {
      id: 4,
      title: "Gaming Console",
      desc: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
      image: <IoGameController />,
    },
    {
      id: 5,
      title: "VR Headsets",
      desc: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
      image: <PiVirtualRealityFill />,
    },
  ];
  return (
    <>
      <div style={{ padding: "5%" }}>
        <h2 style={{ color: "white", fontSize: 20 }}>
          We Provide you streaming experience across various devices.
        </h2>
        <p style={{ color: colors.lightGrey, fontSize: 11, width: "50%" }}>
          With StreamVibe, you can enjoy your favorite movies and TV shows
          anytime, anywhere. Our platform is designed to be compatible with a
          wide range of devices, ensuring that you never miss a moment of
          entertainment.
        </p>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          padding: "0 5%",
          marginTop: -30,
          gap: 15,
        }}
      >
        {VARIOUS_DEVICE.map((item) => {
          return (
            <div
              className="device-card"
              style={{
                width: "calc(33.33% - 16px)",
                color: "white",
                boxSizing: "border-box",
                background:
                  "linear-gradient(to left bottom, rgba(229, 0, 0, 0.5), transparent, transparent, transparent)",
                padding: 20,
                marginBottom: 20,
                gap: 10,
                borderRadius: 10,
                border: "1px solid #1A1A1A",
              }}
            >
              <h4>
                <span
                  style={{
                    color: "red",
                    backgroundColor: "#1A1A1A",
                    padding:5,
                    marginRight:5,
                    borderRadius:10
                  }}
                >
                  {item.image}
                </span>{" "}
                {item?.title}
              </h4>
              <p
                style={{
                  color: colors.lightGrey,
                  fontSize: 11,
                  marginLeft: "10%",
                  marginTop: 10,
                }}
              >
                {item?.desc}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default VariousDevice;
