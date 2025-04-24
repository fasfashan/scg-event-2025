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
          <div className="mb-4">
            <h1 className="text-xl font-bold text-center mb-2">
              Selamat Datang PT Abadi Jaya <br /> di Special Customer Gathering
            </h1>{" "}
            <p className="text-center ">
              Kumpulkan point Anda dengan hadiah menarik untuk 10 orang pemenang
              peserta terbaik
            </p>
          </div>
          <PointsInfo />
          <ActivityTabs />
          <Leaderboard
            dealerName={"CV. Cahaya Baru Sejahtera"}
            filterDealer={"CV. Cahaya Baru Sejahtera"}
            currentUserId={23}
            showUserRank={true} // Aktifkan tampilan peringkat hanya di komponen pertama
          />
        </div>
      </div>
    </Layout>
  );
}
