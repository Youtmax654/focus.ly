import Button from "../UI/Button";

const Hero = () => {
  return (
    <div className="flex justify-center">
      <div
        className="w-[1216px] h-[600px] relative text-white rounded-2xl"
        style={{
          background: "url(/Home/heroBg.jpg)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <span className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-2xl opacity-80"></span>
        <h1 className="absolute bottom-40 headline-large left-12">
          Welcome to Focusly
        </h1>
        <p className="body-medium absolute bottom-32 left-12">
          A simple, beautiful, and effective way to stay focused and get work
          done.
        </p>
        <Button value="Get started" className="absolute bottom-12 left-12" />
      </div>
    </div>
  );
};

export default Hero;
