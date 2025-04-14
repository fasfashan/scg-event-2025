import React from "react";
import { user } from "../data/user";
import { Award } from "lucide-react";
export default function Leaderboard() {
  const medals = {
    1: "🏆",
    2: "🥈",
    3: "🥉",
  };
  return (
    <>
      <div className="bg-white/80 rounded-lg p-4 mt-4 border border-neutral-300">
        <div className="flex items-center justify-center mb-4">
          <h2 className="text-lg font-bold text-center">
            Top 10 Peserta Terbaik Pemenang Hadiah Special Customer Gathering
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="text-xs text-gray-700">
                <th className="py-2 text-left">Rank</th>
                <th className="py-2 text-left">Company</th>
                <th className="py-2 text-right">Quiz Point</th>
                <th className="py-2 text-right">Survey Point</th>
                <th className="py-2 text-right">Total Points</th>
              </tr>
            </thead>
            <tbody>
              {user.map((item) => (
                <tr
                  key={item.id}
                  className={` text-xs ${
                    item.id === 1
                      ? "bg-red-100 font-bold"
                      : item.id === 2
                      ? "bg-blue-100 font-semibold"
                      : item.id === 3
                      ? "bg-orange-100 font-medium"
                      : ""
                  }`}
                >
                  <td className="py-2 px-1">
                    {medals[item.id]}
                    {item.id}
                  </td>
                  <td className="py-2 px-1">{item.name}</td>
                  <td className="py-2 px-1 text-right">{item.quizPoints}</td>
                  <td className="py-2 px-1 text-right">{item.surveyPoints}</td>
                  <td className="py-2 px-1 text-right font-medium">
                    {item.quizPoints + item.surveyPoints}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
