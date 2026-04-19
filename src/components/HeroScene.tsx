"use client";

import dynamic from "next/dynamic";

const HeroSceneDynamic = dynamic(() => import("./ThreeBackground"), { 
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-[#1C1C1A]" />
});

export default function HeroScene() {
  return <HeroSceneDynamic />;
}
