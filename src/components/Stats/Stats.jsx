"use client";
import React from 'react';
import { useFriends } from '@/hooks/useFriendsHook/useFriends';

const Stats = () => {
  const { friends, activities } = useFriends();

 
  const totalFriends = friends.length;

  
  const onTrackCount = friends.filter(f => f.status === 'on-track').length;

 
  const needAttentionCount = friends.filter(f => 
    f.status === 'overdue' || f.status === 'almost due'
  ).length;

  
  const interactionsThisMonth = activities.filter(activity => {
    const activityDate = activity.date; 
    const currentMonth = new Date().getMonth() + 1;
    const currentYear = new Date().getFullYear();
    
    const [day, month, year] = activityDate.split('/');
    return parseInt(month) === currentMonth && parseInt(year) === currentYear;
  }).length;

  return (
    <section className="bg-white pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
          
        
          <div className="bg-white border border-gray-100 shadow-sm rounded-xl py-10 px-4">
            <div className="text-4xl font-bold text-slate-800 mb-1">{totalFriends}</div>
            <div className="text-slate-500 text-sm font-medium">Total Friends</div>
          </div>

         
          <div className="bg-white border border-gray-100 shadow-sm rounded-xl py-10 px-4">
            <div className="text-4xl font-bold text-[#1d4239] mb-1">{onTrackCount}</div>
            <div className="text-slate-500 text-sm font-medium">On Track</div>
          </div>

          
          <div className="bg-white border border-gray-100 shadow-sm rounded-xl py-10 px-4">
            <div className="text-4xl font-bold text-amber-600 mb-1">{needAttentionCount}</div>
            <div className="text-slate-500 text-sm font-medium">Need Attention</div>
          </div>

          
          <div className="bg-white border border-gray-100 shadow-sm rounded-xl py-10 px-4">
            <div className="text-4xl font-bold text-slate-800 mb-1">{interactionsThisMonth}</div>
            <div className="text-slate-500 text-sm font-medium">Interactions This Month</div>
          </div>

        </div>

        <hr className="mt-16 border-gray-100" />
      </div>
    </section>
  );
};

export default Stats;