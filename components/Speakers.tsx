import React from 'react';
import Image from 'next/image';


const speakers = [
    {
        name: 'Rob Lauber',
        role: "Rob Lauber is a global workforce and capability-building leader with over 25 years of experience helping organizations prepare leaders and frontline teams for change. Most recently, he served as SVP and Chief Learning Officer at McDonald's, leading learning and development across 37,000+ restaurants worldwide. His perspective is especially relevant as organizations rethink leadership and capability models in the age of AI.",
        image: '/speakers/rob-lauber-new.jpg',
    },
    {
        name: 'Krishna Kumar',
        role: "Krishna Kumar is the Founder and CEO of Simplilearn, working closely with enterprises navigating workforce transformation driven by AI and digital change. At the center of the learning and skills ecosystem, he brings a unique perspective on how roles, leadership expectations, and capabilities are evolving across industries. Through direct engagement with enterprise leaders and education partners, he sees what scales, and what doesn't, in building workforce readiness for the AI era.",
        image: '/speakers/sudipto-new.png',
    },
    {
        name: 'Sudipto Ghosh',
        role: "Sudipto is a senior transformation and people leader with over 20 years of experience helping large enterprises navigate complex change and reskill at scale. He has led major initiatives for Fortune 500 companies, focusing on digital fluency and leadership development. His focus is on the practical application of AI tools to enhance human capabilities and business outcomes.",
        image: '/speakers/krishna-kumar-new.jpg',
    },
];

const Speakers = () => {
    return (
        <section
            className="relative py-24 px-6 md:px-12 lg:px-24 overflow-hidden"
            style={{
                background: 'linear-gradient(180deg, #1C4EF1 0%, #1A3CB6 100%)'
            }}
        >
            {/* Dark overlay to simulate Figma Plus Darker */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: 'rgba(2, 6, 23, 0.65)'
                }}
            />

            <div className="relative z-10">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold mb-16 text-primary">Featured Speakers</h2>

                    <div className="space-y-16">
                        {speakers.map((speaker, index) => (
                            <div key={index} className="flex flex-col md:flex-row gap-12 items-start">
                                <div className="relative w-full md:w-[320px] aspect-square rounded-2xl overflow-hidden shadow-2xl flex-shrink-0">
                                    <Image
                                        src={speaker.image}
                                        alt={speaker.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-3xl font-bold text-secondary mb-4">{speaker.name}</h3>
                                    <p className="text-xl md:text-2xl leading-relaxed text-white">
                                        {speaker.role}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Additional Perspectives Banner */}
                <div className="mt-24 max-w-[1240px] mx-auto relative rounded-lg overflow-hidden shadow-2xl h-[224px] flex items-center justify-start px-20">
                    <Image
                        src="/expert-bg.png"
                        alt="Network Background"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-blue-900/30 backdrop-brightness-75" />

                    <div className="relative z-10 max-w-4xl pt-2">
                        <h3 className="text-[28px] md:text-[32px] font-black text-[#00FFFF] mb-4 leading-tight">
                            Additional Expert Perspectives
                        </h3>
                        <p className="text-[20px] md:text-[24px] font-medium text-white leading-relaxed opacity-95">
                            Invited experts from leading consulting and enterprise learning organizations will contribute short perspectives, offering insight into how large organizations are evolving skills and leadership models in the AI era.
                        </p>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Speakers;
