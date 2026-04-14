import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import { FriendProvider } from "@/context/FriendContext/FriendContext";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Keen Keeper",
  description: "A social media platform for gamers to connect, share their gaming experiences, and find new friends to play with.",
};

export default function RootLayout({ children }) {
  return (
    <html
    data-theme="light"
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
       <FriendProvider>
         <Navbar></Navbar>
       
        {children}
          <ToastContainer />

       <Footer></Footer>
       </FriendProvider>
        </body>
    </html>
  );
}
