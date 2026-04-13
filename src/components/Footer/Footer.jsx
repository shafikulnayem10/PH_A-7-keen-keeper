import React from 'react';
import Link from 'next/link';

import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#1d4239] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto text-center">
        
      
        <h2 className="text-4xl font-bold mb-4 tracking-tight">KeenKeeper</h2>
        
       
        <p className="text-gray-300 text-sm max-w-2xl mx-auto mb-8">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        
        <div className="mb-10">
          <h3 className="text-white font-medium mb-4">Social Links</h3>
          <div className="flex justify-center gap-4">
          
            <a href="#" className="bg-white p-2.5 rounded-full text-[#1d4239] hover:bg-gray-200 transition-colors shadow-sm">
              <FaInstagram size={18} />
            </a>
         
            <a href="#" className="bg-white p-2.5 rounded-full text-[#1d4239] hover:bg-gray-200 transition-colors shadow-sm">
              <FaFacebookF size={18} />
            </a>
           
            <a href="#" className="bg-white p-2.5 rounded-full text-[#1d4239] hover:bg-gray-200 transition-colors shadow-sm">
              <FaXTwitter size={18} />
            </a>
          </div>
        </div>

       
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-4">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/cookies" className="hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;