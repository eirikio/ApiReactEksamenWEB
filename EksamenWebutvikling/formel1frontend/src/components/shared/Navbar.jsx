import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="flex h-20 justify-center bg-black font-cabin text-xl tracking-widest text-white ">
        <ul className="flex items-center gap-20">
          <Link to="/" className="hover:scale-110">
            HOME
          </Link>
          <Link to="game" className="hover:scale-110">
            GAME
          </Link>
          <Link to="learn" className="hover:scale-110">
            LEARN
          </Link>
          <Link to="register" className="hover:scale-110">
            REGISTER
          </Link>
          <Link to="about" className="hover:scale-110">
            ABOUT
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
