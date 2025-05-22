import { motion } from "framer-motion";
import me from "../assets/images/myimg.jpeg";

// Animation variants
const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.03, duration: 0.3 },
  }),
};

const paragraphVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.2, duration: 0.5 },
  }),
};

const HeadingText = ({ text }) => (
  <span>
    {text.split("").map((char, index) => (
      <motion.span
        key={`${char}-${index}`}
        custom={index}
        variants={letterVariants}
        initial="hidden"
        animate="visible"
        className="inline-block"
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ))}
  </span>
);

const ParagraphText = ({ text }) => {
  const lines = text.split(". ");
  return (
    <div>
      {lines.map((line, index) => (
        <motion.p
          key={index}
          custom={index}
          variants={paragraphVariants}
          initial="hidden"
          animate="visible"
          className="text-base md:text-lg text-gray-300 mb-2 leading-relaxed"
        >
          {line}
          {index < lines.length - 1 ? "." : ""}
        </motion.p>
      ))}
    </div>
  );
};

const services = [
  "🧾 Data Entry",
  "📅 Calendar Management",
  "📧 Email Handling",
  "💬 Client Communication",
  "🛠️ Web Development",
  "📊 Reports & Slides",
  "🗂️ File Organization",
  "📝 Research & Documentation",
  "📝Transcription",
];

function Hero() {
  return (
    <section
      id="home"
      className="bg-slate-900 py-6 min-h-[60vh] relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-700/20 to-slate-900" />
      <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center gap-4">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img
            src={me}
            alt="Akwaji Dan"
            className="w-44 h-44 rounded-full object-cover shadow-lg border-4 border-white"
            loading="lazy"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gray-100">
            Your Virtual Productivity Partner
          </h1>
          <div className="w-16 h-1 bg-cyan-500 mb-4 mx-auto" />
          <ParagraphText text="Helping founders, coaches, and creators reclaim time. I offer reliable support in digital workflows, client ops, admin processes, and executive assistance with focus and precision." />

          {/* Fancy service tags */}
          <div className="flex flex-wrap gap-3 mt-4 justify-center">
            {services.map((service, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.05 }}
                className="px-3 py-1 bg-slate-800 border border-cyan-600 text-cyan-300 rounded-full text-xs font-medium shadow hover:bg-cyan-700 hover:text-white transition duration-200"
              >
                {service}
              </motion.span>
            ))}
          </div>

          {/* CTA */}
          <motion.a
            href="#contact"
            className="inline-block bg-cyan-600 text-white px-8 py-3 rounded-xl font-medium shadow-lg hover:bg-cyan-700 transition mt-6"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 0.5,
              repeat: 2,
              repeatType: "reverse",
              delay: 1.2,
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Let’s Work Together
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
