import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const Location = () => {
  return (
    <HorizontalScrollCarousel />
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => (
            <Card card={card} key={card.id} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div className="group relative h-[450px] w-[400px] overflow-hidden bg-neutral-200 rounded-lg">
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <Link href={card.path}
          className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-sm">
            {card.title}
          
        </Link>
      </div>
    </div>
  );
};

export default Location;

const cards = [
  {
    url: "/images/srilanka.jpg",
    title: "Sri Lanka",
    id: 1,
    path: "/srilanka", 
  },
  {
    url: "/images/china.jpg",
    title: "China",
    id: 2,
    path: "/china", 
  },
  {
    url: "/images/india.webp",
    title: "India",
    id: 3,
    path: "/india", 
  },
  {
    url: "/images/malaysia.jpg",
    title: "Malaysia",
    id: 4,
    path: "/malaysia", 
  },
  {
    url: "/images/taiwan.jpg",
    title: "Taiwan",
    id: 5,
    path: "/taiwan", 
  },
];
