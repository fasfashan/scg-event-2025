import React from "react";
import { ArrowLeft } from "lucide-react";
import { user } from "../data/user";
import { Link } from "react-router-dom";
export default function Navigation() {
  return (
    <div className="bg-white mt-10 border p-2 border-neutral-300 rounded-lg">
      <div className="flex items-center justify-between">
        <Link to="/dashboard">
          <div className="flex text-sm font-medium gap-2 items-center">
            <ArrowLeft width={20} height={20} color="black" />
            <p>Back to Home</p>
          </div>
        </Link>
        <span className="text-sm font-medium">
          Total points: {user[0].quizPoints + user[0].surveyPoints}
        </span>
      </div>
    </div>
  );
}
