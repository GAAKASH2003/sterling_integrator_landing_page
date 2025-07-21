"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const ContactSchema = z.object({
  name: z.string().min(2, { message: "Name is required" }),
  email: z.string().email({ message: "Valid email required" }),
  company: z.string().optional(),
  message: z.string().min(10, { message: "Please add more detail" }),
});

export function ContactFormSection({ id = "contact" }) {
  const [status, setStatus] = useState("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(ContactSchema) });

  const onSubmit = async (data) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section id={id} className="scroll-mt-16 bg-blue-600 py-24 text-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Let’s Talk
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-blue-100">
            Tell us about your IBM Sterling needs and we’ll respond quickly.
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto mt-16 max-w-xl space-y-6"
        >
          <div>
            <label className="block text-sm font-medium">Name *</label>
            <input
              type="text"
              className="mt-2 w-full rounded-2xl border border-blue-300 bg-white/10 px-4 py-3 text-white placeholder-blue-200 focus:border-white focus:outline-none"
              placeholder="Your Name"
              {...register("name")}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-yellow-200">
                {errors.name.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium">Email *</label>
            <input
              type="email"
              className="mt-2 w-full rounded-2xl border border-blue-300 bg-white/10 px-4 py-3 text-white placeholder-blue-200 focus:border-white focus:outline-none"
              placeholder="you@company.com"
              {...register("email")}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-yellow-200">
                {errors.email.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium">Company</label>
            <input
              type="text"
              className="mt-2 w-full rounded-2xl border border-blue-300 bg-white/10 px-4 py-3 text-white placeholder-blue-200 focus:border-white focus:outline-none"
              placeholder="Org Name"
              {...register("company")}
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Message *</label>
            <textarea
              rows={5}
              className="mt-2 w-full rounded-2xl border border-blue-300 bg-white/10 px-4 py-3 text-white placeholder-blue-200 focus:border-white focus:outline-none"
              placeholder="Briefly describe your project, timeline, or challenges..."
              {...register("message")}
            />
            {errors.message && (
              <p className="mt-1 text-sm text-yellow-200">
                {errors.message.message}
              </p>
            )}
          </div>
          <div>
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full rounded-2xl bg-white px-8 py-4 text-base font-semibold text-blue-600 shadow hover:bg-blue-50 disabled:opacity-50"
            >
              {status === "loading" ? "Sending..." : "Submit"}
            </button>
          </div>
          {status === "success" && (
            <p className="text-center text-sm text-green-200">
              Message sent! We’ll be in touch soon.
            </p>
          )}
          {status === "error" && (
            <p className="text-center text-sm text-yellow-200">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
