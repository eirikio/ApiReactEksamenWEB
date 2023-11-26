import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="text-md flex h-20 justify-center bg-black font-cabin tracking-widest text-white sm:text-xl">
        <ul className="flex items-center gap-4 sm:gap-10 md:gap-16 lg:gap-20 xl:gap-20 2xl:gap-20">
          <Link to="/" className="hover:scale-110">
            HOME
          </Link>
          <Link to="game" className="hover:scale-110">
            GAME
          </Link>
          <Link to="overview" className="hover:scale-110">
            OVERVIEW
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

// import { Link } from "react-router-dom";
// import { useState } from "react";

// const Navbar = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   let timeoutId;

//   const handleDropdownToggle = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   const handleDropdownEnter = () => {
//     clearTimeout(timeoutId);
//     setIsDropdownOpen(true);
//   };

//   const handleDropdownLeave = () => {
//     timeoutId = setTimeout(() => {
//       setIsDropdownOpen(false);
//     }, 300); // Adjust the delay as needed (in milliseconds)
//   };

//   return (
//     <>
//       <nav className="flex h-20 justify-center bg-black font-cabin text-xl tracking-widest text-white">
//         <ul className="flex items-center gap-20">
//           <Link
//             to="/"
//             className="hover:scale-110"
//             onMouseEnter={() => handleDropdownLeave()}
//           >
//             HOME
//           </Link>
//           <Link
//             to="game"
//             className="hover:scale-110"
//             onMouseEnter={() => handleDropdownLeave()}
//           >
//             GAME
//           </Link>
//           <div
//             className="group relative"
//             onMouseEnter={() => handleDropdownEnter()}
//             onMouseLeave={() => handleDropdownLeave()}
//           >
//             <span className="cursor-pointer hover:scale-110">OVERVIEW</span>
//             {isDropdownOpen && (
//               <div
//                 className="absolute mt-2 space-y-2 bg-white p-2 text-black"
//                 onMouseEnter={() => handleDropdownEnter()}
//                 onMouseLeave={() => handleDropdownLeave()}
//               >
//                 <Link to="learn" className="block">
//                   Learn Page 1
//                 </Link>
//                 <Link to="learn/page2" className="block">
//                   Learn Page 2
//                 </Link>
//                 {/* Add more links as needed */}
//               </div>
//             )}
//           </div>
//           <Link
//             to="register"
//             className="hover:scale-110"
//             onMouseEnter={() => handleDropdownLeave()}
//           >
//             REGISTER
//           </Link>
//           <Link
//             to="about"
//             className="hover:scale-110"
//             onMouseEnter={() => handleDropdownLeave()}
//           >
//             ABOUT
//           </Link>
//         </ul>
//       </nav>
//     </>
//   );
// };

// export default Navbar;
