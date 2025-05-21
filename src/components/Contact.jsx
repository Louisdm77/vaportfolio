import { motion } from "framer-motion";

function Contact() {
  return (
    <section id="contact" className="py-10 bg-gray-200">
      <motion.div
        className="max-w-5xl mx-auto px-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-green-800 mb-8 text-center">
          Get in Touch
        </h2>
        <div className="flex flex-col md:flex-row gap-12">
          <motion.div
            className="md:w-1/2"
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
          <motion.form
            action="https://formspree.io/f/your-form-id"
            method="POST"
            className="md:w-1/2 bg-white p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-gray-700 font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
                rows="5"
                required
              ></textarea>
            </div>
            <motion.button
              type="submit"
              className="w-full bg-emerald-600 text-white py-4 rounded-lg hover:bg-emerald-700 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
