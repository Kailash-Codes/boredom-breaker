import React from "react";
import ActivityContainer from "./Components/activity/ActivityContainer";
import MainContainer from "./Components/home/MainContainer";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

const App = () => {
  return (
    <div className="flex justify-center ">

      <Routes>
        <Route path="/" element={<MainContainer />} />
        <Route path="/activities" element={<ActivityContainer />} />
      </Routes>
    </div>
  );
};

export default App;
