"use client";
const industries = [
  { name: "Retail & E‑Commerce", desc: "High-volume order & inventory flows." },
  {
    name: "Manufacturing",
    desc: "Supplier collaboration & logistics visibility.",
  },
  {
    name: "Logistics & Supply Chain",
    desc: "Carrier messaging & shipment events.",
  },
  { name: "Financial Services", desc: "Secure data movement & compliance." },
  //   { name: "Healthcare", desc: "Regulated data exchange & interoperability." },
];

export function Industries({ id = "industries" }) {
  return (
    <section id={id} className="scroll-mt-16 bg-gray-50 py-24">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-blue-600">
          Industries We Serve
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-blue-600 font-bold">
          IBM Sterling powers mission-critical B2B exchange across regulated and
          high-volume industries.
        </p>
        <div className="mx-auto mt-16 grid  gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {industries.map((ind) => (
            <div
              key={ind.name}
              className="rounded-2xl border bg-white p-6 text-blue-600  shadow-sm hover:scale-105 transition duration-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 shadow-blue-600 text-center"
            >
              <h3 className="text-lg font-semibold  ">{ind.name}</h3>
              <p className="mt-2 text-sm text-black">{ind.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
