import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";
import Timer from "../components/Timer";
export default function Booth() {
  const navigate = useNavigate();
  const { id } = useParams(); // Ambil id dari URL
  // Fungsi untuk navigasi ke halaman quiz sesuai booth yang dikunjungi
  const handleClick = () => {
    navigate(`/dashboard/event-activity/booth/${id}/quiz`);
  };

  return (
    <div className="min-h-screen bg-[url(/bg-potrait.jpg)] bg-cover bg-center max-w-md m-auto p-4">
      <div className="flex justify-between items-center">
        <img src="/logo.svg" alt="" />
        <Timer />
        <h1 className="px-2 py-1 w-fit bg-white text-black rounded-md border border-neutral-300">
          Booth {id}
        </h1>
      </div>
      <Navigation />
      <div className="bg-white/80 mt-4 border border-neutral-300 rounded-lg p-4">
        <h1 className="text-xl font-semibold mb-2">Kuis</h1>
        <p className="">
          Kumpulkan point yang bisa Anda tukarkan dengan hadiah menarik di
          Special Customer Gethering 2025 :
        </p>
        <ul className="mt-6 text-sm font-medium list-disc list-inside space-y-2">
          <li>
            Waktu kuis 20 detik dengan 5 detik waktu baca untuk setiap soal
          </li>
          <li>⁠Total kuis terdiri dari 3 pertanyaan acak</li>
          <li>
            Setiap pertanyaan yang berhasil terjawab dengan benar akan mendapat
            point
          </li>
          <li>
            Besaran point terhitung dari kecepatan menjawab (semakin cepat //
            eslint-disable-next-line no-irregular-whitespace,
            no-irregular-whitespace menjawab dengan benar, semakin besar point
            yang Anda dapatkan)
          </li>
        </ul>
        <button
          onClick={handleClick}
          className="w-full mt-6 py-2 rounded-lg bg-blue-500 text-white"
        >
          Mulai kuis
        </button>
      </div>
    </div>
  );
}
