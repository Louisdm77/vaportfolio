import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

function Testimonials() {
  const testimonials = [
    {
      name: 'Tope Ishola',
      quote:
        'Akwaji’s transcription services were exceptionally accurate and delivered ahead of schedule, making my workflow seamless.',
    },
    {
      name: 'Francis  Fidelis',
      quote:
        'Professional email management transformed my inbox, saving me hours each week with clear, concise responses.',
    },
    {
      name: 'Sarah Aban',
      quote:
        'The formatted reports provided were polished and professional, significantly enhancing our brand’s presentation.',
    },
  ];

  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  // Autoplay functionality
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup on component unmount or when autoplay is paused
  }, [isPlaying, testimonials.length]);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  const goToSlide = (index) => setCurrent(index);

  return (
    <section
      id="testimonials"
      className="py-12 bg-gray-100 h-auto relative overflow-hidden"
    >
      {/* Background gradient and blur */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-purple-500/10 to-gray-100" />
      <div className="absolute top-0 left-0 w-48 h-48 bg-teal-300/20 rounded-full -translate-x-1/3 translate-y-1/4 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-300/20 rounded-full translate-x-1/4 -translate-y-1/3 blur-3xl" />

      <motion.div
        className="max-w-4xl mx-auto px-0 sm:px-8 relative z-10 flex flex-col items-center gap-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-teal-500 mb-4 text-center font-serif drop-shadow-md">
          What Clients Say
        </h2>
        <div className="w-20 h-0.5 bg-teal-500 mb-4 mx-auto shadow-lg shadow-teal-500/50" />

        {/* Carousel on mobile, grid on md+ */}
        {isMobile ? (
          <div className="w-full max-w-xs mx-auto text-center">
            <motion.div
              key={current}
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white/80 backdrop-blur-sm p-4 rounded-3xl shadow-md border border-teal-300/50 hover:bg-teal-50/90"
            >
              <p className="text-base text-gray-900 italic mb-3">
                "{testimonials[current].quote}"
              </p>
              <p className="text-lg font-semibold text-teal-500 font-serif">
                {testimonials[current].name}
              </p>
            </motion.div>

            {/* Indicators */}
            <div className="mt-4 flex justify-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === current
                      ? 'bg-teal-500'
                      : 'bg-gray-300 hover:bg-teal-400'
                  }`}
                />
              ))}
            </div>

            {/* Controls */}
            <div className="mt-4 flex justify-center gap-4 text-xl font-bold">
              <button
                onClick={prevSlide}
                className="text-teal-600 hover:underline"
              >
                ← Prev
              </button>
              <button
                onClick={() => setIsPlaying((prev) => !prev)}
                className="text-teal-600 hover:underline"
              >
                {isPlaying ? 'Pause' : 'Play'}
              </button>
              <button
                onClick={nextSlide}
                className="text-teal-600 hover:underline"
              >
                Next →
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-wrap justify-center gap-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white/80 backdrop-blur-sm p-4 rounded-3xl shadow-md border border-teal-300/50 hover:bg-teal-50/90 w-[calc(50%-0.75rem)] lg:w-[calc(33.33%-0.75rem)] max-w-[280px] text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 10px 20px rgba(45, 212, 191, 0.3)',
                }}
                viewport={{ once: true }}
              >
                <p className="text-base text-gray-900 italic mb-3">
                  "{testimonial.quote}"
                </p>
                <p className="text-lg font-semibold text-teal-500 font-serif">
                  {testimonial.name}
                </p>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </section>
  );
}

export default Testimonials;