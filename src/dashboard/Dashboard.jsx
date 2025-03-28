import React from "react";
import Leaderboard from "../components/Leaderboard";
import ActivityTabs from "../components/ActivityTabs";
import PointsInfo from "../components/PointsInfo";
function Dashboard() {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="mt-10">
        <ActivityTabs />
        <PointsInfo />
        <Leaderboard />
      </div>
    </div>
  );
}

export default Dashboard;
