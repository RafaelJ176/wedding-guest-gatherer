
import { useNavigate } from "react-router-dom";

interface RsvpButtonsProps {
  guestCount: number;
}

const RsvpButtons = ({ guestCount }: RsvpButtonsProps) => {
  const navigate = useNavigate();

  const handleResponse = (response: string) => {
    // Here we'll later add the Google Sheets integration
    navigate("/thank-you");
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md mx-auto">
      {["Coming", "Maybe", "Not Coming"].map((response) => (
        <button
          key={response}
          onClick={() => handleResponse(response)}
          className="px-8 py-3 rounded-full bg-wedding-accent text-white hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
        >
          {response}
        </button>
      ))}
    </div>
  );
};

export default RsvpButtons;
