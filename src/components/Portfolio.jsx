import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import calendar from "../assets/images/calendar.png";
import data from "../assets/images/data.png";
import email from "../assets/images/email.png";
import slide from "../assets/images/slide.png";
import web from "../assets/images/web.png";
// import placeholder from "../assets/images/placeholder.png"; // Fallback image
import { FaSearchPlus } from "react-icons/fa";

function Portfolio() {
  const projects = [
    {
      title: "Data Entry",
      description: "Efficiently organized and entered data into spreadsheets.",
      image: data,
      link: "#data-entry",
    },
    {
      title: "Calendar Management",
      description: "Coordinated schedules and managed appointments.",
      image: calendar,
      link: "#calendar-management",
    },
    {
      title: "Email Handling",
      description: "Managed and responded to client emails promptly.",
      image: email,
      link: "#email-handling",
    },
    {
      title: "Reports & Slides",
      description: "Created detailed reports and engaging slide presentations.",
      image: slide,
      link: "#reports-slides",
    },
    {
      title: "Web Development",
      description: "Developed and maintained websites with modern technologies.",
      image: web,
      link: "#web-development",
    },
    {
      title: "Research & Documentation",
      description: "Conducted thorough research and documented findings.",
      image: data,
      link: "#research-documentation",
    },
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  // Debug click handler
  const handleImageClick = (image) => {
    console.log("Image clicked:", image);
    setSelectedImage(image || placeholder);
  };

  // Log modal state
  useEffect(() => {
    console.log("Selected image state:", selectedImage);
  }, [selectedImage]);

  return (
    <section
      id="portfolio"
      className="py-8 bg-gray-100 min-h-[60vh] relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-purple-500/10 to-gray-100" />
      {/* Blurred shapes */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-teal-300/20 rounded-full -translate-x-1/3 translate-y-1/4 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-300/20 rounded-full translate-x-1/4 -translate-y-1/3 blur-3xl" />

      <motion.div
        className="max-w-5xl mx-auto px-8 relative z-10 flex flex-col items-center gap-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Heading and Divider */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-teal-500 mb-4 text-center font-serif drop-shadow-md">
          Work Samples
        </h2>
        <div className="w-20 h-0.5 bg-teal-500 mb-4 mx-auto shadow-lg shadow-teal-500/50" />

        {/* Cards in Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white/80 backdrop-blur-sm p-5 rounded-3xl shadow-md border border-teal-300/50 hover:bg-teal-50/90 w-full lg:w-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 20px rgba(45, 212, 191, 0.3)",
              }}
              viewport={{ once: true }}
            >
              <div className="relative group" onClick={() => handleImageClick(project.image)}>
                <motion.img
                  src={project.image || placeholder}
                  alt={project.title}
                  className="w-full h-64 object-cover rounded-xl mb-4 cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  onError={(e) => {
                    console.error(`Failed to load image: ${project.image}`);
                    e.target.src = placeholder;
                  }}
                />
                {/* Hover overlay for desktop */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:flex pointer-events-none">
                  <span className="text-white font-medium text-lg">Click to View</span>
                </div>
                {/* Persistent icon for mobile */}
                <div className="absolute bottom-2 right-2 bg-teal-500 bg-opacity-70 rounded-full p-2 md:hidden pointer-events-none">
                  <FaSearchPlus className="text-white text-lg" aria-label="Tap to view image" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-teal-500 mb-2 font-serif">{project.title}</h3>
              <p className="text-sm text-gray-900 mb-3">{project.description}</p>
              <motion.a
                href={project.link}
                className="inline-block bg-teal-500 text-white px-4 py-2 rounded-full font-medium shadow-lg hover:bg-teal-600 transition duration-300"
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 5px 15px rgba(45, 212, 191, 0.5)",
                }}
              >
                View Work
              </motion.a>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-[1000]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative flex justify-center items-center w-full h-full max-w-[100vw] max-h-[100vh] p-0 md:p-4 md:bg-white md:rounded-2xl md:max-w-[70vw] md:max-h-[80vh]"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {selectedImage ? (
                <motion.img
                  src={selectedImage}
                  alt="Selected Work"
                  className="w-full h-full  object-contain md:rounded-lg touch-pinch-zoom"
                  style={{ width: "100vw !important", height: "auto !important" }}
                  onError={(e) => {
                    console.error("Modal image failed to load:", selectedImage);
                    e.target.src = placeholder;
                    setSelectedImage(null);
                  }}
                />
              ) : (
                <div className="text-red-500 text-center p-4">Image failed to load</div>
              )}
              <button
                className="absolute top-4 right-4 bg-teal-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl shadow-lg hover:bg-teal-600 transition duration-300"
                onClick={() => setSelectedImage(null)}
                aria-label="Close preview"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Portfolio;