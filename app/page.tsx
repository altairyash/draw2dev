"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Authentication from "./_components/Authentication";
import ProfileAvatar from "./_components/ProfileAvatar";
import { useAuthContext } from "./provider";
import { Linkedin, Twitter, Github } from "lucide-react";
import { useEffect, useState } from "react";
import HeroButton from "@/components/customComponents/heroButton";
import Image from "next/image";

// Wavy Background Component
const WavyBackground = ({ gradientClass }: { gradientClass: string }) => {
  const [path, setPath] = useState(
    "M0,224L48,218.7C96,213,192,203,288,186.7C384,171,480,149,576,149.3C672,149,768,171,864,165.3C960,160,1056,128,1152,122.7C1248,117,1344,139,1392,149.3L1440,160L1440,320L0,320Z"
  );
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((t) => t + 0.1);
      const wave = (x: number, amp: number, freq: number) =>
        amp * Math.sin(freq * x + time);
      const newPath = `M0,224L48,${220 + wave(0, 10, 0.5)}C96,${
        210 + wave(1, 10, 0.5)
      },192,${200 + wave(2, 10, 0.5)},288,${190 + wave(3, 10, 0.5)}C384,${
        180 + wave(4, 10, 0.5)
      },480,${160 + wave(5, 10, 0.5)},576,${160 + wave(6, 10, 0.5)}C672,${
        160 + wave(7, 10, 0.5)
      },768,${180 + wave(8, 10, 0.5)},864,${170 + wave(9, 10, 0.5)}C960,${
        165 + wave(10, 10, 0.5)
      },1056,${140 + wave(11, 10, 0.5)},1152,${130 + wave(12, 10, 0.5)}C1248,${
        125 + wave(13, 10, 0.5)
      },1344,${150 + wave(14, 10, 0.5)},1392,${
        160 + wave(15, 10, 0.5)
      }L1440,160L1440,320L0,320Z`;
      setPath(newPath);
    }, 50);
    return () => clearInterval(interval);
  }, [time]);

  return (
    <div className={`absolute inset-0 ${gradientClass} overflow-hidden`}>
      <svg
        className="absolute inset-0 w-full h-full opacity-30"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path fill="currentColor" fillOpacity="1" d={path}></path>
      </svg>
    </div>
  );
};

export default function LandingPage() {
  const user = useAuthContext();
  const gradientClass =
    "bg-gradient-to-br from-slate-950 via-slate-900 to-purple-900";

  return (
    <div className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center">
      <WavyBackground gradientClass={gradientClass} />

      <header className="fixed top-0 w-full text-sm py-4 px-6 z-50 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-white">draw2dev</span>
        </div>
        </h1>
        <div>
          {!user?.user?.email ? (
            <Authentication>
              <Button variant="default" size="lg">
                Get Started
              </Button>
            </Authentication>
          ) : (
            <ProfileAvatar />
          )}
        </div>
      </header>

      <main className="container mx-auto px-4 flex flex-col items-center justify-center text-center relative z-10 flex-grow">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl max-w-3xl font-bold tracking-tight text-white">
          Transform Wireframes into Code using AI 
          <span className="text-purple-400"> Instantly</span>
        </h1>
        <p className="text-md text-gray-300 mt-8 max-w-2xl">
          Draw your ideas, we'll turn them into production-ready code. Powered
          by AI.
        </p>
        <HeroButton className="m-8" href={"/dashboard"}>
          {!user?.user?.email ? "Start drawing" : "Dashboard"}
        </HeroButton>
      </main>

      <footer className="border-t border-gray-800 relative z-10 w-full flex flex-col items-center py-6">
        <div className="flex gap-6">
          <Link href="#" className="text-gray-400 hover:text-white">
            <Linkedin size={24} />
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white">
            <Twitter size={24} />
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white">
            <Github size={24} />
          </Link>
        </div>
        <p className="text-gray-400 mt-4">
          © 2024 draw2dev. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
