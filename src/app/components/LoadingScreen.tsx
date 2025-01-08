"use client";

import { useState, useEffect, useRef } from "react";

export default function LoadingScreen({ children }: { children: React.ReactNode }) {
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const loadingScreenRef = useRef<HTMLDivElement | null>(null);

  const handleTransitionEnd = () => {
    // After fade-out completes, hide the loading screen
    setIsVisible(false);
  };

  useEffect(() => {
    if (isFadingOut && loadingScreenRef.current) {
      // Listen for the end of the fade-out transition
      loadingScreenRef.current.addEventListener("transitionend", handleTransitionEnd);
    }

    return () => {
      // Cleanup the event listener
      if (loadingScreenRef.current) {
        loadingScreenRef.current.removeEventListener("transitionend", handleTransitionEnd);
      }
    };
  }, [isFadingOut]);

  useEffect(() => {
    // Simulate a loading process, then fade-out after images have loaded or after a timeout
    const timeoutId = setTimeout(() => {
      setIsFadingOut(true);
    }, 1000); // You can adjust this timeout to match your needs

    return () => {
      clearTimeout(timeoutId); // Cleanup the timeout on unmount
    };
  }, []);

  return (
    <>
      {isVisible && (
        <div
          ref={loadingScreenRef}
          className={`loading-screen ${isFadingOut ? "fade-out" : ""}`}
        >
          <p className="loading-text">VERITAS</p>
        </div>
      )}
      <div className={isVisible ? "content-hidden" : ""}>
        {children}
      </div>
    </>
  );
}
