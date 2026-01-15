import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
    return (
        <section className="relative h-[693px] overflow-hidden bg-[#000511] text-white">

            {/* Background Art Layer */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero-bg-v3.png"
                    alt="Digital Background"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Premium Blue Gradient Overlay with Blend Effect */}
            <div
                className="absolute inset-0 z-10"
                style={{
                    background: 'linear-gradient(180deg, #1C4EF1 0%, #1A3CB6 100%)',
                    mixBlendMode: 'multiply',
                    opacity: 0.5
                }}
            />

            {/* Dark contrast overlay layer */}
            <div
                className="absolute inset-0 z-10"
                style={{
                    background: 'rgba(2, 6, 23, 0.55)'
                }}
            />


            <div className="relative z-20 w-full h-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 flex flex-col pt-16">
                {/* Logo */}
                <div className="relative w-[280px] h-[65px] mb-20">
                    <Image
                        src="/logo-white.png"
                        alt="Simplilearn Logo"
                        fill
                        className="object-contain object-left"
                        priority
                    />
                </div>


                {/* Content Wrapper */}
                <div className="flex flex-col gap-8 max-w-[1100px]">
                    {/* Badge and Tagline */}
                    <div className="flex flex-wrap items-center gap-6">
                        <span className="bg-[#00FFFF] text-black font-black px-6 py-2.5 rounded-[4px] text-xl uppercase tracking-wider">
                            Invite-Only
                        </span>
                        <span className="text-[#00FFFF] font-semibold text-2xl">
                            An Executive Roundtable · Lunch
                        </span>
                    </div>

                    {/* Mixed Color Headline */}
                    <h1 className="text-[48px] md:text-[62px] font-black leading-[1.15] tracking-tight">
                        <span className="text-[#F5AB40]">The Skills That Matter Next:</span><br />
                        <span className="text-white">Preparing Your Workforce<br />
                            & Leaders for the AI Era</span>
                    </h1>

                    {/* Details */}
                    <div className="space-y-6 pt-6">
                        <div className="flex items-center gap-4 text-2xl md:text-3xl font-black">
                            <Calendar className="text-white w-7 h-7 md:w-8 md:h-8" strokeWidth={3} />
                            <span>February 20, 2026</span>
                        </div>
                        <div className="flex items-center gap-4 text-2xl md:text-3xl font-black">
                            <MapPin className="text-white w-7 h-7 md:w-8 md:h-8" strokeWidth={3} />
                            <span>Chamberlain&apos;s Steak & Fish House, Dallas</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
