"use client";
import React from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { FaPhone, FaMessage, FaVideo, FaClock, FaBoxArchive, FaTrash } from "react-icons/fa6";

import friendsData from '../../../../public/data.json'; 
import { useFriends } from '@/hooks/useFriendsHook/useFriends';

const FriendDetailsPage = () => {
  const { id } = useParams();
  
  const { addActivity } = useFriends();
  
  const friend = friendsData.find((f) => f.id === parseInt(id));

  if (!friend) return <div className="text-center py-20">Friend not found.</div>;

  const getStatusColor = (status) => {
    if (status === 'overdue') return 'bg-red-500';
    if (status === 'almost due') return 'bg-amber-500';
    return 'bg-[#1d4239]';
  };

  return (
    <div className="max-w-6xl mx-auto py-12 px-6">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        
       
        <div className="md:col-span-4 space-y-6">
          <div className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm text-center">
            <div className="avatar mb-4">
              <div className="w-24 h-24 rounded-full border-4 border-slate-50 overflow-hidden mx-auto">
                <Image src={friend.picture} alt={friend.name} width={96} height={96} className="object-cover" />
              </div>
            </div>
            <h1 className="text-2xl font-bold text-slate-900">{friend.name}</h1>
            <div className={`badge text-white border-none my-2 ${getStatusColor(friend.status)}`}>
              {friend.status}
            </div>
            <div className="flex justify-center gap-2 mb-4">
              {friend.tags.map((tag, idx) => (
                <span key={idx} className="badge badge-sm bg-emerald-100 text-emerald-800 border-none">{tag}</span>
              ))}
            </div>
            <p className="text-slate-500 italic text-sm mb-2">"{friend.bio}"</p>
            <p className="text-xs text-slate-400">Preferred: {friend.email}</p>
          </div>

          <div className="space-y-2">
            <button className="btn btn-block bg-white border-slate-100 text-slate-700 normal-case hover:bg-slate-50">
              <FaClock className="mr-2" /> Snooze 2 Weeks
            </button>
            <button className="btn btn-block bg-white border-slate-100 text-slate-700 normal-case hover:bg-slate-50">
              <FaBoxArchive className="mr-2" /> Archive
            </button>
            <button className="btn btn-block bg-white border-slate-100 text-red-500 normal-case hover:bg-red-50 border-red-100">
              <FaTrash className="mr-2" /> Delete
            </button>
          </div>
        </div>

        
        <div className="md:col-span-8 space-y-6">
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm text-center">
              <div className="text-3xl font-bold text-slate-800">{friend.days_since_contact}</div>
              <div className="text-xs text-slate-500 font-medium">Days Since Contact</div>
            </div>
            <div className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm text-center">
              <div className="text-3xl font-bold text-slate-800">{friend.goal}</div>
              <div className="text-xs text-slate-500 font-medium">Goal (Days)</div>
            </div>
            <div className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm text-center">
              <div className="text-xl font-bold text-[#1d4239] mt-2">{friend.next_due_date}</div>
              <div className="text-xs text-slate-500 font-medium">Next Due</div>
            </div>
          </div>

          <div className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm flex justify-between items-center">
            <div>
              <h3 className="font-bold text-slate-800">Relationship Goal</h3>
              <p className="text-sm text-slate-500">Connect every <span className="font-bold text-slate-800">{friend.goal} days</span></p>
            </div>
            <button className="btn btn-sm bg-slate-50 text-slate-600 border-slate-200 normal-case">Edit</button>
          </div>

         
          <div className="bg-white border border-slate-100 rounded-xl p-8 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-6">Quick Check-In</h3>
            <div className="grid grid-cols-3 gap-4">
             
              <button onClick={() => addActivity('Call', friend)} className="btn flex flex-col h-24 bg-white border-slate-100 hover:bg-slate-50 text-slate-700">
                <FaPhone size={20} className="text-pink-500" /> <span className="text-xs mt-2">Call</span>
              </button>
              <button onClick={() => addActivity('Text', friend)} className="btn flex flex-col h-24 bg-white border-slate-100 hover:bg-slate-50 text-slate-700">
                <FaMessage size={20} className="text-purple-400" /> <span className="text-xs mt-2">Text</span>
              </button>
              <button onClick={() => addActivity('Video', friend)} className="btn flex flex-col h-24 bg-white border-slate-100 hover:bg-slate-50 text-slate-700">
                <FaVideo size={20} className="text-slate-600" /> <span className="text-xs mt-2">Video</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FriendDetailsPage;