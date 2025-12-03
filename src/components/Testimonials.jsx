import React from "react";
import { testimonials } from "../data/data";
import { RiDoubleQuotesR } from "@remixicon/react";
import { motion } from "motion/react";
import * as variants from "../motion/animation";

export default function Testimonials() {
  return (
    <section className="py-20">
      <motion.div
        className="container"
        variants={variants.staggerContainer}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true }}
      >
        {/* Title */}
        <div className="space-y-1.5">
          <motion.h2 variants={variants.fadeInUp} className="section-title">
            What learners are saying
          </motion.h2>
          <motion.p variants={variants.fadeInUp} className="text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perspiciatis commodi excepturi quia.
          </motion.p>
        </div>

        {/* wrapper */}
        <motion.div
          variants={variants.fadeInUp}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((testimonial) => (
            // card
            <div
              className="bg-white border border-neutral-200 shadow-sm p-8 rounded-xl space-y-3.5 nth-[2]:rotate-2"
              key={testimonial.id}
            >
              {/* icon */}
              <span className="size-8 bg-yellow-400 inline-flex items-center justify-center rounded-full">
                <RiDoubleQuotesR size={22} />
              </span>
              <p className="text">"{testimonial.text}"</p>
              <div className="flex items-center gap-3">
                {/* img */}
                <div className="size-10">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="rounded-full w-full object-cover h-auto"
                  />
                </div>
                {/* author */}
                <div>
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="text truncate text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
