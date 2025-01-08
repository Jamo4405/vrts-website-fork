"use client";

import { useState, useEffect, useRef } from "react";

export default function LoadingScreen({ children }: { children: React.ReactNode }) {
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const loadingScreenRef = useRef<HTMLDivElement | null>(null);

  const handleTransitionEnd = () => {

    setIsVisible(false);
  };

  useEffect(() => {
    if (isFadingOut && loadingScreenRef.current) {

      loadingScreenRef.current.addEventListener("transitionend", handleTransitionEnd);
    }

    return () => {

      if (loadingScreenRef.current) {
        loadingScreenRef.current.removeEventListener("transitionend", handleTransitionEnd);
      }
    };
  }, [isFadingOut]);

  useEffect(() => {

    const timeoutId = setTimeout(() => {
      setIsFadingOut(true);
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <div
          ref={loadingScreenRef}
          className={`loading-screen ${isFadingOut ? "fade-out" : ""}`}
        >
          <img src={"/blogo.svg"} alt={"logo"} width={40} height={40}/>
          <p className="loading-text pl-1.5">VERITAS <sup>®</sup></p>
        </div>
      )}
      <div className={isVisible ? "content-hidden" : ""}>
        {children}
      </div>
    </>
  );
}
