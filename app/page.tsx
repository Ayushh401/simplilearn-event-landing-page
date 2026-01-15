import Hero from '@/components/Hero';
import RSVPForm from "@/components/RSVPForm";
import Capabilities from '@/components/Capabilities';
import Speakers from '@/components/Speakers';
import { CheckCircle2 } from "lucide-react";
import React from 'react';
import Image from 'next/image';

const AgendaItem = ({ time, title, description }: { time: string, title: string, description: string }) => (
  <div className="flex gap-6 pb-12 last:pb-0 relative">
    <div className="w-px bg-blue-200 absolute left-[11px] top-6 bottom-0" />
    <div className="w-6 h-6 rounded-full border-4 border-white bg-blue-600 shadow-sm relative z-10 shrink-0" />
    <div className="flex-1">
      <span className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-1 block">{time}</span>
      <h4 className="text-xl font-bold text-gray-900 mb-2">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Hero />

      {/* RSVP Section (Immediately following Hero) */}
      <section className="relative z-30 w-full bg-[#F8F8F8] py-16">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-24">
          <RSVPForm />
        </div>
      </section>

      {/* Intro Content Section */}
      <section className="relative z-20 w-full bg-white">
        <div className="mx-auto max-w-[1440px] pt-2 pb-24">
          <div className="max-w-[1240px] px-6 mx-auto space-y-16 text-left">

            <p className="text-[26px] leading-[39px] text-gray-800 font-medium">
              AI is accelerating change across every operational layer. Roles are shifting.
              Leadership models are collapsing and reforming. Frontline and mid-level managers
              will soon lead teams of people and intelligent agents.
            </p>

            <div className="space-y-10">
              <p className="text-[26px] leading-[39px] text-gray-800 font-medium">
                But even the most advanced enterprises are asking the same question:
              </p>

              <h3 className="text-[42px] md:text-[64px] font-black text-black tracking-tight leading-tight">
                Which capabilities will matter most,<br />
                and how do we build them at scale?
              </h3>
            </div>

            <p className="text-[26px] leading-[39px] text-gray-800 font-medium">
              This invite-only roundtable gathers CHROs, CLOs, and enterprise workforce leaders
              for a candid, senior-level discussion on what’s coming next.
            </p>

          </div>
        </div>
      </section>




      {/* Capabilities Section */}
      <div className="mt-24">
        <Capabilities />
      </div>

      {/* Speakers Section */}
      <Speakers />

      {/* Walk Away & Insights Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-white overflow-hidden">
        <div className="max-w-[1440px] mx-auto relative min-h-[850px]">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:max-w-[801px] z-10">
              <h2 className="text-[40px] font-black leading-[1.1] text-[#F5AB40] mb-12 max-w-[687px]">
                Go behind the curtain with real examples and high-scale insights
              </h2>

              <h3 className="text-2xl font-bold text-black mb-10">You&apos;ll walk away with:</h3>
              <ul className="space-y-8 mb-16">
                {[
                  'A clear view of the leadership & workforce capabilities that will matter most over the next 24-36 months.',
                  'Insights from high-scale operating environments including the former CLO of McDonald’s on what truly scales and what breaks under pressure.',
                  'Signals for where capability gaps may already be forming in your organization.',
                  'Peer-validated perspectives from leaders running workforce, talent, and transformation ecosystems at scale.',
                  'Actionable insights you can take straight into your next exec meeting.'
                ].map((item, i) => (
                  <li key={i} className="flex gap-8 items-start">
                    <div className="w-[3px] h-[59px] bg-[#F5AB40] shrink-0" />
                    <span className="text-[20px] leading-[30px] text-black font-medium py-1">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col items-start pt-8">
                <RSVPForm />
              </div>
            </div>

            <div className="hidden lg:block absolute right-0 top-0">
              <div className="relative w-[570px] h-[611px]">
                <Image
                  src="/chess-pieces.png"
                  alt="Strategic Insights"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Mobile Image */}
            <div className="lg:hidden w-full flex justify-center mt-12 order-first lg:order-last">
              <div className="relative w-full max-w-lg aspect-square">
                <Image
                  src="/chess-pieces.png"
                  alt="Strategic Insights"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Agenda Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#00FFFF] min-h-[616px] flex flex-col justify-center">
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-16">Event Agenda</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Welcome & Opening",
                speaker: "Sudipto Mitra, CRO Simplilearn",
                description: "Why capability-building is now a board-level issue and what's changing in the workforce landscape."
              },
              {
                title: "Keynote: What Enterprise Leaders Are Seeing on the Ground",
                speaker: "Rob Lauber, Former CLO McDonald’s",
                description: "A grounded view of how AI and AI agents are reshaping work, workflows, and leadership across industries."
              },
              {
                title: "Lunch & Executive Conversation",
                speaker: "Industry Experts Invited",
                description: "What large enterprise talent ecosystems are learning about capability-building at scale."
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-xl shadow-sm h-full flex flex-col min-h-[350px]">
                <h4 className="text-[26px] font-bold text-blue-600 mb-8 leading-tight">
                  {item.title}
                </h4>
                <p className="text-lg font-bold text-black mb-6">
                  {item.speaker}
                </p>
                <p className="text-lg text-gray-800 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA & Footer Overlay */}
      <section className="relative h-[475px] flex flex-col justify-between overflow-hidden">
        <Image
          src="/restaurant-footer.png"
          alt="Chamberlain's Steak & Fish House"
          fill
          className="object-cover brightness-50"
        />

        {/* Top Content: Heading & Form */}
        <div className="relative z-10 pt-16 px-6 md:px-24">
          <div className="max-w-7xl mx-auto">
            <h2
              className="text-[30px] font-black text-white mb-10 tracking-tight leading-none"
              style={{ fontWeight: 900 }}
            >
              Space is limited.
            </h2>
            <div className="flex justify-start">
              <RSVPForm />
            </div>
          </div>
        </div>

        {/* Bottom Overlay: Logo & Copyright */}
        <div className="relative z-10 pb-12 px-6 md:px-24">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="flex flex-col">
              <div className="relative w-[250px] h-[60px]">
                <Image
                  src="/logo-white.png"
                  alt="Simplilearn Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </div>
            <p className="text-white/80 text-lg font-medium">
              © 2009-2025 - Simplilearn Solutions. All Rights Reserved.
            </p>
          </div>
        </div>

      </section>
    </main>
  );
}

