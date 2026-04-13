import React from 'react';
import { Plus } from 'lucide-react';

const Banner = () => {
  return (
    <section className="bg-white pt-16 pb-8 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          Friends to keep close in your life
        </h1>
        
        {/* Subtitle */}
        <p className="text-slate-500 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the 
          relationships that matter most.
        </p>

        {/* Add Button */}
        <button className="btn bg-[#1d4239] hover:bg-[#16352d] text-white border-none normal-case px-8 font-semibold">
          <Plus size={20} className="mr-2" />
          Add a Friend
        </button>
      </div>
    </section>
  );
};

export default Banner;