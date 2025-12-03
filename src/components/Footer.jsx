import {
  RiFacebookFill,
  RiInstagramFill,
  RiLinkedinFill,
  RiTwitterXFill,
} from "@remixicon/react";
import React from "react";
import Logo from "./Logo";
import { footerLinks } from "../data/data";
import { motion } from "motion/react";
import * as variants from "../motion/animation";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-9">
      <motion.div
        variants={variants.staggerContainer}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true }}
        className="container space-y-14 sm:space-y-20 lg:space-y-24"
      >
        {/* Footer top */}
        <div className="grid gap-5 lg:gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[1fr_0.7fr_0.8fr_0.8fr]">
          {/* Footer logo */}
          <motion.div variants={variants.fadeInUp} className="space-y-4">
            <Logo />
            <p className="text-neutral-400">
              Empowering learners worldwide with quality education and skills.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-4">
              {[
                RiFacebookFill,
                RiTwitterXFill,
                RiInstagramFill,
                RiLinkedinFill,
              ].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="bg-neutral-800 p-2 rounded-full hover:bg-lime-600 focus:bg-lime-600 transition-colors"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </motion.div>
          {/* list */}
          {footerLinks.map((link) => (
            <motion.div
              variants={variants.fadeInUp}
              className="space-y-3"
              key={link.id}
            >
              <p className="font-bold text-lg">{link.title}</p>
              <ul className="space-y-2">
                {link.links.map((label) => (
                  <li className="" key={label}>
                    <a
                      href="#"
                      className="text-neutral-400 hover:text-lime-600 focus:text-lime-600 transition-colors"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        {/* Footer bottom */}
        <div className="flex  items-center justify-between gap-x-8 gap-y-3 flex-wrap">
          <motion.p variants={variants.fadeIn}>
            &copy; {new Date().getFullYear()} BriScho.All rights reserved.
          </motion.p>
          {/* links */}
          <motion.div
            variants={variants.fadeIn}
            className="flex flex-wrap gap-5"
          >
            {["Privacy Policy", "Terms & Conditions", "Cookie Policy"].map(
              (label) => (
                <a
                  href="#"
                  className="text-neutral-400 transition-colors hover:text-lime-600"
                  key={label}
                >
                  {label}
                </a>
              )
            )}
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
}
