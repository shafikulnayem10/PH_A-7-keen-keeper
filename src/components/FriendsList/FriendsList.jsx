import React from 'react';
import friendsData from '../../../public/data.json'; 
import FriendCard from '../FriendCard/FriendCard';


const FriendsList = () => {
  return (
    <section className="bg-slate-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-10">Your Friends</h2>

      
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {friendsData.map((friend) => (
            <FriendCard key={friend.id} friend={friend} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FriendsList;