import React, { useState } from "react";
import { GraduationCap, Folder } from "lucide-react";
import { motion } from "framer-motion";
import { tools } from "../utils/tools";
import { ToolType } from "../types";

export default function HomePage() {
  const [search, setSearch] = useState("");

  const filteredTools = tools.filter((tool: ToolType) =>
    tool.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-[#0e0e1a] text-white p-6 font-sans">
      <div className="flex flex-col items-center gap-2">
        <img
          src="https://i.imgur.com/3NrlAXw.png"
          alt="EasyTools Logo"
          className="h-14"
        />
        <h1 className="text-3xl font-bold mt-2 mb-4 text-center">
          EasyTools Dashboard
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
          <button
            onClick={() =>
              window.open("https://discord.gg/nTY5W9HegZ", "_blank")
            }
            className="bg-[#5865f2] text-white px-6 py-2 rounded-full cursor-pointer hover:bg-[#0f172a]"
          >
            <div className="flex">
              <div>
                <img
                  src="https://img.icons8.com/ios-filled/24/ffffff/discord-logo.png"
                  className="mr-2"
                  alt="discord icon"
                />{" "}
              </div>
              <div>Join Discord</div>
            </div>
          </button>
          <input
            placeholder="Zoek tools..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-64 md:w-96 bg-[#1e1e2e] border border-gray-600 text-white px-4 py-2 rounded-md"
          />
          <button
            onClick={() =>
              window.open(
                "https://discord.com/channels/1318215666695667712/1377330983564611614",
                "_blank"
              )
            }
            className="flex items-center gap-2 bg-[#0f172a] py-2 px-4 cursor-pointer rounded-md"
          >
            <GraduationCap className="w-4 h-4" /> Courses
          </button>
          <button
            onClick={() =>
              window.open(
                "https://discord.com/channels/1318215666695667712/1377331298414362764",
                "_blank"
              )
            }
            className="flex items-center gap-2  bg-[#0f172a] py-2 px-4 cursor-pointer rounded-md"
          >
            <Folder className="w-4 h-4" /> Resources
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {filteredTools.map((tool, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div
              className="bg-[#1e1e2e] text-white h-full rounded-2xl shadow-md hover:shadow-xl"
              style={{ border: "1px solid #e5e7eb" }}
            >
              <div className="p-5 flex flex-col items-center text-center">
                <div className="text-4xl mb-3">
                  <img src={tool.icon} alt={tool.name} className="h-12" />
                </div>
                <h2 className="text-lg font-semibold mb-1">{tool.name}</h2>
                <p className="text-sm text-gray-400 mb-4">{tool.description}</p>
                <button
                  onClick={() => window.open(tool.url, "_blank")}
                  className="bg-blue-700 hover:bg-blue-800 text-white w-full py-2 px-4 rounded-md cursor-pointer"
                >
                  Open Tool
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
