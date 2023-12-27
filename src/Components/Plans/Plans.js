import React, { useState } from "react";
import { colors } from "../../Utils";

const Plans = () => {
  const [monthlyActive, setMonthlyActive] = useState(false);
  const [weeklyActive, setWeeklyActive] = useState(false);

  const PLANS_DATA = [
    {
      id: 0,
      title: "Basic Plan",
      desc: "Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.",
      amount: "400",
    },
    {
      id: 1,
      title: "Standard Plan",
      desc: "Access to a wider selection of movies and shows, including most new releases and exclusive content.",
      amount: "800",
    },
    {
      id: 2,
      title: "Premium Plan",
      desc: "Access to a widest selection of movies and shows, including all new releases and Offline Viewing.",
      amount: "1200",
    },
  ];
  return (
    <>
      <div
        style={{
          padding: "3% 5%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div className="left">
          <h2 style={{ fontSize: 20, color: "white" }}>
            Choose the plan that's right for you
          </h2>
          <p style={{ color: colors.lightGrey, width: "50%", fontSize: 11 }}>
            Join StreamVibe and select from our flexible subscription options
            tailored to suit your viewing preferences. Get ready for non-stop
            entertainment!
          </p>
        </div>
        <div
          className="right"
          style={{
            display: "flex",
            gap: 10,
            backgroundColor: "black",
            padding: 5,
            borderRadius: 5,
          }}
        >
          <p
            style={{
              color: monthlyActive ? "white" : colors.lightGrey,
              fontSize: 11,
              fontWeight: "400",
              backgroundColor: monthlyActive ? colors.dark : "transparent",
              padding: 5,
              borderRadius: 5,
              cursor: "pointer",
            }}
            onClick={() => {
              setMonthlyActive(!monthlyActive);
              setWeeklyActive(false); // Make sure the other option is set to false
            }}
          >
            Monthly
          </p>
          <p
            style={{
              color: weeklyActive ? "white" : colors.lightGrey,
              fontSize: 11,
              fontWeight: "400",
              backgroundColor: weeklyActive ? colors.dark : "transparent",
              padding: 5,
              borderRadius: 5,
              cursor: "pointer",
            }}
            onClick={() => {
              setWeeklyActive(!weeklyActive);
              setMonthlyActive(false); // Make sure the other option is set to false
            }}
          >
            Weekly
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {PLANS_DATA.map((item) => {
          return (
            <div
              style={{
                margin: "0 5%",
                color: "white",
                backgroundColor: "#1A1A1A",
                borderRadius: 10,
                padding: 10,
              }}
            >
              <h4>{item.title}</h4>
              <p
                style={{ color: colors.lightGrey, fontSize: 11, marginTop: 10 }}
              >
                {item.desc}
              </p>
              <p style={{ marginTop: 30 }}>
                ₹{item.amount}
                <span style={{ color: colors.lightGrey, fontSize: 11 }}>
                  /Month
                </span>
              </p>
              <button
                style={{
                  border: "1px solid #262626",
                  backgroundColor: "transparent",
                  padding: 5,
                  color: "white",
                  borderRadius: 5,
                  cursor: "pointer",
                  marginRight: 20,
                  marginTop: 10,
                }}
              >
                Start Free Trial
              </button>
              <button
                style={{
                  border: "none",
                  outline: "none",
                  backgroundColor: "red",
                  padding: 5,
                  color: "white",
                  borderRadius: 5,
                  cursor: "pointer",
                  marginTop: 10,
                }}
              >
                Choose Plan
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Plans;
