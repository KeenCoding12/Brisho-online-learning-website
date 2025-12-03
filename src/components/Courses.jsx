import React, { useState } from "react";
import Button from "./Button";
import { courses } from "../data/data";
import { RiStarFill } from "@remixicon/react";
import { motion } from "motion/react";
import * as variants from "../motion/animation";

export default function Courses() {
  const [activeTab, setActiveTab] = useState("All");
  const filteredCourses = courses.filter((course) => {
    if (activeTab === "All") return true;
    return course.category === activeTab;
  });

  return (
    <section className="py-20 bg-gray-50">
      <motion.div
        variants={variants.staggerContainer}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true }}
        className="container"
      >
        {/* Title */}
        <div className="text-center space-y-2.5">
          <motion.h2 variants={variants.fadeInUp} className="section-title">
            Explore Courses
          </motion.h2>
          <motion.p
            variants={variants.fadeInUp}
            className="max-w-2xl mx-auto text"
          >
            Choose from 25,000 online video courses with new additions published
            every month.
          </motion.p>
        </div>

        <div className="mt-7">
          {/* Tabs */}
          <motion.div
            variants={variants.fadeInUp}
            className="flex flex-wrap justify-center gap-4"
          >
            {["All", "Popular", "Recent", "Design", "Marketing", "Coding"].map(
              (tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`shadow-util px-6 py-2.5 rounded-full font-medium  ${
                    activeTab === tab ? "bg-lime-200" : "bg-white"
                  }`}
                >
                  {tab}
                </button>
              )
            )}
          </motion.div>

          {/* Cards */}
          <motion.div
            variants={variants.fadeIn}
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 mt-10 sm:mt-14"
          >
            {filteredCourses.map((course) => (
              // Card
              <div
                className="bg-white rounded-xl border-neutral-200 border overflow-hidden hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:card-hover hover:border-black transition"
                key={course.id}
              >
                {/* Image */}
                <div
                  className={`h-48 w-full ${course.imageColor} flex items-center justify-center relative overflow-hidden `}
                >
                  <img
                    src={course.img}
                    alt={course.title}
                    width={course.width}
                    height={course.height}
                  />
                  {course.isNew === true && (
                    <div className="absolute top-4 right-4 bg-yellow-300 p-1.5 transform rotate-3 shadow-sm">
                      <span className="text-xs font-bold">New</span>
                    </div>
                  )}
                </div>
                {/* Content */}
                <div className="p-6 space-y-2">
                  <h3 className="font-bold text-lg ">{course.title}</h3>
                  <p className="text">By {course.author}</p>
                  <div className="flex justify-between items-center">
                    {/* rate */}
                    <div className="flex items-center gap-1">
                      <span className="bg-yellow-100 p-1 inline-flex text-yellow-600 shrink-0">
                        <RiStarFill size={12} />
                      </span>
                      <p className="font-bold tex-sm">{course.rating}</p>
                      <p className="text-xs text-neutral-400">
                        ({course.reviews})
                      </p>
                    </div>
                    <p className="font-bold text-lg">${course.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
        <motion.div variants={variants.fadeInUp}>
          <Button
            label={"Explore all courses"}
            primary
            classes={" mt-12 mx-auto block"}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
