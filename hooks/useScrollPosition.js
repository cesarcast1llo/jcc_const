import { useState, useEffect } from "react";

const useScrollPosition = () => {
   if (typeof window === 'undefined') {
      global.window = {}
  }

  const [scrollPos, setScrollPos] = useState(window.pageYOffset);

  const onScroll = () => {
    setScrollPos(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  });

  return scrollPos;
};

export default useScrollPosition;

// function getWindowDimensions() {
//    const { innerWidth: width, innerHeight: height } = window;
//    return {
//      width,
//      height
//    };
//  }
 
//  export default function useWindowDimensions() {
//    const [windowDimensions, setWindowDimensions] = useState(
//      getWindowDimensions()
//    );
 
//    useEffect(() => {
//      function handleResize() {
//        setWindowDimensions(getWindowDimensions());
//      }
 
//      window.addEventListener("resize", handleResize);
//      return () => window.removeEventListener("resize", handleResize);
//    }, []);
 
//    return windowDimensions;
//  }