import Hero from "@/components/Home/Hero";
import HowItWorks from "@/components/Home/HowItWorks";

export default function Home() {
  return (
    <div className="flex flex-col gap-14">
      <Hero />
      <HowItWorks />
    </div>
  );
}
