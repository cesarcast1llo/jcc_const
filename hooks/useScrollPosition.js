import { useState, useEffect } from "react";

const useScrollPosition = () => {
  if (typeof window === "undefined") return 0;

  const image = window.pageYOffset + 30;
  const [scrollPos, setScrollPos] = useState(window.pageYOffset);

  // On Scroll
  const onScroll = () => {
    setScrollPos(window.pageYOffset);
  };

  // Add and remove the window listener
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  });

  return scrollPos;
};

export default useScrollPosition;


  // var slide = $('yourIdOrClassName').offset().top;
  // $(window).on('scroll', function() {
  //   if($(window).scrollTop() > slide) {
  //     $('nav').addClass('sticky');
  //   } else {
  //   $('nav').removeClass('sticky');
  //   }
  // });

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