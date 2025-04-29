"use client";

import React, { useState, useEffect } from "react";
import Layout from "../layout";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    namaToko: "",
    namaPeserta: "",
    noTelepon: "",
    registrasiPeserta: "",
    eventKota: "",
    dealer: "",
  });

  const [showToast, setShowToast] = useState(false);
  // Initialize isRegistered state with a default value
  const [isRegistered, setIsRegistered] = useState(false);

  // Use useEffect to safely access localStorage after component mounts
  useEffect(() => {
    // Check localStorage on component mount
    const registrationStatus = localStorage.getItem("isRegistered") === "true";
    setIsRegistered(registrationStatus);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save to localStorage that user has registered
    localStorage.setItem("isRegistered", "true");
    setIsRegistered(true);

    // Show toast notification
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  // Render content safely
  const renderContent = () => {
    if (isRegistered) {
      return (
        <div className="p-6">
          <div
            className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <strong className="font-bold">Registrasi Berhasil!</strong>
            <span className="block sm:inline">
              {" "}
              Anda telah terdaftar untuk event ini.
            </span>
          </div>
        </div>
      );
    }

    return (
      <>
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800">
            Formulir Registrasi
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Silakan isi data registrasi dengan lengkap
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="p-6 space-y-4">
            {/* Nama Toko */}
            <div className="space-y-2">
              <label
                htmlFor="namaToko"
                className="block text-sm font-medium text-gray-700"
              >
                Nama Toko
              </label>
              <input
                id="namaToko"
                name="namaToko"
                type="text"
                placeholder="Masukkan nama toko"
                value={formData.namaToko}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Nama Owner */}
            <div className="space-y-2">
              <label
                htmlFor="namaOwner"
                className="block text-sm font-medium text-gray-700"
              >
                Nama Peserta
              </label>
              <input
                id="namaPeserta"
                name="namaPeserta"
                type="text"
                placeholder="Masukkan nama peserta"
                value={formData.namaPeserta}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* No.Tlp/Whatsapp */}
            <div className="space-y-2">
              <label
                htmlFor="noTelepon"
                className="block text-sm font-medium text-gray-700"
              >
                No.Tlp/Whatsapp
              </label>
              <input
                id="noTelepon"
                name="noTelepon"
                type="text"
                placeholder="Masukkan nomor telepon/whatsapp"
                value={formData.noTelepon}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Registrasi Peserta */}
            <div className="space-y-2">
              <label
                htmlFor="registrasiPeserta"
                className="block text-sm font-medium text-gray-700"
              >
                Registrasi Peserta
              </label>
              <select
                id="registrasiPeserta"
                name="registrasiPeserta"
                value={formData.registrasiPeserta}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="" disabled>
                  Pilih jumlah peserta
                </option>
                <option value="1">1 orang</option>
                <option value="2">2 orang</option>
                <option value="3">3 orang</option>
              </select>
            </div>

            {/* Event Kota */}
            <div className="space-y-2">
              <label
                htmlFor="eventKota"
                className="block text-sm font-medium text-gray-700"
              >
                Event Kota
              </label>
              <select
                id="eventKota"
                name="eventKota"
                value={formData.eventKota}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="" disabled>
                  Pilih kota event
                </option>
                <option value="cianjur">Cianjur</option>
              </select>
            </div>

            {/* Dealer */}
            <div className="space-y-2">
              <label
                htmlFor="dealer"
                className="block text-sm font-medium text-gray-700"
              >
                Dealer
              </label>
              <select
                id="dealer"
                name="dealer"
                value={formData.dealer}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="" disabled>
                  Pilih dealer
                </option>
                <option value="CBS">CBS</option>
                <option value="MAS">MAS</option>
              </select>
            </div>
          </div>

          {/* Form Footer */}
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
              Daftar Sekarang
            </button>
          </div>
        </form>
      </>
    );
  };

  return (
    <Layout>
      <div className="bg-white rounded-lg shadow-md overflow-hidden mt-10">
        {/* Render content based on registration status */}
        {renderContent()}

        {/* Custom Toast Notification */}
        {showToast && (
          <div className="bg-green-500 text-white px-6 py-3 rounded-md shadow-lg">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <div>
                <h3 className="font-bold">Registrasi Berhasil</h3>
                <p className="text-sm">Data Anda telah berhasil disimpan.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
