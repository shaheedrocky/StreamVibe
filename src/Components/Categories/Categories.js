import React from "react";
import "./Categories.css";
import { colors } from "../../Utils";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import Action from "../../Assets/Images/Action.png";
import Comedy from "../../Assets/Images/Comedy.png";
import Horror from "../../Assets/Images/Horror.png";
import Adventure from "../../Assets/Images/Adventure.png";
import Drama from "../../Assets/Images/Drama.png";

const Categories = () => {
  const CARD_DATA = [
    {
      id: 0,
      img_name: Action,
      title: "Action",
    },
    {
      id: 1,
      img_name: Adventure,
      title: "Adventure",
    },
    {
      id: 2,
      img_name: Comedy,
      title: "Comedy",
    },
    {
      id: 3,
      img_name: Drama,
      title: "Drama",
    },
    {
      id: 0,
      img_name: Horror,
      title: "Horror",
    },
  ];
  return (
    <>
      <div className="categories-container">
        <div className="title-container">
          <h2 style={{ color: "white", fontSize: 20 }}>
            Explore our wide variety of categories
          </h2>
          <p style={{ color: colors.lightGrey, width: "50%", fontSize: 11 }}>
            Whether you're looking for a comedy to make you laugh, a drama to
            make you think, or a documentary to learn something new
          </p>
        </div>
        <div className="right">
          <FaArrowLeft className="right-icon" />
          {[1, 1, 1, 1, 1].map((item) => {
            return <>-</>;
          })}
          <FaArrowRight className="right-icon" />
        </div>
      </div>

      <div className="categories-card">
        {/* <img src= alt="" /> */}
        {CARD_DATA?.map((item) => {
          return (
            <div
              className="card"
              style={{
                backgroundColor: "#1A1A1A",
                padding: 10,
                borderRadius: 10,
                marginTop: -45,
              }}
            >
              <img
                src={item?.img_name}
                alt=""
                height={200}
                width={200}
                style={{ borderRadius: 10 }}
              />
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  color: "white",
                  marginTop:10
                }}
              >
                <h4 style={{ color: "white", fontSize: 14 }}>{item?.title}</h4>
                <FaArrowRight />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Categories;
