export default function Footer2() {
  return (
    <footer className="relative w-full h-[30vw]  text-white">
      <div className="line "></div>
      {/* Top Line */}
      <div className="capsule flex justify-between items-center px-10 md:px-12 py-4 text-sm opacity-80">
        <p>
          Website made by—{" "}
          <a className="underline  hover:opacity-70 transition">Moyra.co</a>
        </p>

        <p>
          This website is using{" "}
          <span className="underline cursor-pointer">cookies.</span>
        </p>

        <p>All rights reserved © 2025</p>
      </div>

      {/* Big Title */}
      <div className="w-full flex justify-center items-center py-20">
        <h1
          className="text-center font-bold leading-none
                     text-[22.5vw] md:text-[200px] lg:text-[260px]
                     bg-gradient-to-b from-[#cbbfaa] to-[#f5efe7]
                     text-transparent bg-clip-text"
        >
          Capsules
        </h1>
      </div>
    </footer>
  );
}

