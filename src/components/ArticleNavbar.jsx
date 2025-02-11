import React from 'react'
import { useState } from 'react';

const ArticleNavbar = () => {
  const [activeTab, setActiveTab] = useState("All Posts(32)");
  const [joinGroup, setJoinGroup] = useState(false);

  const handleGroupJoin = () => {
    setJoinGroup((prev) => !prev)
  }


  return (
    <div className="hidden sm:flex items-center justify-between border-b border-slate-300 px-4 py-2 sm:w-[80%] md:w-full mt-3">
      {/* Tabs Section */}
      <div className="flex space-x-6 text-gray-500">
        {["All Posts(32)", "Article", "Event", "Education", "Job"].map((tab) => (
          <button
            key={tab}
            className={`text-sm pb-2 border-b-2 ${activeTab === tab ? "font-semibold text-black border-black" : "border-transparent"
              }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Buttons Section */}
      <div className="flex space-x-2">
        <button className="px-3 py-1 text-sm font-semibold rounded-md bg-gray-200">
          Write a Post <span className="ml-1">&#9662;</span>
        </button>
        <button onClick={handleGroupJoin} className={`px-3 py-1 text-sm rounded-md flex items-center cursor-pointer ${joinGroup ? "bg-blue-600 text-white" : "bg-transparent text-black border"}`}>
          <i className={`mr-1 ${joinGroup ? "fa-solid fa-users" : "fa-solid fa-right-from-bracket"}`}></i> {joinGroup ? "Join Group" : "Leave Group"}
        </button>
      </div>
    </div>
  )
}

export default ArticleNavbar