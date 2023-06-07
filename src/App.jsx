import Navbar from "./components/Navbar";
import Skewdiv from "./components/Skewdiv";

const App = () => {
  const skewNumbers = [1, 2, 3, 4];
  return (
    <>
      <div className="absolute top-0 z-20">
        <Navbar />
      </div>

      <div className="relative w-full h-screen bg-palewhite flex justify-center items-center">
        {/* hanging piece 1 */}
        <div className="absolute top-0 left-24 w-36 h-1/2 bg-pink-50 rounded-b-full"></div>

        {/* hanging piece 2 */}
        <div className="absolute top-0 right-36 w-36 h-3/4 bg-pink-50 rounded-b-full"></div>

        {/* legendary text */}

        <div className="flex gap-5 z-20 flex-col justify-center items-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-700">
          <h1 className="font-camar text-9xl">Legendary</h1>
          <Skewdiv />
          <h1 className="font-camar text-9xl">For You</h1>

          {/* playstore link */}
          <div className="h-14 gap-7 px-6 overflow-hidden bg-gradient-to-r from-purple-700 to-pink-500 flex justify-center items-center -skew-y-3">
            {skewNumbers.map((_, idx) => (
              <span
                key={idx}
                className="w-9 h-[120%] skew-y-12 -skew-x-12 bg-slate-50 opacity-25 z-40"
              ></span>
            ))}

            <h3 className="absolute font-camar text-white text-3xl">
              Get It Now{" "}
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
