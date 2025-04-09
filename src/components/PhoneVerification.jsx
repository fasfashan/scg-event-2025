import React, { useState } from "react";
import { user } from "../data/user";
import { useNavigate } from "react-router-dom";
function PhoneVerification({ onClose, company }) {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");

  const handleVerify = (e) => {
    e.preventDefault();

    // Cari perusahaan yang sesuai di data user
    const companyData = user.find((u) => u.name === company.name);

    // Validasi nomor telepon
    if (companyData) {
      // Bandingkan nomor telepon yang diinput dengan nomor yang tersimpan
      if (phoneNumber.trim() === companyData.phoneNumber) {
        // Nomor telepon valid
        navigate("/dashboard");
      } else {
        // Nomor telepon tidak sesuai
        setError("Nomor telepon tidak sesuai dengan data perusahaan");
      }
    } else {
      setError("Data perusahaan tidak ditemukan");
    }
  };

  return (
    <div className="fixed min-h-screen inset-0 p-4 z-50 flex items-center justify-center bg-neutral-900/50">
      <div className="bg-white rounded-lg shadow-xl max-w-sm p-6">
        <h2 className="text-xl font-bold mb-4">Verifikasi nomor Anda</h2>
        <p className="text-sm text-gray-600 mb-6">
          Silahkan masukan nomer telfon terdaftar di Aplikasi Sahabat untuk
          memverifikasi identitas Anda
        </p>

        <form onSubmit={handleVerify}>
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Nomor telepon
            </label>
            <input
              type="tel"
              id="phone"
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
                setError(""); // Hapus pesan error saat user mengetik
              }}
              className="w-full text-sm shadow-inner px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., 081234567890"
              required
            />
            {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
            <p className="text-xs text-gray-500 mt-2">
              Nomor telepon untuk {company.name} adalah:{" "}
              {user.find((u) => u.name === company.name)?.phoneNumber ||
                "Tidak tersedia"}
            </p>
          </div>

          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="w-full mr-2 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Verify & Login
            </button>
            <button
              type="button"
              onClick={onClose}
              className="w-full ml-2 bg-gray-200 text-gray-700 py-2 rounded-md hover:bg-gray-300 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PhoneVerification;
