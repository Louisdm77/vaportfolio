import { motion } from "framer-motion";

function Services() {
  const services = [
    {
      title: "Calendar Management",
      description: "Seamlessly organize schedules and appointments using tools like Google Calendar for optimal time management.",
    },
    {
      title: "Email Management",
      description: "Streamline your inbox with professional, timely responses and efficient email organization.",
    },
    {
      title: "Proofreading & Editing",
      description: "Deliver polished, error-free documents with meticulous attention to detail and clarity.",
    },
    {
      title: "Professional Communication",
      description: "Craft clear, concise, and professional correspondence to enhance client relationships.",
    },
    {
      title: "Google Workspace Tools",
      description: "Master Docs, Sheets, and Slides to create efficient, organized workflows for your business.",
    },
    {
      title: "Web Development",
      description: "Build responsive, modern websites using HTML, CSS, JavaScript, React, and Tailwind CSS.",
    },
    {
      title: "General VA Support",
      description: "Provide flexible, tailored administrative support to meet your unique business needs.",
    },
  ];

  return (
    <section id="services" className="py-8 bg-gray-100 min-h-[60vh] relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-gray-100" />
      {/* Subtle background shape */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-teal-300/20 rounded-full -translate-x-1/2 translate-y-1/4 blur-3xl" />
      <motion.div
        className="max-w-4xl mx-auto px-8 relative z-10 flex flex-col items-center gap-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Heading and Divider */}
        <h2 className="text-3xl md:text-4xl font-bold text-teal-500 mb-4 text-center">
          Services Offered
        </h2>
        <div className="w-16 h-0.5 bg-teal-500 mb-4 mx-auto" />

        {/* Cards in Two Rows */}
        <div className="flex flex-wrap justify-center gap-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-4 rounded-2xl shadow-sm border border-teal-200 hover:bg-teal-50 w-[calc(50%-0.75rem)] sm:w-[calc(33.33%-0.75rem)] lg:w-[calc(25%-0.75rem)] max-w-[200px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ shadow: "xl" }}
              viewport={{ once: true }}
            >
              <h3 className="text-base font-semibold text-teal-500 mb-2">{service.title}</h3>
              <p className="text-sm text-gray-900">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Services;