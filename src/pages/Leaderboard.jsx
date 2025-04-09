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
    <div className="bg-[url(/bg-landscape.jpg)] p-20  min-h-screen bg-cover bg-center">
      <div className="bg-gray-50 min-h0 rounded-lg w-full mt-20  m-auto p-12 border border-neutral-300">
        <div className="flex items-center justify-center mb-4">
          <Award className="h-6 w-6 text-yellow-500 mr-2" />
          <h2 className="text-4xl font-bold text-center">
            10 most active participant winner
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full border-separate border-spacing-y-2">
            <thead>
              <tr className="text-lg text-gray-700">
                <th className="py-2 font-normal text-gray-500 text-left">
                  Rank
                </th>
                <th className="py-2 font-normal text-gray-500 text-left">
                  Company
                </th>
                <th className="py-2 font-normal text-gray-500 text-right">
                  Quiz Point
                </th>
                <th className="py-2 font-normal text-gray-500 text-right">
                  Survey Point
                </th>
                <th className="py-2 font-normal text-gray-500 text-right">
                  Total Points
                </th>
              </tr>
            </thead>
            <tbody>
              {user.map((item) => (
                <tr
                  key={item.id}
                  className={` ${
                    item.id === 1
                      ? "bg-red-100 font-bold"
                      : item.id === 2
                      ? "bg-blue-100 font-semibold"
                      : item.id === 3
                      ? "bg-orange-100 font-medium"
                      : ""
                  }`}
                >
                  <td className="py-3 px-1">
                    {medals[item.id]}
                    {item.id}
                  </td>
                  <td className="py-3 px-1">{item.name}</td>
                  <td className="py-3 px-1 text-right">{item.quizPoints}</td>
                  <td className="py-3 px-1 text-right">{item.surveyPoints}</td>
                  <td className="py-3 px-1 text-right font-medium">
                    {item.quizPoints + item.surveyPoints}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
