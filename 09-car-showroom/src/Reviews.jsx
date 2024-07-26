import React, { useRef, useEffect } from "react";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";

const TestimonialSlider = () => {
  const testimonials = [
    { text: "Great product! I'm loving it.", author: "John Doe" },
    { text: "Excellent service and support.", author: "Jane Smith" },
    { text: "Highly recommended. Very satisfied!", author: "Alice Johnson" },
    { text: "The best experience ever!", author: "Bob Brown" },
  ];
  const sliderRef = useRef(null);
  let slider;

  useEffect(() => {
    if (sliderRef.current) {
      slider = new KeenSlider(sliderRef.current, {
        loop: true,
        duration: 600,
        spacing: 15,
        slidesPerView: 1,
        dragStart: () => {
          slider && slider.stop();
        },
      });
    }

    return () => {
      if (slider) {
        slider.destroy();
      }
    };
  }, []);

  const prevSlide = () => {
    slider && slider.prev();
  };

  const nextSlide = () => {
    slider && slider.next();
  };

  return (
    <div className="testimonial-slider">
      <div ref={sliderRef} className="keen-slider">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="keen-slider__slide">
            <p>{testimonial.text}</p>
            <p>- {testimonial.author}</p>
          </div>
        ))}
      </div>
      <button onClick={prevSlide} className="prev-btn">
        Prev
      </button>
      <button onClick={nextSlide} className="next-btn">
        Next
      </button>
      <div className="dots">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              slider.moveToSlide(index);
            }}
            className={`dot ${index === 0 ? "active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
