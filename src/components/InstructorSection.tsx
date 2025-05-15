
import React from "react";

const InstructorCard = ({ name, realName, credentials, liveBadge, liveBadgeText }: {
  name: string;
  realName?: string;
  credentials: string[];
  liveBadge: boolean;
  liveBadgeText: string;
}) => {
  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-lg blur-sm transform group-hover:scale-[1.02] transition-transform"></div>
      <div className="relative bg-gray-900/80 backdrop-blur-sm p-6 rounded-lg border border-gray-800 h-full hover:-translate-y-1 transition-all">
        {liveBadge && (
          <div className="absolute -top-3 -right-3 bg-pink-500 text-white text-xs py-1 px-3 rounded-full">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
              <span>{liveBadgeText}</span>
            </div>
          </div>
        )}
        
        <div className="flex items-center mb-6">
          <div className="w-16 h-16 rounded-full bg-gray-700"></div>
          <div className="ml-4">
            <h3 className="text-xl font-bold text-white">{name}</h3>
            {realName && <p className="text-gray-400">({realName})</p>}
          </div>
        </div>
        
        <ul className="space-y-2">
          {credentials.map((credential, index) => (
            <li key={index} className="flex items-start">
              <svg className="w-5 h-5 text-pink-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-300">{credential}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const InstructorSection = () => {
  return (
    <section id="instructors" className="relative py-20 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-black z-0">
        <div className="absolute left-1/3 bottom-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[150px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          The Team Behind This
        </h2>
        
        <p className="text-center text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
          You'll be learning from people who've actually done what you're trying to do:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <InstructorCard
            name="Conro"
            realName="Conor Patton"
            credentials={[
              "Over 250 million Spotify streams",
              "Billboard charting tracks including \"Trippin\" (#7)",
              "Created remixes for Martin Garrix and Afrojack",
              "Performed at Tomorrowland and EDC Las Vegas"
            ]}
            liveBadge={true}
            liveBadgeText="Teaching this week: Advanced Mix Translation"
          />
          
          <InstructorCard
            name="Disero"
            realName="Eric Disero"
            credentials={[
              "That's me! Tracks with over 150 million streams",
              "Created an official remix for Linkin Park",
              "Produced Mutemath's album title track \"Changes\"",
              "Work with Atlantic Records and Warner Bros."
            ]}
            liveBadge={true}
            liveBadgeText="Just taught: Harmonic Analysis Masterclass"
          />
          
          <InstructorCard
            name="BigJerr"
            realName="Jerry DiPhillippo"
            credentials={[
              "One of only 380 Ableton Certified Trainers worldwide",
              "Instructor at the prestigious ICON Collective",
              "20+ years teaching music production",
              "Has mentored artists like Andre3000 and Slander"
            ]}
            liveBadge={true}
            liveBadgeText="Teaching tomorrow: Serum Sound Design"
          />
          
          <InstructorCard
            name="Colton Avery"
            credentials={[
              "Written songs for Alan Walker and Cheat Codes",
              "Toured with The Script",
              "Teaches songwriting at Arizona State University",
              "Creates custom vocals for our members"
            ]}
            liveBadge={true}
            liveBadgeText="Recent session: Vocal Production Workshop"
          />
        </div>
        
        <p className="text-center text-xl text-gray-300 mt-12 max-w-3xl mx-auto">
          We're not just teachers – we're active producers who understand exactly what it takes to succeed in today's music industry.
        </p>
      </div>
    </section>
  );
};

export default InstructorSection;
