import React from "react";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

import images from "../../../assets/index";
import "../Slider/index.scss";

const Slider = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div className="slider_box">
      <motion.div
        ref={carousel}
        className="slider_box-carousel"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="slider_box-inner"
        >
          {images.map((image) => {
            return (
              <motion.div className="slider_box-item" key={image}>
                <img src={image} alt="" />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Slider;
