"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export function Hero({ id = "home" }) {
  return (
    <section
      id={id}
      className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 to-white py-16 text-center"
    >
      <div className="relative z-10 mx-auto max-w-3xl px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
        >
          <span className="text-blue-600">
            {" "}
            Streamline Your B2B Integration with IBM Sterling Experts
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mx-auto mt-6 max-w-xl text-lg text-gray-600"
        >
          Implementation, migration, automation, and support for IBM Sterling
          B2B Integrator—tailored to your enterprise.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-10 flex items-center justify-center gap-4"
        >
          <Link
            href="#contact"
            className="rounded-2xl border border-transparent bg-blue-600 px-8 py-3 text-base font-semibold text-white shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
          >
            Get a Free Consultation
          </Link>
          <Link
            href="#services"
            className="rounded-2xl border border-blue-600 px-8 py-3 text-base font-semibold text-blue-600 hover:bg-blue-50"
          >
            View Services
          </Link>
        </motion.div>
      </div>

      <img src="/ibm-sterling-illustration.png" alt="test" />
    </section>
  );
}
