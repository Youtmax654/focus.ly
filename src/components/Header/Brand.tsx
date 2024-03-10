import Image from "next/image";
import Link from "next/link";

const Brand = () => {
  return (
    <Link href="/" className="flex select-none items-center">
      <Image
        src="/focusly.svg"
        alt="Focusly"
        width={80}
        height={80}
        draggable={false}
      />
      <h1 className="headline-medium">Focusly</h1>
    </Link>
  );
};

export default Brand;
