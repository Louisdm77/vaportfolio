import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="bg-emerald-600 text-white py-12">
      <motion.div
        className="max-w-5xl mx-auto px-8 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="text-lg font-bold mb-4">
          Akwaji Dan | Certified Virtual Assistant
        </p>
        <div className="flex justify-center gap-6 mb-4">
          {[
            { name: "Home", href: "#home" },
            { name: "About", href: "#about" },
            { name: "Services", href: "#services" },
            { name: "Portfolio", href: "#portfolio" },
            { name: "Contact", href: "#contact" },
          ].map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="text-gray-200 hover:text-emerald-600 transition duration-300"
              whileHover={{ scale: 1.1 }}
            >
              {link.name}
            </motion.a>
          ))}
        </div>
        {/* <div className="flex justify-center gap-6">
          <motion.a
            href="https://linkedin.com"
            className="text-gray-200 hover:text-emerald-600 transition duration-300"
            whileHover={{ scale: 1.1 }}
          >
            LinkedIn
          </motion.a>
          <motion.a
            href="https://twitter.com"
            className="text-gray-200 hover:text-emerald-600 transition duration-300"
            whileHover={{ scale: 1.1 }}
          >
            X
          </motion.a>
        </div> */}
        <p className="mt-4 text-gray-400">
          © 2025 Akwaji Dan. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
}

export default Footer;
