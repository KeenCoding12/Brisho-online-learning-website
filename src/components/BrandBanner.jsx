import React from "react";
import { brandBannerImgs } from "../data/data";
import Marquee from "react-fast-marquee";
import { motion } from "motion/react";
import * as variants from "../motion/animation";

export default function BrandBanner() {
  return (
    <motion.div
      variants={variants.staggerContainer}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true }}
      className="bg-neutral-900 text-white py-2 -skew-y-3"
    >
      <motion.div variants={variants.fadeIn}>
        <Marquee autoFill={true} pauseOnHover={true}>
          {brandBannerImgs.map((img, index) => (
            <div className="h-11 ml-3" key={index}>
              <img
                src={img}
                alt="logo"
                width={484}
                height={132}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </Marquee>
      </motion.div>
    </motion.div>
  );
}
