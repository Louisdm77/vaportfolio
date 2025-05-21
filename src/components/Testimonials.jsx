import { motion } from "framer-motion";

function Testimonials() {
  const testimonials = [
    {
      name: "Jane Doe",
      quote: "Akwaji’s transcription services were exceptionally accurate and delivered ahead of schedule, making my workflow seamless.",
    },
    {
      name: "John Smith",
      quote: "Professional email management transformed my inbox, saving me hours each week with clear, concise responses.",
    },
    {
      name: "Sarah Lee",
      quote: "The formatted reports provided were polished and professional, significantly enhancing our brand’s presentation.",
    },
  ];

  return (
    <section id="testimonials" className="py-8 bg-gray-100 min-h-[60vh] relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-purple-500/10 to-gray-100" />
      {/* Blurred shapes */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-teal-300/20 rounded-full -translate-x-1/3 translate-y-1/4 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-300/20 rounded-full translate-x-1/4 -translate-y-1/3 blur-3xl" />

      <motion.div
        className="max-w-4xl mx-auto px-8 relative z-10 flex flex-col items-center gap-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Heading and Divider */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-teal-500 mb-4 text-center font-serif drop-shadow-md">
          What Clients Say
        </h2>
        <div className="w-20 h-0.5 bg-teal-500 mb-4 mx-auto shadow-lg shadow-teal-500/50" />

        {/* Cards in Two Rows */}
        <div className="flex flex-wrap justify-center gap-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white/80 backdrop-blur-sm p-4 rounded-3xl shadow-md border border-teal-300/50 hover:bg-teal-50/90 w-[calc(50%-0.75rem)] lg:w-[calc(33.33%-0.75rem)] max-w-[280px] text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(45, 212, 191, 0.3)" }}
              viewport={{ once: true }}
            >
              <p className="text-base text-gray-900 italic mb-3">"{testimonial.quote}"</p>
              <p className="text-lg font-semibold text-teal-500 font-serif">{testimonial.name}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Testimonials;