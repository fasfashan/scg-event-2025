import React from "react";
import { rundown } from "../data/rundown";
export default function Rundown() {
  return (
    <>
      <div className="bg-white/80 mt-4 border border-neutral-300 rounded-lg p-4">
        <h1 className="text-xl font-semibold text-center ">Rundown</h1>
        {rundown.map((rundown, index) => (
          <div
            key={index}
            className="mt-4 p-4 bg-gray-50 rounded-lg border border-neutral-300"
          >
            <h2 className="text-sm font-semibold">{rundown.title}</h2>
            <p className="mt-2 text-sm text-gray-500">{rundown.time}</p>
          </div>
        ))}
      </div>
    </>
  );
}
