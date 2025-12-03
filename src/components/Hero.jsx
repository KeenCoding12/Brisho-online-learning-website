import { RiStarFill } from "@remixicon/react";
import Button from "./Button";
import { motion } from "motion/react";
import * as variants from "../motion/animation";

export default function Hero() {
  return (
    <section className="pt-12 lg:pt-18 pb-20">
      <motion.div
        variants={variants.staggerContainer}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true }}
        className="container grid gap-14 lg:grid-cols-[1fr_0.9fr] items-center"
      >
        {/* content */}
        <div className="space-y-2.5 sm:text-center lg:text-left">
          {/* badge */}
          <motion.div
            variants={variants.fadeIn}
            className="bg-yellow-400 px-3 inline-flex items-center gap-1 py-1 -rotate-2 transform"
          >
            <div className="flex items-center gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <RiStarFill key={i} size={12} />
              ))}
            </div>
            <p className="font-bold tracking-wider text-xs">"A JOY TO USE"</p>
          </motion.div>
          <motion.h1
            variants={variants.fadeInUp}
            className="text-4xl font-semibold leading-[1.1] md:text-5xl lg:text-6xl"
          >
            Professional and Lifelong learning Comes Here
          </motion.h1>
          <motion.p
            variants={variants.fadeInUp}
            className="max-w-lg text-neutral-600 sm:mx-auto lg:mx-0"
          >
            Aliquid rem ipsum dolor sit amet consectetur adipisicing elit.
            dolorum nobis quia obcaecati.
          </motion.p>
          {/* buttons */}
          <motion.div
            variants={variants.fadeIn}
            className="mt-7 grid gap-4 sm:flex sm:justify-center lg:justify-start"
          >
            <Button label={"Get Started"} primary />
            <Button label={"Explore Courses"} />
          </motion.div>
        </div>
        {/* image */}
        <motion.div variants={variants.fadeIn} className="relative mx-auto p-5">
          <div className="max-w-[370px] w-full shadow-img mx-auto rounded-t-full bg-lime-600 flex items-center justify-center overflow-hidden">
            <img
              src="/images/hero-img.png"
              alt="hero image"
              width={440}
              height={592}
            />
          </div>

          {/* Decorations */}
          <img
            src="/images/book-icon.png"
            alt="book icon"
            width={64}
            height={64}
            className="absolute top-20 left-0 -rotate-12"
          />
          {/* Decorations */}
          <img
            src="/images/star-icon.png"
            alt="book icon"
            width={64}
            height={64}
            className="absolute top-20 right-0"
          />
          {/* Card */}
          <div className="bg-white px-8 py-6 absolute left-0 rounded-lg shadow-util bottom-20 sm:-left-10 space-y-2">
            <span className="bg-lime-100 flex items-center justify-center">
              <img
                src="/images/hero-card-icon.png"
                alt="hero card icon"
                width={64}
                height={64}
              />
            </span>
            <p className="text-center">
              <span className="font-bold">100k+</span>Students <br /> learn
              Daily
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
