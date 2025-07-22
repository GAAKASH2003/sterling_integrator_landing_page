"use client";
const bullets = [
  {
    title: "Certified Sterling Professionals",
    desc: "Hands-on experts with deep platform & industry experience.",
  },
  {
    title: "Faster Time to Value",
    desc: "Blueprint-driven delivery reduces risk and accelerates ROI.",
  },
  {
    title: "Scalable & Secure",
    desc: "Architected for high availability, compliance, and growth.",
  },
  {
    title: "Flexible Engagements",
    desc: "Project-based, staff augmentation, or managed services.",
  },
];

export function USP({ id = "why-us" }) {
  return (
    <section id={id} className="scroll-mt-16 py-24 bg-blue-600">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Why Choose Us
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white">
          We combine certified expertise, proven delivery frameworks, and 24/7
          support to help you get the most out of IBM Sterling.
        </p>
        <div className="mx-auto mt-16 flex flex-col md:flex-row items-stretch gap-6 md:gap-10">
          {bullets.map((b) => (
            <div
              key={b.title}
              className="rounded-2xl border bg-white p-8  shadow-sm hover:scale-105 transition duration-300 shadow-blue-600 text-center "
            >
              <h3 className="text-xl font-semibold text-blue-600">{b.title}</h3>
              <p className="mt-2 text-gray-600">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
