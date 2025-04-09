import React from "react";
import Layout from "../layout";
import Navigation from "../components/Navigation";
import BoothList from "../components/BoothList";
import Leaderboard from "../components/Leaderboard";

export default function Dashboard() {
  return (
    <Layout>
      <div className="w-full max-w-md">
        <Navigation />
        <BoothList />
        <Leaderboard />
      </div>
    </Layout>
  );
}
