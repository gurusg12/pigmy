import { Link } from "react-router-dom"

const Errorpagenpm = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white relative overflow-hidden">

      {/* Animated Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-purple-600 opacity-20 blur-3xl rounded-full animate-pulse -top-40 -left-40"></div>
      <div className="absolute w-[400px] h-[400px] bg-amber-500 opacity-20 blur-3xl rounded-full animate-pulse bottom-0 right-0"></div>

      
      <h1 className="text-[120px] md:text-[180px] font-extrabold bg-gradient-to-r from-amber-400 to-red-500 text-transparent bg-clip-text animate-pulse">
        404
      </h1>

      <h2 className="text-2xl md:text-3xl font-semibold mt-4">
        Oops! Page Not Found
      </h2>

      <p className="text-gray-400 mt-2 text-center max-w-md">
        The page you are looking for might have been removed,
        had its name changed, or is temporarily unavailable.
      </p>

   
      <div className="mt-10 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-20 h-20 text-amber-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v2m0 4h.01M10.29 3.86l-7 12.124A2 2 0 005 19h14a2 2 0 001.71-3.016l-7-12.124a2 2 0 00-3.42 0z"
          />
        </svg>
      </div>

      {/* Button */}
      <Link
        to="/"
        className="mt-8 px-8 py-3 bg-gradient-to-r from-amber-500 to-red-500 rounded-full font-semibold shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300"
      >
        Go Back Home
      </Link>

      {/* Floating Stars Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-2 h-2 bg-white rounded-full absolute top-10 left-20 animate-ping"></div>
        <div className="w-2 h-2 bg-white rounded-full absolute bottom-20 right-32 animate-ping delay-300"></div>
        <div className="w-2 h-2 bg-white rounded-full absolute top-1/2 left-1/3 animate-ping delay-700"></div>
      </div>

    </div>
  )
}

export default Errorpage