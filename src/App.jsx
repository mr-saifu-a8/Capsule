import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { IoMdMenu } from "react-icons/io";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";
import Footer1 from "./components/Footer1";
import Footer2 from "./components/Footer2";
import { GoArrowUpRight } from "react-icons/go";

export default function App() {
  const wrapperRef = useRef(null);
  const gsapContextRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    gsapContextRef.current = gsap.context(() => {
      const smoother = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 2.5,
        smoothTouch: 0.1,
        effects: true,
      });

      const tl = gsap.timeline();
      tl.to(".loading", { width: "100%", duration: 0.7, delay: 0.3 })
        .to(".capsuleLogo", { scale: 2, duration: 0.5, opacity: 0 }, "a")
        .to(".capsul", { clipPath: "inset(0% 0% 0% 0%)" }, "a");

      const tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: ".page1",
          start: "90% 80%",
          end: "155% 80%",
          scrub: true,
        },
      });
      tl1.to("#bgImage", { transform: "scale(1.05)" });

      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".page2",
          start: "28% 70%",
          end: "100% 70%",
          scrub: 1,
        },
      });
      tl2.to(".page2 .bottom", { y: 760 });

      const tl3 = gsap.timeline({
        scrollTrigger: {
          trigger: ".page3",
          start: "25% 50%",
          end: "60% 50%",
          scrub: 1,
        },
      });
      tl3.to(".hide", { top: "-100%", stagger: 0.1 });

      const tl4 = gsap.timeline({
        scrollTrigger: {
          trigger: ".page4",
          start: "30% 30%",
          end: "220% 30%",
          scrub: 1,
          pin: true,
        },
      });

      tl4
        .to(".box h3", { opacity: 0 }, "a")
        .to(
          ".page4 .background",
          {
            width: "calc(100vw - 1rem)",
            height: "calc(100vh - 1rem)",
            borderRadius: "3.5rem",
            y: -40,
          },
          "a"
        )
        .to(".page4 .background img", { transform: "scale(1)" }, "a")
        .from(
          ".background .topText h4, .background .topText h3, .background .bottomText h3",
          { opacity: 0, x: 50 }
        );

      tl4.to({}, { duration: 0.4 }, "+=0");

      tl4
        .to("#second", { transform: "translate(-50%, -56%)" }, "b")
        .to("#second img", { transform: "scale(1)" }, "b")
        .to(".page4 .background", { scale: 0.9, opacity: 0, y: -50 }, "b")
        .from(
          "#second .topText h4, #second .topText h3, #second .bottomText h3",
          { opacity: 0, x: 50 }
        );

      tl4.to({}, { duration: 0.4 }, "+=0");

      tl4
        .to("#third", { transform: "translate(-50%, -56%)" }, "c")
        .to("#third img", { transform: "scale(1)" }, "c")
        .to("#second", { scale: 0.9, opacity: 0 }, "c")
        .from("#third .topText h4, #third .topText h3, #third .bottomText h3", {
          opacity: 0,
          x: 50,
        });

      tl4.to({}, { duration: 0.4 }, "+=0");

      ScrollTrigger.refresh();
    }, wrapperRef);

    return () => {
      if (gsapContextRef.current) gsapContextRef.current.revert();
      try {
        const sm = ScrollSmoother.get();
        if (sm) sm.kill();
      } catch (e) {}
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <div id="smooth-wrapper" ref={wrapperRef}>
      <div id="smooth-content">
        <div className="page1">
          <div className="capsuleBox">
            <div className="capsuleLogo">
              <h1 className="uppercase">Capsules</h1>
              <div className="loading"></div>
            </div>
          </div>

          <div className="capsul">
            <div className="background">
              <img id="bgImage" src="/images/background1.png" alt="bg1" />
              <div className="top">
                <h1 className="font-bold">Capsules</h1>
                <button className="menuBtn">
                  Reserve <GoArrowUpRight className="menu" size={20} />
                </button>
              </div>
              <div className="bottom">
                <h3>Closer to Nature - Closer to Yourself</h3>
                <button className="menuBtn">
                  Menu <IoMdMenu className="menu" size={20} />
                </button>
                <h4>
                  Spend unforgettable and remarkable time in the Californian
                  desert with-Capsules.
                </h4>
              </div>
            </div>
          </div>
        </div>

        <Page2 />
        <Page3 />
        <Page4 />
        <Footer1 />
        <Footer2 />
      </div>
    </div>
  );
}
