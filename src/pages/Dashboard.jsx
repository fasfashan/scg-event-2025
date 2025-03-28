import React from "react";
import Leaderboard from "../components/Leaderboard";
import ActivityTabs from "../components/ActivityTabs";
import PointsInfo from "../components/PointsInfo";
import Layout from "../layout";
function Dashboard() {
  return (
    <Layout>
      <div className="w-full max-w-md">
        <div className="mt-10">
          <ActivityTabs />
          <PointsInfo />
          <Leaderboard />
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;
