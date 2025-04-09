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
          <div className="bg-white rounded-lg p-4 border border-neutral-300 mb-4">
            <h1 className="text-xl font-bold text-center mb-2">
              Selamat Datang <br /> Special Customer Gathering
            </h1>{" "}
            <p className="text-center text-neutral-500">
              Tukarkan point Anda dengan hadiah menarik untuk 10 orang pemenang
              peserta terbaik
            </p>
          </div>
          <PointsInfo />
          <ActivityTabs />
          <Leaderboard />
          <Rundown />
        </div>
      </div>
    </Layout>
  );
}
