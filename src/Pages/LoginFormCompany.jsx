import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Login_api from '../Api/LoginApi';

const LoginFormCompany = () => {
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Refs for GSAP animations
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const headingRef = useRef(null);
  const subtitleRef = useRef(null);
  const formCardRef = useRef(null);
  const circleRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate background circles
      gsap.from(circleRefs.current, {
        scale: 0,
        opacity: 0,
        duration: 1.5,
        stagger: 0.2,
        ease: 'power3.out'
      });

      // Animate logo
      gsap.from(logoRef.current, {
        y: -30,
        opacity: 0,
        duration: 0.8,
        delay: 0.3,
        ease: 'power3.out'
      });

      // Animate heading
      gsap.from(headingRef.current, {
        x: -50,
        opacity: 0,
        duration: 0.8,
        delay: 0.5,
        ease: 'power3.out'
      });

      // Animate subtitle
      gsap.from(subtitleRef.current, {
        x: -50,
        opacity: 0,
        duration: 0.8,
        delay: 0.7,
        ease: 'power3.out'
      });

      // Animate form card
      gsap.from(formCardRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        delay: 0.9,
        ease: 'back.out(1.7)'
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  

  function submit(e) {
    e.preventDefault();
    setIsLoading(true);

    const data = new URLSearchParams();
    data.append('email', email);
    data.append('pwd', pwd);

    fetch(Login_api, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: data.toString()
    })
      .then((response) => response.json())
      .then((result) => {
        setUser(result);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }

  return (
    <div 
      ref={containerRef}
      className="min-h-screen w-full bg-gradient-to-br from-[#0a1128] via-[#1a2744] to-[#0f1729] relative overflow-hidden flex items-center justify-center p-4"
    >
      {/* Decorative circles */}
      <div 
        ref={(el) => circleRefs.current[0] = el}
        className="absolute top-10 left-20 w-96 h-96 bg-[#1e3a8a]/30 rounded-full blur-3xl"
      />
      <div 
        ref={(el) => circleRefs.current[1] = el}
        className="absolute -bottom-20 -right-20 w-[600px] h-[600px] bg-[#1e3a8a]/20 rounded-full blur-3xl"
      />
      <div 
        ref={(el) => circleRefs.current[2] = el}
        className="absolute top-1/2 left-10 w-64 h-64 bg-[#3b82f6]/10 rounded-full blur-2xl"
      />

      {/* Main content */}
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left side - Branding and heading */}
        <div className="text-white space-y-6 px-4">
          <div ref={logoRef} className="flex items-center gap-3 mb-8">
            <div className="w-3 h-3 rounded-full bg-[#6366f1] ring-4 ring-[#6366f1]/30" />
            <span className="text-xl font-medium">circles</span>
          </div>

          <div>
            <h1 
              ref={headingRef}
              className="text-5xl font-bold mb-4 leading-tight"
            >
              Login into<br />your account
            </h1>
            <p 
              ref={subtitleRef}
              className="text-[#94a3b8] text-lg"
            >
              Let us make the circle bigger!
            </p>
          </div>
        </div>

        {/* Right side - Login form */}
        <div ref={formCardRef} className="w-full max-w-md mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <form onSubmit={submit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm text-gray-700 font-medium">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e73ff] focus:border-transparent transition-all duration-300 text-gray-900 placeholder:text-gray-400"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm text-gray-700 font-medium">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Your password"
                  value={pwd}
                  onChange={(e) => setPwd(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e73ff] focus:border-transparent transition-all duration-300 text-gray-900 placeholder:text-gray-400"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#1e73ff] hover:bg-[#1557cc] text-white py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-[#1e73ff]/20"
              >
                {isLoading ? 'Loading...' : 'Login'}
              </button>

              <div className="text-center text-sm text-gray-600">
                Don't have an account?{' '}
                <a href="#" className="text-[#1e73ff] hover:underline font-medium">
                  Sign up
                </a>
              </div>
            </form>

            {user && (
              <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-700 text-sm">
                  Status: {user.status}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-6 left-0 right-0 text-center">
        <p className="text-[#64748b] text-sm">
          © 2021 Circles. All rights Reserved.
        </p>
      </div>
      {user && (
        <div>
          {JSON.stringify(user)}
        </div>
      )}
    </div>
  );
};

export default LoginFormCompany;