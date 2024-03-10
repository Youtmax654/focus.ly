import Link from "next/link";

const Navbar = () => {
  const navs = [
    {
      title: "Home",
      link: "#",
    },
    {
      title: "Timer",
      link: "#",
    },
    {
      title: "Music",
      link: "#",
    },
    {
      title: "Community",
      link: "#",
    },
  ];

  return (
    <div className="label-large mx-3 flex flex-row gap-4">
      {navs.map((nav) => (
        <Link key={nav.title} href={nav.link} className="nav">
          {nav.title}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
