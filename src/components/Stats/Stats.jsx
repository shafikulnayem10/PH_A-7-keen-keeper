import React from 'react';

const Stats = () => {
  return (
    <section className="bg-white pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
          
          {/* Card 1 */}
          <div className="bg-white border border-gray-100 shadow-sm rounded-xl py-10 px-4">
            <div className="text-4xl font-bold text-slate-800 mb-1">10</div>
            <div className="text-slate-500 text-sm font-medium">Total Friends</div>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-gray-100 shadow-sm rounded-xl py-10 px-4">
            <div className="text-4xl font-bold text-slate-800 mb-1">3</div>
            <div className="text-slate-500 text-sm font-medium">On Track</div>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-gray-100 shadow-sm rounded-xl py-10 px-4">
            <div className="text-4xl font-bold text-slate-800 mb-1">6</div>
            <div className="text-slate-500 text-sm font-medium">Need Attention</div>
          </div>

          {/* Card 4 */}
          <div className="bg-white border border-gray-100 shadow-sm rounded-xl py-10 px-4">
            <div className="text-4xl font-bold text-slate-800 mb-1">12</div>
            <div className="text-slate-500 text-sm font-medium">Interactions This Month</div>
          </div>

        </div>

       
        <hr className="mt-16 border-gray-100" />
      </div>
    </section>
  );
};

export default Stats;