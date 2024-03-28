import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import "./Portfolio.scss";
import { useRef } from "react";

const items = [
  {
    id: 1,
    title: "Music App",
    image:
      "https://cdn.dribbble.com/users/5433628/screenshots/14874887/media/6bcab01f1c6d9ec6f571a6da7f79cbd2.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia sint recusandae omnis fuga possimus animi excepturi iusto incidunt reiciendis, soluta at illum ipsam nisi quos vero labore libero deserunt necessitatibus.",
  },
  {
    id: 2,
    title: "Web App",
    image:
      "https://cdn.dribbble.com/users/3136781/screenshots/9984581/media/6f6a86926d2a84b6414ee478b07a17bb.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia sint recusandae omnis fuga possimus animi excepturi iusto incidunt reiciendis, soluta at illum ipsam nisi quos vero labore libero deserunt necessitatibus.",
  },
  {
    id: 3,
    title: "GameHub App",
    image:
      "https://www.sliderrevolution.com/wp-content/uploads/2022/10/template-preview.jpg",

    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia sint recusandae omnis fuga possimus animi excepturi iusto incidunt reiciendis, soluta at illum ipsam nisi quos vero labore libero deserunt necessitatibus.",
  },
  {
    id: 4,
    title: "NFT App",
    image:
      "https://cdn.dribbble.com/users/6083079/screenshots/17987594/media/ff8919e294233ed64d337d35137462c4.png?resize=800x600&vertical=center",

    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia sint recusandae omnis fuga possimus animi excepturi iusto incidunt reiciendis, soluta at illum ipsam nisi quos vero labore libero deserunt necessitatibus.",
  },
];

const PortfolioSection = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);
  return (
    <section>
      <div className="container">
        <div className="imgContainer" ref={ref}>
          <img src={item.image} alt="" />
        </div>
        <motion.div className="textContainer" style={{ y }}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <a href="#">Go Item</a>
        </motion.div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
  });
  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <PortfolioSection item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
