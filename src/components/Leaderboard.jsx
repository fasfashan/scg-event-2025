import React from "react";
import { user } from "../data/user";
import { Award } from "lucide-react";

export default function Leaderboard({
  dealerName,
  filterDealer,
  currentUserId,
  showUserRank = false,
}) {
  const medals = {
    1: "🏆",
    2: "🥈",
    3: "🥉",
  };

  // Urutkan semua user berdasarkan total poin
  const sortedUsers = [...user]
    .filter((item) => !filterDealer || item.dealer === filterDealer)
    .sort(
      (a, b) => b.quizPoints + b.surveyPoints - (a.quizPoints + a.surveyPoints)
    );

  // Dapatkan ranking pengguna saat ini
  const currentUserRank =
    sortedUsers.findIndex((item) => item.id === currentUserId) + 1;

  // Ambil 10 teratas
  const top10Users = sortedUsers.slice(0, 10);

  // Cek apakah user saat ini ada di top 10
  const isCurrentUserInTop10 = currentUserRank <= 10;

  // Jika user tidak di top 10 dan showUserRank aktif, tambahkan ke daftar
  const displayedUsers = [...top10Users];
  if (showUserRank && !isCurrentUserInTop10 && currentUserId) {
    // Tambahkan pemisah jika user tidak ada di top 10
    const currentUser = sortedUsers.find((item) => item.id === currentUserId);
    if (currentUser) {
      displayedUsers.push({ id: "separator", isSeparator: true });
      displayedUsers.push(currentUser);
    }
  }

  return (
    <>
      <div className="bg-white/80 rounded-lg p-4 mt-4 border border-neutral-300 overflow-auto">
        <div className="flex items-center flex-col gap-2 justify-center mb-4">
          <h2 className="text-lg font-bold text-center">
            Top 10 Peserta Terbaik Pemenang Hadiah Special Customer Gathering
            2025
          </h2>
          <p className="text-lg uppercase font-semibold">{dealerName}</p>

          {/* Tampilkan peringkat hanya jika showUserRank aktif */}
          {showUserRank && (
            <p>
              Anda berada di peringkat ke:{" "}
              <span className="bg-blue-500 px-2 py-1 rounded-lg text-white">
                {currentUserRank}
              </span>
            </p>
          )}
        </div>

        <div className="mt-10 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
          <table className="min-w-[600px] w-full">
            <thead>
              <tr className="text-xs text-gray-700 whitespace-nowrap">
                <th className="py-2 text-left px-2">Peringkat</th>
                <th className="py-2 text-left px-2">Perusahaan</th>
                <th className="py-2 text-right px-2">Poin Kuis</th>
                <th className="py-2 text-right px-2">Rata-rata Jawaban Kuis</th>
              </tr>
            </thead>
            <tbody>
              {displayedUsers.map((item) => {
                // Jika ini adalah baris pemisah, tampilkan baris dengan titik-titik
                if (item.isSeparator) {
                  return (
                    <tr
                      key="separator"
                      className="border-t border-b border-dashed border-gray-300"
                    >
                      `
                    </tr>
                  );
                }

                // Index asli untuk peringkat
                const originalIndex = sortedUsers.findIndex(
                  (u) => u.id === item.id
                );
                const rank = originalIndex + 1;
                const isCurrentUser = item.id === currentUserId;

                return (
                  <tr
                    key={item.id}
                    className={`whitespace-nowrap ${
                      rank === 1
                        ? "bg-red-100 text-xl font-bold"
                        : rank === 2
                        ? "bg-blue-100 text-lg font-semibold"
                        : rank === 3
                        ? "bg-orange-100 text-base font-medium"
                        : showUserRank && isCurrentUser
                        ? "bg-green-100" // Highlight user hanya jika showUserRank aktif
                        : ""
                    }`}
                  >
                    <td className="py-2 px-2">{medals[rank] || rank}</td>
                    <td className="py-2 px-2">{item.name}</td>
                    <td className="py-2 px-2 text-right">{item.quizPoints}</td>
                    <td className="py-2 px-2 text-right">
                      {item.averageTime} detik
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
