import React, { useState } from "react";
import { user } from "../data/user";
import PhoneVerification from "./PhoneVerification"; // Adjust import path as needed
import { Link } from "react-router-dom";
function Login() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showPhoneVerification, setShowPhoneVerification] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();

    if (searchTerm.trim()) {
      setIsSearching(true);
      // Filter data that match the search term
      const results = user.filter((company) =>
        company.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(results);
    }
  };

  const handleLoginClick = (company) => {
    setSelectedCompany(company);
    setShowPhoneVerification(true);
  };

  const handlePhoneVerification = () => {
    // Direct navigation to dashboard
    window.location.href = "dashboard.html";
  };

  const handleCloseVerification = () => {
    setShowPhoneVerification(false);
    setSelectedCompany(null);
  };

  return (
    <div className="bg-white rounded-lg mt-40 border border-neutral-300 p-8 relative">
      <h1 className="text-sm font-medium text-center mb-6">
        Masukkan nama Toko
      </h1>

      <form onSubmit={handleSearch}>
        <div className="mb-4 flex items-center gap-2">
          <input
            type="text"
            id="company"
            className="w-full shadow-inner text-sm px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Masukan nama toko"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-fit bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
          >
            Cari
          </button>
        </div>
      </form>

      {isSearching && (
        <div className="mt-8">
          <h2 className="text-sm text-neutral-500 mb-4">Hasil pencarian:</h2>

          {searchResults.length === 0 ? (
            <p className="text-red-500 text-sm">
              Tidak ditemukan nama toko "{searchTerm}"
            </p>
          ) : (
            <ul className="divide-y divide-gray-200">
              {searchResults.map((company) => (
                <li key={company.id} className="py-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">{company.name}</p>
                    </div>
                    <button
                      onClick={() => handleLoginClick(company)}
                      className="text-blue-600 hover:text-blue-800 text-sm hover:underline"
                    >
                      Masuk
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {/* Phone Verification Modal */}
      {showPhoneVerification && selectedCompany && (
        <PhoneVerification
          company={selectedCompany}
          onVerify={handlePhoneVerification}
          onClose={handleCloseVerification}
        />
      )}
    </div>
  );
}

export default Login;
