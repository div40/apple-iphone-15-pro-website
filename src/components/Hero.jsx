import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "../utils";
import { useEffect, useState } from "react";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleVideoSrcSet);

    return () => {
      window.removeEventListener("resize", handleVideoSrcSet);
    };
  }, []);

  useGSAP(() => {
    gsap.to("#hero-text", {
      opacity: 1,
      delay: 1.7,
    });

    gsap.to("#cta", {
      opacity: 1,
      y: -50,
      delay: 1.7,
    });
  }, []);
  return (
    <section className="relative w-full bg-black nav-height">
      <div className="flex-col w-full h-5/6 flex-center">
        <p id="hero-text" className="hero-title font-sfdisplay">
          iPhone 15 Pro
        </p>
        <div className="w-9/12 md:w-10/12">
          <video
            autoPlay
            muted
            playsInline={true}
            key={videoSrc}
            className="pointer-events-none"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>
      <div
        id="cta"
        className="flex flex-col items-center translate-y-20 opacity-0"
      >
        <a
          href="#highlights"
          className="text-lg font-semibold btn font-sfdisplay"
        >
          Buy
        </a>
        <p className="text-xl font-semibold tracking-wider font-sfdisplay">
          From ₹21483.00/mo or ₹134900.00
        </p>
      </div>
    </section>
  );
};

export default Hero;
