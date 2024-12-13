import React, { useEffect, useRef } from "react";
import "./Header.css";
import { assets } from "../../assets/assets";

const Header = () => {
  const imgRef = useRef();
  const contentsRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            entry.target.classList.remove("hidden");
          } else {
            entry.target.classList.add("hidden");
            entry.target.classList.remove("visible");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    // Observe both the image and contents
    const elementsToObserve = [imgRef.current, contentsRef.current];

    elementsToObserve.forEach((element) => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      elementsToObserve.forEach((element) => {
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  return (
    <>
    <div className="header">
      <img
        ref={imgRef}
        className="header-img"
        src={assets.header_imgg}
        alt=""
        style={{ zIndex: "10" }}
      />
      <div ref={contentsRef} className="header-contents">
        <h3>
          <i>The Spectacle</i> <strong>Before Us Was Indeed</strong>{" "}
          <i>Sublime.</i>
        </h3>
        <p>
          <i>
            Apparently, we had reached a great height in the atmosphere, for the
            sky was a dead black, and which lifts the horizon of the sea to the
            level of the spectator on a hillside.
          </i>
        </p>
      </div>
    </div>
    </>
  );
};

export default Header;
