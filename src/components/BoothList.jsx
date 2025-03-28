import React, { useState, useRef } from "react";
import { booth } from "../data/booth"; // Pastikan booth.js di-import

export default function BoothList() {
  const [selectedBooth, setSelectedBooth] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);

  // Buka popup dan set booth yang dipilih
  const openPopup = (booth) => {
    setSelectedBooth(booth);
    setIsPopupOpen(true);
    setOtp(["", "", "", ""]); // Reset OTP input
  };

  // Tutup popup
  const closePopup = () => {
    setIsPopupOpen(false);
  };

  // Handle input OTP
  const handleChange = (index, event) => {
    const value = event.target.value;
    if (!/^\d?$/.test(value)) return; // Hanya angka 0-9

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Pindah ke input berikutnya jika ada
    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // Cek kode OTP
  const handleSubmit = () => {
    const enteredCode = otp.join(""); // Gabungkan input jadi string
    if (enteredCode === selectedBooth.code.toString()) {
      alert("Kode benar! Lanjut ke halaman berikutnya.");
      closePopup();
      // Arahkan ke halaman lain di sini
    } else {
      alert("Kode salah! Silakan coba lagi.");
    }
  };

  return (
    <div>
      <div className="mt-4 border border-neutral-300 rounded-lg p-4 bg-white ">
        <h1 className="text-xl font-semibold text-center">Booth</h1>
        <p className="mt-2 text-sm text-gray-500 text-center">
          Kunjungi tiap booth dan dapatkan point dengan bermain game!
        </p>
      </div>
      <div className="grid mt-4 grid-cols-3 gap-2 bg-white border border-neutral-300 rounded-lg p-4">
        {booth.map((booth) => (
          <button
            key={booth.id}
            className="p-4 w-fit hover:bg-gray-100 transition-all cursor-pointer bg-gray-50 mt-4 gap-2 flex flex-col items-center border border-neutral-300 rounded-lg"
            onClick={() => openPopup(booth)}
          >
            <img src="/booth-icon.svg" alt="Booth Icon" />
            <p className="font-medium text-sm">Booth {booth.id}</p>
          </button>
        ))}
      </div>

      {/* Pop-up Input OTP */}
      {isPopupOpen && (
        <div className="fixed  min-h-screen inset-0 p-4 z-50 flex items-center justify-center bg-neutral-900/50">
          <div className="bg-white w-full p-6 rounded-lg max-w-sm shadow-lg text-center">
            <h2 className="text-lg font-bold mb-4">Masukan 4 digit code</h2>
            <div className="flex justify-center gap-2 mb-4">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  value={digit}
                  maxLength="1"
                  onChange={(e) => handleChange(index, e)}
                  className="w-12 h-12 text-center border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ))}
            </div>
            <p className="text-sm text-gray-500 mb-2">
              Kode yang benar:{" "}
              <span className="font-bold">{selectedBooth.code}</span>
            </p>
            <button
              onClick={handleSubmit}
              disabled={otp.includes("")}
              className={`w-full py-2 mt-2 rounded-lg ${
                otp.includes("")
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-blue-500 text-white"
              }`}
            >
              Lanjutkan
            </button>
            <button onClick={closePopup} className="mt-2 text-red-500">
              Batal
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
