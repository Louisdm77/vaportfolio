import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaBriefcase } from "react-icons/fa"; // Icons for email and socials

function Contact() {
  return (
    <section id="contact" className="py-10 bg-gray-200">
      <motion.div
        className="max-w-5xl mx-auto px-0 sm:px-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-green-800 mb-8 text-center">
          Get in Touch
        </h2>
        <div className="flex flex-col md:flex-row gap-12 ">
          <motion.div
            className="md:w-1/2 p-3"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-700 mb-4">
              Elevate your business with professional Virtual Assistant services
              tailored to your needs.
            </p>
            <p className="text-lg text-emerald-600 font-semibold">
              Email: danakwaji3@gmail.com
            </p>
            <p className="text-lg text-gray-700 mt-4">
              Contact me to discuss how I can support you with typing,
              transcription, web development, or other administrative tasks.
            </p>
          </motion.div>
          <motion.div
            className="md:w-1/2 bg-white p-8 rounded-lg shadow-lg flex flex-col items-center text-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-emerald-600 mb-4">
              Ready to Streamline Your Workflow?
            </h3>
            <p className="text-gray-700 mb-6">
              Reach out to discuss your project or explore how I can assist you!
            </p>
            <motion.a
              href="mailto:danakwaji3@gmail.com?subject=Virtual%20Assistant%20Inquiry"
              className="flex items-center gap-2 bg-emerald-600 text-white py-4 px-6 rounded-lg hover:bg-emerald-700 transition duration-300 mb-6"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaEnvelope /> Email Me
            </motion.a>
            <div className="flex gap-4">
              <motion.a
                href="https://www.linkedin.com/akwajidan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-600 hover:text-emerald-800"
                whileHover={{ scale: 1.2 }}
              >
                <FaLinkedin size={24} />
              </motion.a>
              <motion.a
                href="https://www.upwork.com/freelancers/~013ac125358fc74cdf?mp_source=share"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-600 hover:text-emerald-800 underline font-bold"
                whileHover={{ scale: 1.2 }}
              >
                Upwork
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
