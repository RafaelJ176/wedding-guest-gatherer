
import { useState } from "react";
import GuestCounter from "@/components/GuestCounter";
import RsvpButtons from "@/components/RsvpButtons";

const Index = () => {
  const [guestCount, setGuestCount] = useState(1);
  
  return (
    <div className="min-h-screen bg-wedding-primary py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center animate-fadeIn">
          <span className="text-sm uppercase tracking-widest text-wedding-accent mb-4 inline-block">
            Save the Date
          </span>
          <h1 className="font-cormorant text-5xl md:text-6xl lg:text-7xl mb-6 text-wedding-text">
            Noa & Rafael
          </h1>
          <p className="text-xl md:text-2xl text-wedding-text opacity-90 mb-12">
            20.05.2025
          </p>
          
          <div className="bg-white bg-opacity-50 backdrop-blur-sm rounded-2xl p-8 mb-12 shadow-lg">
            <h2 className="font-cormorant text-3xl mb-8 text-wedding-text">
              Dear Guest Name
            </h2>
            <p className="text-lg text-wedding-text opacity-80 mb-8">
              We would be honored to have you join us in celebrating our wedding day.
            </p>
            
            <div className="mb-8">
              <h3 className="text-lg text-wedding-text mb-2">Number of Guests</h3>
              <GuestCounter onChange={setGuestCount} />
            </div>
            
            <RsvpButtons guestCount={guestCount} />
          </div>
          
          <div className="text-wedding-text opacity-70 text-sm">
            Please RSVP by 20.04.2025
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
