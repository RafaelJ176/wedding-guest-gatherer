
import { useState } from "react";
import { Minus, Plus } from "lucide-react";

interface GuestCounterProps {
  onChange: (count: number) => void;
}

const GuestCounter = ({ onChange }: GuestCounterProps) => {
  const [count, setCount] = useState(1);

  const updateCount = (newCount: number) => {
    if (newCount >= 1 && newCount <= 10) {
      setCount(newCount);
      onChange(newCount);
    }
  };

  return (
    <div className="flex items-center justify-center space-x-4 my-6">
      <button
        onClick={() => updateCount(count - 1)}
        className="w-10 h-10 rounded-full border border-wedding-accent text-wedding-accent hover:bg-wedding-accent hover:text-white transition-colors duration-300 flex items-center justify-center"
        disabled={count <= 1}
      >
        <Minus size={20} />
      </button>
      <span className="font-cormorant text-2xl min-w-[3rem] text-center">
        {count}
      </span>
      <button
        onClick={() => updateCount(count + 1)}
        className="w-10 h-10 rounded-full border border-wedding-accent text-wedding-accent hover:bg-wedding-accent hover:text-white transition-colors duration-300 flex items-center justify-center"
        disabled={count >= 10}
      >
        <Plus size={20} />
      </button>
    </div>
  );
};

export default GuestCounter;
