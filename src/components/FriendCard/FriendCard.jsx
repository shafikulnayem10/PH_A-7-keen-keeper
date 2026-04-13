"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const FriendCard = ({ friend }) => {
 
  const getStatusClasses = (status) => {
    if (status === 'overdue') return 'bg-red-500 text-white';
    if (status === 'almost due') return 'bg-amber-500 text-white';
    if (status === 'on-track') return 'bg-[#1d4239] text-white';
    return 'bg-slate-200 text-slate-700';
  };

  return (
    
    <Link href={`/friend/${friend.id}`}>
      <div className="bg-white border border-slate-100 p-8 rounded-2xl shadow-sm text-center flex flex-col items-center hover:shadow-md transition-shadow cursor-pointer h-full">
        
        
        <div className="avatar mb-5">
          <div className="w-24 h-24 rounded-full border-4 border-slate-100 shadow-inner overflow-hidden">
            <Image 
              src={friend.picture} 
              alt={friend.name}
              width={96}
              height={96}
              className="object-cover"
            />
          </div>
        </div>

        
        <h3 className="text-xl font-bold text-slate-900 mb-1">{friend.name}</h3>
        <p className="text-sm text-slate-500 mb-4 font-medium">
          {friend.days_since_contact}d ago
        </p>

      
        <div className="flex flex-wrap gap-2 justify-center mb-4">
          {friend.tags.map((tag, index) => (
            <span 
              key={index} 
              className="badge badge-sm bg-emerald-100 text-emerald-800 border-none font-semibold uppercase tracking-wider text-[11px] px-2.5 py-3"
            >
              {tag}
            </span>
          ))}
        </div>

   
        <span className={`badge badge-md capitalize font-semibold tracking-wide border-none px-4 py-3 mt-auto ${getStatusClasses(friend.status)}`}>
          {friend.status}
        </span>
      </div>
    </Link>
  );
};

export default FriendCard;