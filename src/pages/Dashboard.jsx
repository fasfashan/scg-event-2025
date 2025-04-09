import React from "react";
import Leaderboard from "../components/Leaderboard";
import ActivityTabs from "../components/ActivityTabs";
import PointsInfo from "../components/PointsInfo";
import Rundown from "../components/Rundown";
import Layout from "../layout";
export default function Dashboard() {
  return (
    <Layout>
      <div className="w-full max-w-md">
        <div className="mt-10">
          <PointsInfo />
          <ActivityTabs />
          <Leaderboard />
          <Rundown />
        </div>
      </div>
    </Layout>
  );
}
