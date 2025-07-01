import ServiceCard from "./ServiceCard";

export default function ServicesSection() {
  return (
    <div className="max-w-5xl mx-auto text-center">
      <h2 className="text-2xl sm:text-3xl font-bold mb-10">Our Services</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
        <ServiceCard
          title="Web & Mobile Development"
          description="Custom websites and mobile apps tailored for your brand."
        />
        <ServiceCard
          title="Social Media Management"
          description="We build your presence and grow your audience."
        />
        <ServiceCard
          title="Print Branding"
          description="Logos, flyers, banners, and all your print needs."
        />
        <ServiceCard
          title="Photography"
          description="Professional brand photography for marketing and storytelling."
        />
      </div>
    </div>
  );
}
