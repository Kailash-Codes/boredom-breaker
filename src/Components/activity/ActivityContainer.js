import React from "react";
import Button from "../home/Button";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import ReactLoading from "react-loading";

import ActivityCard from "./ActivityCard";
const ActivityContainer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const headings = ["Activity", "Type","Participants", "Price", "Accessibility"];
  const [activity, setActivity] = useState({});
  useEffect(() => {
    axios.get("https://www.boredapi.com/api/activity").then((data) => {
      setActivity(data.data);
      setIsLoading(false);
    });
  }, []);
  function handleClick() {
    window.location.reload();
  }
  return (
    <>
      {isLoading ? (
        <ReactLoading type="spinningBubbles" color="red" height={"20%"} width={"20%"} />
      ) : (
        <div className="border hover:border-red min-w-[100%] lg:min-w-[40%] md:min-w-[50%]  p-5 mt-5 bg-[#EAFFE4] rounded-xl shadow-lg shadow-cyan-500/30">
          <ActivityCard
            activityHead={headings[0]}
            activityBody={activity.activity}
            typeHead = {headings[1]}
            typeBody = {activity.type}
            participantsHead={headings[2]}
            participantsBody={activity.participants}
            accessibilityHead={headings[3]}
            priceBody={activity.price}
            priceHead={headings[4]}
            accessibilityBody={activity.accessibility}
          />
          <Button text="Next" onclick={handleClick} />
        </div>
      )}
      </>
  );
};

export default ActivityContainer;
