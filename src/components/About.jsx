import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="py-8 bg-gray-100 min-h-[60vh] relative overflow-hidden">
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
          About Akwaji Dan
        </h2>
        <div className="w-16 h-0.5 bg-teal-500 mb-4 mx-auto" />

        {/* Text */}
        <div className="text-center max-w-2xl">
          <p className="text-base md:text-lg text-gray-900 mb-2">
            As a certified Virtual Assistant, I bring a wealth of expertise and a commitment to excellence in every project. My skills encompass calendar and email management, proofreading and editing, professional communication, Google Workspace tools, and web development using HTML, CSS, JavaScript, React, and Tailwind CSS.
          </p>
          <p className="text-base md:text-lg text-gray-900">
            With a focus on precision and efficiency, I partner with businesses to streamline operations, enhance productivity, and deliver tailored administrative and technical solutions that drive success.
          </p>
        </div>

        {/* Cards in Horizontal Row */}
        <div className="flex flex-row gap-3 overflow-x-auto pb-2 snap-x snap-mandatory">
          {[
            { title: "Certified Expertise", desc: "Trusted VA certification" },
            { title: "Technical Proficiency", desc: "Google Workspace & Web Dev" },
            { title: "Meticulous Precision", desc: "Detail-oriented workflows" },
            { title: "Responsive Support", desc: "Timely client communication" },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-3 rounded-2xl shadow-sm border border-teal-200 hover:bg-teal-50 min-w-[160px] snap-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-base font-semibold text-teal-500">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default About;