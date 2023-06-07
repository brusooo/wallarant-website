const Skewdiv = () => {
  const skewNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  return (
    <div className="w-[700px] h-28 gap-12 overflow-hidden bg-gradient-to-r from-purple-700 to-pink-500 flex justify-center items-center -skew-y-3">
      {skewNumbers.map((_, idx) => (
        <span
          key={idx}
          className="inline-block px-5 h-[120%] skew-y-12 -skew-x-12 bg-slate-50 opacity-25 z-40"
        ></span>
      ))}

      <h1 className="absolute font-camar text-white text-8xl">Collectible</h1>
    </div>
  );
};

export default Skewdiv;
