import { RiSearchLine } from "@remixicon/react";
import React from "react";

export default function SearchInput() {
  return (
    <div className="bg-white border border-gray-300 rounded-full w-xs sm:w-96 shadow-util focus-within:border-lime-600 focus-within:ring-1 focus-within:ring-lime-600 transition-all p-0.5 flex ">
      <input
        type="text"
        className="flex-1 outline-none  text-sm px-4 py-2"
        placeholder="Search for anything"
      />
      <button
        className="bg-lime-500 w-16 h-auto rounded-full flex items-center justify-center hover:bg-lime-600 transition-colors"
        title="search"
      >
        <RiSearchLine size={20} />
      </button>
    </div>
  );
}
