import React from "react";
import { benefits } from "../data/data";
import { RiCheckboxCircleLine } from "@remixicon/react";
import { motion } from "motion/react";
import * as variants from "../motion/animation";

export default function WhyLearnLive() {
  return (
    <section className="py-20">
      <motion.div
        variants={variants.staggerContainer}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{ once: true }}
        className="container grid gap-16 lg:grid-cols-[0.7fr_1fr] lg:items-center"
      >
        {/* Image */}
        <motion.div
          variants={variants.fadeIn}
          className="relative mx-auto p-5 order-1 lg:order-first"
        >
          <div className="max-w-[360px] w-full shadow-img mx-auto rounded-t-full bg-lime-600 flex items-center justify-center overflow-hidden pt-9 px-3">
            <img
              src="/images/section-img.png"
              alt="hero image"
              width={440}
              height={592}
            />
          </div>

          {/* Decorations */}
          <img
            src="/images/star-icon.png"
            alt="book icon"
            width={64}
            height={64}
            className="absolute top-20 right-0"
          />
        </motion.div>
        {/* content */}
        <div className="">
          <motion.h2
            variants={variants.fadeInUp}
            className="section-title mb-2"
          >
            Whay learn live with BriScho?
          </motion.h2>
          <motion.p variants={variants.fadeInUp} className="text">
            Live tech bootcamps and online classes to kickstart or accelerate
            your career
          </motion.p>

          {/* list */}
          <ul className="space-y-4 mt-8">
            {benefits.map((benefit) => (
              <motion.li
                variants={variants.fadeInUp}
                key={benefit}
                className="flex items-start gap-3"
              >
                <span className="text-lime-600 shrink-0">
                  <RiCheckboxCircleLine />
                </span>
                <p className="text font-medium">{benefit}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
