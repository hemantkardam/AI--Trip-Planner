import { Link } from "react-router-dom";
import { Button } from "../ui/button";

function Hero() {
  return (
    <div className="flex flex-col items-center mx-56 gap-9">
      <h1 className="font-extrabold text-[50px] text-center mt-16">
        <span className="text-[#f56551]">
          Discover Your Next Adventure with AI:
        </span>
        Personalized Itineraries at Your Fingertips
      </h1>
      <p className="text-xl text-gray-500 text-center">
        Your Personal trip planner and travel curator, creating custom
        Itineraries tailored to Your interests and budget.
      </p>
      <Link to={"/create-trip"}>
        <Button>Get Started, Its Free</Button>
      </Link>
    </div>
  );
}

export default Hero;
