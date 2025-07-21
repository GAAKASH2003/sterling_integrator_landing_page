"use client";
import {
  ServerCog,
  RefreshCw,
  Network,
  Zap,
  LifeBuoy,
  GraduationCap,
} from "lucide-react";

const services = [
  {
    icon: ServerCog,
    title: "Implementation & Setup",
    desc: "End-to-end IBM Sterling B2B Integrator deployment and configuration.",
  },
  {
    icon: RefreshCw,
    title: "Migration & Upgrades",
    desc: "Move from legacy or older Sterling versions with minimal downtime.",
  },
  {
    icon: Network,
    title: "B2B / EDI Partner Onboarding",
    desc: "Integrate partners, suppliers, and trading networks fast.",
  },
  {
    icon: Zap,
    title: "Workflow Automation",
    desc: "Custom maps, business process modeling, alerting, and dashboards.",
  },
  {
    icon: LifeBuoy,
    title: "Monitoring & Support",
    desc: "24/7 proactive monitoring, patching, and troubleshooting.",
  },
  {
    icon: GraduationCap,
    title: "Training & Advisory",
    desc: "Enable your team with best practices and performance tuning.",
  },
];

export function Services({ id = "services" }) {
  return (
    <section id={id} className="scroll-mt-16 bg-gray-50 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl text-center mx-auto">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-blue-600">
            Our Services
          </h2>
          <p className="mt-6 text-lg text-blue-600 font-bold">
            Comprehensive IBM Sterling expertise—from greenfield deployments to
            fully managed operations.
          </p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl border bg-white p-8 shadow-sm hover:scale-105 transition duration-300 shadow-blue-600 text-center"
            >
              <Icon className="h-8 w-8 text-blue-600 mx-auto" />
              <h3 className="mt-4 text-xl font-semibold text-blue-600">
                {title}
              </h3>
              <p className="mt-2 text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
