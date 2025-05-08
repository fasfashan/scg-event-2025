import React from "react";
import { user } from "../data/user";
import { Award } from "lucide-react";
export default function Leaderboard() {
  const medals = {
    1: "🏆",
    2: "🥈",
    3: "🥉",
  };
  const sortedUsers = [...user]
    .filter((item) => item.dealer === "CV. Cahaya Baru Sejahtera") // Filter hanya dealer CV. Cahaya Baru Sejahtera
    .sort(
      (a, b) => b.quizPoints + b.surveyPoints - (a.quizPoints + a.surveyPoints)
    );
  const top10Users = sortedUsers.slice(0, 10);
  return (
    <div className="bg-[url(/bg-livescore.jpg)] p-20  min-h-screen bg-cover bg-center">
      <div className="flex items-center gap-4">
        <div className="bg-gray-50/90 min-h0 rounded-lg w-full mt-20  m-auto p-12 border border-neutral-300">
          <div className="flex items-center justify-center flex-col gap-4 mb-4">
            <h2 className="text-4xl font-bold text-center">
              Top 10 Peserta Terbaik Pemenang Hadiah Special Customer Gathering
              2025
            </h2>
            <p className="text-2xl uppercase font-semibold">
              CV. Cahaya Baru Sejahtera
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full border-separate border-spacing-y-2">
              <thead>
                <tr className="text-lg text-gray-700">
                  <th className="py-2 font-normal text-gray-500 text-left">
                    Peringkat
                  </th>
                  <th className="py-2 font-normal text-gray-500 text-left">
                    Perusahaan
                  </th>
                  <th className="py-2 font-normal text-gray-500 text-right">
                    Poin Kuis
                  </th>
                  <th className="py-2 font-normal text-gray-500 text-right">
                    Rata-rata Jawaban Kuis
                  </th>
                </tr>
              </thead>
              <tbody>
                {top10Users
                  .filter((item) => item.dealer === "CV. Cahaya Baru Sejahtera") // Filter hanya dealer CV. Cahaya Baru Sejahtera
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
                          ? "bg-green-100" //  Style highlight current rank user
                          : ""
                      }`}
                    >
                      <td className="py-2 px-2">
                        {medals[index + 1]} {item.id}
                      </td>
                      <td className="py-2 px-2">{item.name}</td>
                      <td className="py-2 px-2 text-right">
                        {item.quizPoints}
                      </td>
                      <td className="py-2 px-2 text-right">
                        {item.averageTime} detik
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="bg-gray-50/90 min-h0 rounded-lg w-full mt-20  m-auto p-12 border border-neutral-300">
          <div className="flex items-center justify-center flex-col gap-4 mb-4">
            <h2 className="text-4xl font-bold text-center">
              Top 10 Peserta Terbaik Pemenang Hadiah Special Customer Gathering
              2025
            </h2>
            <p className="text-2xl uppercase font-semibold">
              PT. Makmur Anugerah Subur
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full border-separate border-spacing-y-2">
              <thead>
                <tr className="text-lg text-gray-700">
                  <th className="py-2 font-normal text-gray-500 text-left">
                    Peringkat
                  </th>
                  <th className="py-2 font-normal text-gray-500 text-left">
                    Perusahaan
                  </th>
                  <th className="py-2 font-normal text-gray-500 text-right">
                    Poin Kuis
                  </th>
                  <th className="py-2 font-normal text-gray-500 text-right">
                    Rata-rata Jawaban Kuis
                  </th>
                  <th className="py-2 font-normal text-gray-500 text-right">
                    Total Point
                  </th>
                </tr>
              </thead>
              <tbody>
                {[...user]
                  .filter((item) => item.dealer === "PT. Makmur Anugerah Subur") // Filter hanya dealer PT. Makmur Anugerah Subur
                  .sort(
                    (a, b) =>
                      b.quizPoints +
                      b.surveyPoints -
                      (a.quizPoints + a.surveyPoints)
                  )
                  .slice(0, 10)
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
                          ? "bg-green-100" //  Style highlight current rank user
                          : ""
                      }`}
                    >
                      <td className="py-2 px-2">
                        {medals[index + 1]} {index + 1}
                      </td>
                      <td className="py-2 px-2">{item.name}</td>
                      <td className="py-2 px-2 text-right">
                        {item.quizPoints}
                      </td>
                      <td className="py-2 px-2 text-right">
                        {item.averageTime} detik
                      </td>
                      <td className="py-2 px-2 text-right font-medium">
                        {item.quizPoints}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
