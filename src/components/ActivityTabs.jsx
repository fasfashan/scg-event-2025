import React, { useState } from "react";
import { ClipboardList, Users, XCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Rundown from "./Rundown";

export default function ActivityTabs() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      <div className="bg-white/80 rounded-lg  b p-4 border border-neutral-300 mb-4">
        <div className="grid grid-cols-3 gap-4">
          <Link
            to="/dashboard/event-activity"
            className="bg-gray-50/80 rounded-lg mb p-4 flex flex-col items-center justify-center hover:bg-gray-100 transition-colors w-full"
          >
            <Users className="h-8 w-8 text-green-500 mb-2" />
            <span className="text-center font-medium">Kuis Booth</span>
          </Link>

          <Link
            to="/dashboard/survey"
            className="bg-gray-50/80 rounded-lg p-4 flex flex-col items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <ClipboardList className="h-8 w-8 text-green-500 mb-2" />
            <span className="text-center font-medium">Survey</span>
          </Link>

          <button
            onClick={openPopup}
            className="bg-gray-50/80 rounded-lg p-4 flex flex-col items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <ClipboardList className="h-8 w-8 text-green-500 mb-2" />
            <span className="text-center font-medium">Rundown</span>
          </button>
        </div>
      </div>

      {isPopupOpen && (
        <div className="fixed  min-h-screen inset-0 p-4 z-50 flex items-center justify-center bg-neutral-900/50 max-w-md m-auto">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-auto">
            <div className="flex justify-end items-center mb-4">
              <button
                onClick={closePopup}
                className="text-gray-500 hover:text-gray-700"
              >
                <XCircle className="h-6 w-6 " />
              </button>
            </div>
            <Rundown />
          </div>
        </div>
      )}
    </>
  );
}
