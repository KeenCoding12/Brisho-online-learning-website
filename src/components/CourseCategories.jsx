import React from "react";
import { categoriesItems } from "../data/data";
import { motion } from "motion/react";
import * as variants from "../motion/animation";

export default function CourseCategories() {
  return (
    <section className="py-20">
      <motion.div
        className="container"
        variants={variants.staggerContainer}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true }}
      >
        <motion.h2
          variants={variants.fadeInUp}
          className="section-title text-center"
        >
          Explore 4000+ Free <br /> Online courses
        </motion.h2>

        {/* wrapper */}
        <motion.div
          variants={variants.fadeInUp}
          className="mt-11 grid gap-6 sm:grid-cols-2  lg:grid-cols-4"
        >
          {categoriesItems.map((category) => (
            // Card
            <div
              key={category.id}
              className="p-6 border border-neutral-200 bg-white  cursor-pointer hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] rounded-xl hover:card-hover hover:border-black transition"
            >
              <span className="text-neutral-700 inline-flex ">
                <category.icon size={30} />
              </span>
              <h3 className="text-xl font-bold mb-3">{category.title}</h3>
              <p className="text">{category.desc}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
