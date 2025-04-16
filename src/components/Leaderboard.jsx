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
      <div className="bg-white/80 rounded-lg p-4 mt-4 border border-neutral-300 overflow-auto">
        <div className="flex items-center flex-col gap-2 justify-center mb-4">
          <h2 className="text-lg font-bold text-center">
            Top 10 Peserta Terbaik Pemenang Hadiah Special Customer Gathering
            2025
          </h2>
          <p>
            Anda berada di peringkat ke:{" "}
            <span className="bg-blue-500 px-2 py-1 rounded-lg text-white">
              30
            </span>
          </p>
        </div>

        <div className="mt-10 overflow-x-auto  scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
          <table className="min-w-[600px] w-full">
            <thead>
              <tr className="text-xs text-gray-700 whitespace-nowrap">
                <th className="py-2 text-left px-2">Peringkat</th>
                <th className="py-2 text-left px-2">Perusahaan</th>
                <th className="py-2 text-right px-2">Poin Kuis</th>
                <th className="py-2 text-right px-2">Poin Survei</th>
                <th className="py-2 text-right px-2">Rata-rata Jawaban Kuis</th>
                <th className="py-2 text-right px-2">Total Point</th>
              </tr>
            </thead>
            <tbody>
              {[...user]
                .sort(
                  (a, b) =>
                    b.quizPoints +
                    b.surveyPoints -
                    (a.quizPoints + a.surveyPoints)
                )
                .map((item, index) => (
                  <tr
                    key={item.id}
                    className={`whitespace-nowrap ${
                      index === 0
                        ? "bg-red-100 text-xl font-bold"
                        : index === 1
                        ? "bg-blue-100 text-lg font-semibold"
                        : index === 2
                        ? "bg-orange-100 text-base font-medium"
                        : index === 10
                        ? "border-2 border-blue-500" //  Style highlight current rank user
                        : ""
                    }`}
                  >
                    <td className="py-2 px-2">
                      {medals[index + 1]} {item.id}
                    </td>
                    <td className="py-2 px-2">{item.name}</td>
                    <td className="py-2 px-2 text-right">{item.quizPoints}</td>
                    <td className="py-2 px-2 text-right">
                      {item.surveyPoints}
                    </td>
                    <td className="py-2 px-2 text-right">
                      {item.averageTime} detik
                    </td>
                    <td className="py-2 px-2 text-right font-medium">
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
