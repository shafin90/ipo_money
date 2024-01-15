'use client'
import { motion } from "framer-motion";
import './RecentSMEIPO.css'

const cardVariants = {
  offscreen: {
    y: 300
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.3
    }
  }
};

const hue = (h) => `hsl(${h}, 100%, 50%)`;

function Card({ emoji, hueA, hueB }) {
//   const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

  return (
    <motion.div
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
    //   viewport={{ once: true, amount: 0.8 }}
    >
      {/* <div className="splash" style={{ background }} /> */}
      <motion.div className="card" variants={cardVariants}>
        {emoji}
      </motion.div>
    </motion.div>
  );
}

const food= [
  ["Sample", 340, 10],
  ["Sample", 20, 40],
  ["Sample", 60, 90],
  ["Sample", 80, 120],
  ["Sample", 100, 140],
  ["Sample", 205, 245],
  ["Sample", 260, 290],
  ["Sample", 290, 320]
];

export default function RecentSMEIPO() {
  return food.map(([emoji, hueA, hueB]) => (
    <Card emoji={emoji} hueA={hueA} hueB={hueB} key={emoji} />
  ));
}
