"use client";
import React, { useState } from 'react';
import { useFriends } from '@/hooks/useFriendsHook/useFriends';
import { FaPhone, FaMessage, FaVideo, FaHandshake } from "react-icons/fa6";

const TimelinePage = () => {
  
  const { activities } = useFriends();
  
  
  const [filterType, setFilterType] = useState('All');

  
  const filteredActivities = activities.filter(activity => {
    if (filterType === 'All') return true;
    return activity.type === filterType;
  });

  return (
    <div className="max-w-5xl mx-auto py-16 px-6 min-h-screen">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-slate-900 mb-6">Timeline</h1>
        
       
        <div className="max-w-xs">
          <select 
            className="select select-bordered w-full bg-slate-50 border-slate-200 text-slate-600 focus:outline-none focus:ring-1 focus:ring-[#1d4239]"
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
          >
            <option value="All">Filter timeline</option>
            <option value="Call">Call</option>
            <option value="Text">Text</option>
            <option value="Video">Video</option>
          </select>
        </div>
      </div>

      <div className="space-y-3">
        {filteredActivities.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-slate-200">
            <p className="text-slate-400">No interactions logged yet.</p>
          </div>
        ) : (
          filteredActivities.map((activity, index) => (
            <div 
              key={index} 
              className="group flex items-center gap-5 bg-white p-5 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all"
            >
              
              <div className="text-2xl transition-transform group-hover:scale-110">
                {activity.type === 'Call' && <FaPhone className="text-pink-500" />}
                {activity.type === 'Text' && <FaMessage className="text-purple-300" />}
                {activity.type === 'Video' && <FaVideo className="text-slate-600" />}
               
                {!['Call', 'Text', 'Video'].includes(activity.type) && <FaHandshake className="text-amber-400" />}
              </div>

              <div>
                <h3 className="text-[15px] font-semibold text-slate-800">
                  <span className="font-bold">{activity.type}</span> with {activity.friendName || 'Friend'}
                </h3>
                <p className="text-xs text-slate-400 mt-0.5 font-medium uppercase tracking-wider">
                  {activity.date}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TimelinePage;
