import React from 'react';
import Image from 'next/image';

import friendsData from '../../../public/data.json'; 

const FriendsList = () => {

const getStatusClasses = (status) => {
  if (status === 'overdue') {
    return 'bg-red-500 text-white';
  } else if (status === 'almost due') {
    return 'bg-amber-500 text-white';
  } else if (status === 'on-track') {
    return 'bg-[#1d4239] text-white';
  } else {
    // Fallback for unexpected data
    return 'bg-slate-200 text-slate-700';
  }
};

  return (
    <section className="bg-slate-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <h2 className="text-3xl font-bold text-slate-900 mb-10">
          Your Friends
        </h2>

        {/* Friends Section Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {friendsData.map((friend) => (
            <div 
              key={friend.id} 
              className="bg-white border border-slate-100 p-8 rounded-2xl shadow-sm text-center flex flex-col items-center"
            >
              {/* Profile Pic */}
              <div className="avatar mb-5">
                <div className="w-24 h-24 rounded-full border-4 border-slate-100 shadow-inner">
                  <Image 
                    src={friend.picture} 
                    alt={friend.name}
                    width={96}
                    height={96}
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Name & Last Contacted */}
              <h3 className="text-xl font-bold text-slate-900 mb-1">
                {friend.name}
              </h3>
              <p className="text-sm text-slate-500 mb-4 font-medium">
                {friend.days_since_contact}d ago
              </p>

              {/*  Tags  */}
              <div className="flex flex-wrap gap-2 justify-center mb-3">
                {friend.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className="badge badge-sm bg-emerald-100 text-emerald-800 border-none font-semibold uppercase tracking-wider text-[11px] px-2.5 py-3"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/*  Status  */}
              <span 
                className={`badge badge-md capitalize font-semibold tracking-wide border-none px-4 py-3 ${getStatusClasses(friend.status)}`}
              >
                {friend.status}
              </span>

            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default FriendsList;