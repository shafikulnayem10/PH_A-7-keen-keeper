
import { Home, Clock, BarChart2 } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 border-b border-gray-100 px-4">
     
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z- mt-3 w-52 p-2 shadow">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/timeline">Timeline</Link></li>
            <li><Link href="/stats">Stats</Link></li>
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-xl normal-case hover:bg-transparent">
          <span className="font-bold text-gray-900">Keen</span>
          <span className="font-medium text-cyan-600">Keeper</span>
        </Link>
      </div>

    
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4">
          <li>
            <Link 
              href="/" 
              className="bg-[#1e463a] text-white hover:bg-[#16352d] flex items-center gap-2 px-4 py-2"
            >
              <Home size={18} />
              <span className="font-semibold">Home</span>
            </Link>
          </li>
          <li>
            <Link 
              href="/timeline" 
              className="text-green-500 hover:text-slate-800 flex items-center gap-2 px-4 py-2"
            >
              <Clock size={18} />
              <span className="font-medium">Timeline</span>
            </Link>
          </li>
          <li>
            <Link 
              href="/stats" 
              className="text-green-500 hover:text-slate-800 flex items-center gap-2 px-4 py-2"
            >
              <BarChart2 size={18} />
              <span className="font-medium">Stats</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;