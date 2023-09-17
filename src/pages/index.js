import Image from "next/image";
import { Inter } from "next/font/google";
import Box from "@/components/box";
import { useEffect, useState } from "react";
import Game from "@/components/game";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Game />
    </main>
  );
}
