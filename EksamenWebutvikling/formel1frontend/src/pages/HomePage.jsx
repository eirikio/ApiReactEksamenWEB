const HomePage = () => {
  return (
    <>
      <main className="bg-gradient-to-b from-black via-black to-gray-800">
        <section className="w-HomePageTextContainer ml-60 flex h-[calc(100vh-80px)] flex-col gap-48 text-white ">
          <h1 className="font-blackopsone mt-20 text-9xl">Formel 1</h1>
          <div className="w-5/6">
            <h2 className="font-dosis mb-8 text-5xl">Get ready for Formel 1</h2>
            <p className="font-cabin text-sm italic tracking-wide shadow-black drop-shadow-2xl">
              Formula 1, the pinnacle of motorsport, combines cutting-edge
              technology with elite driving skill. Iconic teams like Ferrari and
              Mercedes, legendary racetracks like Monaco and Silverstone, and
              drivers such as Lewis Hamilton and Sebastian Vettel define the
              sport. With lightning-fast cars, daring overtakes, and strategic
              pit stops, each Grand Prix is a high-stakes battle for victory.
              The roar of engines, the smell of burning rubber, and the thrill
              of speed make Formula 1 a global spectacle that captivates
              millions of fans worldwide.
            </p>
          </div>
          <img
            className="h-HeaderCarH w-HeaderCarW absolute translate-x-full translate-y-10  -rotate-6"
            src="images/formel1header.png"
            alt=""
          />
        </section>
      </main>
    </>
  );
};

export default HomePage;
