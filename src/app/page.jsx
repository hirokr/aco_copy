"use client";
import Mascot from "@/components/mascot";
import Award from "@/components/Award";
import About from "@/components/About";
import MainPage from "@/components/MainPage";
// import Location from "@/components/Location";
// import LetsTalk from "@/components/letsTalk";
// import Footer from "@/components/Footer";
// import Policy from "@/components/policy";

export default function Home() {
  return (
    <main className='flex-col flex justify-between items-center'>
      <MainPage/>
      <About/>
      <Award />
      <Mascot />
      
    </main>
  );
}
