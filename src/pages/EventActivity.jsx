import React from "react";
import Layout from "../layout";
import Navigation from "../components/Navigation";
import BoothSection from "../components/BoothSection";
import BoothList from "../components/Boothlist";
import Rundown from "../components/Rundown";

export default function Dashboard() {
  return (
    <Layout>
      <div className="w-full max-w-md">
        <div className="mt-10">
          <Navigation />
          <BoothList />
          <Rundown />
        </div>
      </div>
    </Layout>
  );
}
