"use client";
export function About({ id = "about" }) {
  return (
    <section id={id} className="scroll-mt-16 py-24 bg-blue-600">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          What is IBM Sterling B2B Integrator?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white">
          IBM Sterling B2B Integrator is an enterprise-grade platform for
          secure, reliable, and scalable B2B/EDI transactions across complex
          partner networks. It supports extensive data formats, transports,
          workflow orchestration, and compliance to help organizations automate
          and govern mission-critical data exchange.
        </p>
        <div className="mx-auto mt-10 grid max-w-3xl gap-6 sm:grid-cols-3 ">
          {[
            {
              title: "Secure Exchange",
              desc: "Encrypted, governed B2B data flows.",
            },
            {
              title: "Complex Workflows",
              desc: "Automate multi-step partner processes.",
            },
            {
              title: "Format Flex",
              desc: "EDI, XML, APIs, legacy—no problem.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border bg-white p-6 text-center shadow-sm hover:scale-105 transition duration-300 shadow-blue-600"
            >
              <h3 className="text-lg font-semibold text-blue-600">
                {card.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
