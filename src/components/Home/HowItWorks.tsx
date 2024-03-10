import { IoPlayOutline } from "react-icons/io5";
import { LuClock3 } from "react-icons/lu";
import Card from "../UI/Card";

const HowItWorks = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-8">
        <h1 className="headline-medium">How it works</h1>
        <div className="flex gap-4">
          <Card
            Icon={LuClock3}
            title="Pomodoro Timer"
            description="Work for 25 minutes, then take a 5-minute break. Repeat this cycle 4 times, then take a longer break for 15-30 minutes"
          />
          <Card
            Icon={IoPlayOutline}
            title="Music Player"
            description="Choose from our library of focus-enhancing music or import your own. Tracks will automatically pause and resume with your timer."
          />
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
