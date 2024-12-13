"use client";
import Mascot from "@/components/mascot";
import Footer from "@/components/Footer";
import Award from "@/components/Award";
import Location from "@/components/Location";
import MainPage from "@/components/MainPage";
import LetsTalk from "@/components/letsTalk";
import About from "@/components/About";
import Policy from "@/components/policy";

export default function Home() {
  return (
    <main className='flex-col flex justify-between items-center'>
      <MainPage/>
      <About/>
      <Award />
      <Mascot />
      <LetsTalk/>
      <Location/>
      <Footer />
      <Policy/>
    </main>
  );
}
