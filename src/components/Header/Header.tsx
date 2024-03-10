import Brand from "./Brand";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="flex flex-row items-center justify-between border-b border-solid border-burlywood/25">
      <Brand />
      <Navbar />
    </div>
  );
};

export default Header;
