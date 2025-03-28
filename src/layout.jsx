import React from "react";
export default function Layout({ children }) {
  return (
    <div className="min-h-screen  bg-[url(/bg-potrait.jpg)] bg-cover bg-center max-w-md m-auto   p-4">
      <img src="/logo.svg" alt="" />
      {children}
    </div>
  );
}
