"use client";

import { useState, useEffect } from "react";

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Conquer Mountain Peaks",
      subtitle: "Experience breathtaking heights and unforgettable views",
      emoji: "⛰️",
      gradient: "from-blue-600 via-blue-700 to-blue-800",
    },
    {
      id: 2,
      title: "Dive into Adventure",
      subtitle: "Explore the mysteries of the ocean depths",
      emoji: "🤿",
      gradient: "from-cyan-500 via-blue-600 to-teal-700",
    },
    {
      id: 3,
      title: "Soar Above the Clouds",
      subtitle: "Feel the ultimate rush of flying through the sky",
      emoji: "🪂",
      gradient: "from-purple-600 via-pink-600 to-red-600",
    },
    {
      id: 4,
      title: "Jungle Expeditions",
      subtitle: "Discover exotic wildlife and ancient mysteries",
      emoji: "🌿",
      gradient: "from-green-600 via-emerald-600 to-teal-700",
    },
    {
      id: 5,
      title: "Rapid Adventures",
      subtitle: "Navigate thrilling white-water rapids",
      emoji: "🚣",
      gradient: "from-amber-500 via-orange-600 to-red-700",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className={`bg-gradient-to-br ${slide.gradient} w-full h-full flex items-center justify-center relative overflow-hidden`}
          >
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%27 height=%2760%27 viewBox=%270 0 60 60%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cg fill=%27none%27 fill-rule=%27evenodd%27%3E%3Cg fill=%27%23ffffff%27 fill-opacity=%270.1%27%3E%3Cpath d=%27M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center text-white px-8">
              <div className="text-8xl mb-6 animate-bounce">{slide.emoji}</div>
              <h2 className="text-5xl md:text-6xl font-bold mb-4">
                {slide.title}
              </h2>
              <p className="text-xl md:text-2xl font-light mb-8 opacity-90">
                {slide.subtitle}
              </p>
              <div className="space-x-4">
                <button className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition transform hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-20"></div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 text-white p-3 rounded-full backdrop-blur-md transition"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 text-white p-3 rounded-full backdrop-blur-md transition"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? "bg-white w-8"
                : "bg-white/50 hover:bg-white/75"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
