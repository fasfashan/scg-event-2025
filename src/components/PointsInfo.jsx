import React from "react";
import { Award, ClipboardList } from "lucide-react";
import { user } from "../data/user";
export default function PointsInfo() {
  return (
    <>
      <div className="bg-white/80 rounded-lg p-4 border border-neutral-300 mb-4">
        <h2 className="text-xl font-bold text-center mb-2">
          Total points: {user[0].quizPoints + user[0].surveyPoints}
        </h2>
        <p className="text-gray-600 text-sm text-center mb-4">
          Dapatkan poin dengan menyelesaikan kuis dan survei
        </p>

        <div className="space-y-3">
          <div className="flex items-center justify-between bg-gray-100 border-neutral-200 border rounded-lg p-3">
            <div className="flex items-center w-full justify-between">
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 " />
                <span>Kuis Booth Point</span>
              </div>
              <span>{user[0].quizPoints}</span>
            </div>
          </div>

          <div className="flex items-center justify-between bg-gray-100 border-neutral-200 border rounded-lg p-3">
            <div className="flex items-center w-full justify-between">
              <div className="flex items-center gap-2">
                <ClipboardList className="h-5 w-5 " />
                <span>Survey Point </span>
              </div>
              <span>{user[0].surveyPoints}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
