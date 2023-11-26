const HomePage = () => {
  return (
    <>
      <main className="h-[calc(100vh-79px)] bg-gradient-to-b from-black via-black to-gray-800 lg:h-[calc(100vh-80px)]">
        <section className="flex flex-col text-white">
          <div className="ml-20 lg:ml-36">
            <div className="mt-10 w-max  lg:mt-36">
              <h1 className="font-blackopsone text-7xl lg:text-9xl">
                Formula 1
              </h1>
            </div>
            <div className="mt-20 w-max  font-dosis lg:mt-28">
              <h2 className="text-4xl">Get ready for Formula 1</h2>
            </div>
            <div className="mt-5 w-96 font-cabin italic sm:w-[500px]">
              <p>
                Formula 1, the pinnacle of motorsport, combines cutting-edge
                technology with elite driving skill. Iconic teams like Ferrari
                and Mercedes, legendary racetracks like Monaco and Silverstone,
                and drivers such as Lewis Hamilton and Sebastian Vettel define
                the sport. With lightning-fast cars, daring overtakes, and
                strategic pit stops, each Grand Prix is a high-stakes battle for
                victory. The roar of engines, the smell of burning rubber, and
                the thrill of speed make Formula 1 a global spectacle that
                captivates millions of fans worldwide.
              </p>
            </div>
          </div>
        </section>
        <img
          className="ml-20 h-[250px] w-[350px] -rotate-6 sm:h-[300px] sm:w-[450px] md:ml-96 lg:ml-[600px] lg:h-[500px] lg:w-[780px] lg:translate-x-[90px] lg:translate-y-[-500px]"
          src="images/formel1header.png"
          alt="Formel 1 car. Photo."
        />
      </main>
    </>
  );
};

export default HomePage;

// <>
//   <main className="bg-gradient-to-b from-black via-black to-gray-800">
//     <section className="ml-60 flex h-[calc(100vh-80px)] w-HomePageTextContainer flex-col gap-48 text-white ">
//       <h1 className="mt-20 font-blackopsone text-9xl">Formel 1</h1>
//       <div className="w-5/6">
//         <h2 className="mb-8 font-dosis text-5xl">Get ready for Formel 1</h2>
//         <p className="font-cabin text-sm italic tracking-wide shadow-black drop-shadow-2xl">
//           Formula 1, the pinnacle of motorsport, combines cutting-edge
//           technology with elite driving skill. Iconic teams like Ferrari and
//           Mercedes, legendary racetracks like Monaco and Silverstone, and
//           drivers such as Lewis Hamilton and Sebastian Vettel define the
//           sport. With lightning-fast cars, daring overtakes, and strategic
//           pit stops, each Grand Prix is a high-stakes battle for victory.
//           The roar of engines, the smell of burning rubber, and the thrill
//           of speed make Formula 1 a global spectacle that captivates
//           millions of fans worldwide.
//         </p>
//       </div>
//       <img
//         className="absolute h-HeaderCarH w-HeaderCarW translate-x-full translate-y-10  -rotate-6"
//         src="images/formel1header.png"
//         alt=""
//       />
//     </section>
//   </main>
// </>
