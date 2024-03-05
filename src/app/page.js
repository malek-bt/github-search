"use client";
import Card from "./components/card";
import ParticlesComponent from "./components/particlesBackground";

export default function Home() {
  return (
    <div className=" overflow-x-hidden">
      <ParticlesComponent id="particles" />
      <Card />
    </div>
  );
}
