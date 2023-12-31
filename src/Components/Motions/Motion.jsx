import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const Motion = ({ children, width = "fit-content" || "100%" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const controlAnimation = useAnimation();

  useEffect(() => {
    if (isInView) {
      controlAnimation.start("visible");
    }
  });
  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            x: -75,
          },
          visible: {
            opacity: 1,
            x: 0,
          },
        }}
        initial="hidden"
        animate={controlAnimation}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Motion;
