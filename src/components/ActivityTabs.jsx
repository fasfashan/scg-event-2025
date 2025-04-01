import React from "react";
import { ClipboardList, Users } from "lucide-react";
import { Link } from "react-router-dom";
export default function ActivityTabs() {
  return (
    <>
      <div className="bg-white rounded-lg p-4 border border-neutral-300 mb-4">
        <div className="grid grid-cols-2 gap-4">
          <Link
            to="/dashboard/event-activity"
            className="bg-gray-50 rounded-lg p-4 flex flex-col items-center justify-center hover:bg-gray-100 transition-colors w-full"
          >
            <Users className="h-8 w-8 text-green-500 mb-2" />
            <span className="text-center font-medium">Event Activity</span>
          </Link>
          <Link
            to="/dashboard/survey"
            className="bg-gray-50 rounded-lg p-4 flex flex-col items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <ClipboardList className="h-8 w-8 text-green-500 mb-2" />
            <span className="text-center font-medium">Survey</span>
          </Link>
        </div>
      </div>
    </>
  );
}
