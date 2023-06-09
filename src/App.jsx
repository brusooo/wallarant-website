import Navbar from "./components/Navbar";
import Skewdiv from "./components/Skewdiv";

const App = () => {
  const skewNumbers = [1, 2, 3, 4];
  return (
    <div className="max-w-full ml-auto mr-auto">
      <div className="absolute top-0 z-20">
        <Navbar />
      </div>

      {/* hanging piece 1 */}
      <div className="fixed top-0 sm:left-24 -left-20 w-36 h-96 bg-pink-50 rounded-b-full"></div>

      {/* hanging piece 2 */}
      <div className="fixed top-0 sm:right-36 -right-8 w-36 h-80 bg-pink-50 rounded-b-full"></div>

      <div className="flex flex-col min-h-screen justify-center align-center py-32 max-sm:py-48">
        {/* legendary text */}

        <div className="flex gap-5 md:text-9xl sm:text-8xl text-6xl z-20 flex-col justify-center items-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-700">
          <h1 className="font-camar">Legendary</h1>
          <Skewdiv />
          <h1 className="font-camar">For You</h1>

          {/* playstore link */}
          <a
            href="https://play.google.com/store/apps/details?id=com.brusooo.wallarant"
            className="sm:h-14 h-12  gap-7 sm:px-6 px-4 cursor-pointer overflow-hidden bg-gradient-to-r from-purple-700 to-pink-500 flex justify-center items-center -skew-y-3"
          >
            {skewNumbers.map((_, idx) => (
              <span
                key={idx}
                className="w-9 h-[120%] skew-y-12 -skew-x-12 bg-slate-50 opacity-25 z-40"
              ></span>
            ))}

            <h3 className="absolute font-camar text-white text-3xl">
              Get It Now{" "}
            </h3>
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
