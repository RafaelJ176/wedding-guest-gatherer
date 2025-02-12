
import { useEffect } from "react";
import { Heart } from "lucide-react";

const ThankYou = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-wedding-primary p-4">
      <div className="text-center max-w-2xl mx-auto animate-fadeIn">
        <Heart className="mx-auto mb-8 text-wedding-accent animate-float" size={48} />
        <h1 className="font-cormorant text-4xl md:text-5xl lg:text-6xl mb-6 text-wedding-text">
          Thank you!
        </h1>
        <p className="text-xl md:text-2xl text-wedding-text opacity-90 mb-8">
          We would love to see you there!
        </p>
        <p className="text-lg text-wedding-text opacity-80">
          Your response has been recorded.
        </p>
      </div>
    </div>
  );
};

export default ThankYou;
