import { motion, useInView } from "framer-motion";
import "./Services.scss";
import { useRef } from "react";

const variants = {
  initial: {
    x: -200,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // whileInView={animate}
      ref={ref}
      animate={isInView && "animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward.
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.strong whileHover={{ color: "orange" }}>
              Unique
            </motion.strong>{" "}
            Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.strong whileHover={{ color: "orange" }}>
              For Your
            </motion.strong>{" "}
            Business.
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="boxContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "lightgray", color: "#000000" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni culpa
            illum minima aliquid. Minima minus autem exercitationem quam enim
            officiis, corporis ex labore unde, perferendis sequi eum alias nihil
            similique?
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "lightgray", color: "#000000" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni culpa
            illum minima aliquid. Minima minus autem exercitationem quam enim
            officiis, corporis ex labore unde, perferendis sequi eum alias nihil
            similique?
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "lightgray", color: "#000000" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni culpa
            illum minima aliquid. Minima minus autem exercitationem quam enim
            officiis, corporis ex labore unde, perferendis sequi eum alias nihil
            similique?
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "lightgray", color: "#000000" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni culpa
            illum minima aliquid. Minima minus autem exercitationem quam enim
            officiis, corporis ex labore unde, perferendis sequi eum alias nihil
            similique?
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
