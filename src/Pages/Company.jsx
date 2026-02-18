import React, { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Nav from "../Components/Companys/Nav";
import { gsap } from "gsap";

const Company = () => {
  const contentRef = useRef(null);
  const location = useLocation();

  // 🔥 Smooth page transition
  useEffect(() => {
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-gray-200 flex flex-col">

      {/* Top Nav → assuming this is now your LEFT SIDEBAR */}
      <Nav />

      {/* Main Content – pushed right on desktop to avoid sidebar overlap */}
      <main className="flex-1 md:ml-50 lg:ml-72 pt-6 pb-10 px-3 sm:px-6 md:px-8">

        <div
          ref={contentRef}
          className="
            bg-white
            rounded-l
            border
            border-slate-200
            shadow-md
            min-h-[85vh]

            /* Mobile – full width, no left offset */
            mx-1 p-3

            /* Tablet */
            sm:mx-2 sm:p-4

            /* Desktop – centered, max width */
            md:mx-auto md:max-w-7xl md:p-6 md:shadow-xl md:rounded-2xl
          "
        >
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center text-gray-500 text-xs pb-4 mt-auto">
        © {new Date().getFullYear()} Agent Panel
      </footer>
    </div>
  );
};

export default Company;