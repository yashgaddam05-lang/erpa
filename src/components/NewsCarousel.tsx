"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

export interface NewsArticle {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  href: string;
  image?: string;
}

interface NewsCarouselProps {
  articles: NewsArticle[];
  /** Show 1 card on mobile, up to this many on desktop */
  visibleDesktop?: number;
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export default function NewsCarousel({
  articles,
  visibleDesktop = 3,
  autoPlay = true,
  autoPlayInterval = 5000,
}: NewsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [visibleCount, setVisibleCount] = useState(1);

  /* Responsive: 1 card on mobile, 2 on tablet, visibleDesktop on lg+ */
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1024) setVisibleCount(visibleDesktop);
      else if (window.innerWidth >= 640) setVisibleCount(2);
      else setVisibleCount(1);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [visibleDesktop]);

  const maxIndex = Math.max(0, articles.length - visibleCount);

  /* Reset index if it's out of bounds after resize */
  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  useEffect(() => {
    if (!autoPlay || isPaused) return;
    const timer = setInterval(next, autoPlayInterval);
    return () => clearInterval(timer);
  }, [autoPlay, isPaused, next, autoPlayInterval]);

  const categoryColors: Record<string, string> = {
    Article: "bg-erpa-light-blue/10 text-erpa-light-blue",
    "Press Release": "bg-erpa-orange/10 text-erpa-orange",
    Event: "bg-purple-500/10 text-purple-700",
    Partnership: "bg-emerald-500/10 text-emerald-700",
    Award: "bg-amber-500/10 text-amber-700",
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Carousel viewport */}
      <div className="overflow-hidden rounded-2xl">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
          }}
        >
          {articles.map((article) => (
            <div
              key={article.title}
              className="flex-none px-3"
              style={{ width: `${100 / visibleCount}%` }}
            >
              <article className="group bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                {/* Image placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-erpa-navy/90 to-erpa-blue/80 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg
                      className="w-16 h-16 text-white/20"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                      />
                    </svg>
                  </div>
                  {/* Category badge overlay */}
                  <div className="absolute top-3 left-3">
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                        categoryColors[article.category] ||
                        "bg-white/20 text-white"
                      }`}
                    >
                      {article.category}
                    </span>
                  </div>
                  {/* Gradient fade at bottom */}
                  <div className="absolute bottom-0 inset-x-0 h-12 bg-gradient-to-t from-black/30 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <span className="text-xs text-erpa-gray-600 mb-2">
                    {article.date}
                  </span>
                  <h3 className="text-base font-bold text-erpa-navy leading-snug group-hover:text-erpa-light-blue transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="mt-2 text-sm text-erpa-gray-600 leading-relaxed line-clamp-3 flex-1">
                    {article.excerpt}
                  </p>
                  <Link
                    href={article.href}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-erpa-light-blue hover:text-erpa-orange transition-colors"
                  >
                    Read Full Article
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
                  </Link>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation controls */}
      <div className="flex items-center justify-between mt-6">
        {/* Dot indicators */}
        <div className="flex items-center gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? "w-8 bg-erpa-orange"
                  : "w-2 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Arrow + Play/Pause controls */}
        <div className="flex items-center gap-2">
          {/* Play/Pause */}
          <button
            onClick={() => setIsPaused((p) => !p)}
            className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-erpa-gray-600 hover:bg-erpa-orange hover:text-white hover:border-erpa-orange transition-all"
            aria-label={isPaused ? "Play" : "Pause"}
          >
            {isPaused ? (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6zM14 4h4v16h-4z" />
              </svg>
            )}
          </button>

          {/* Prev */}
          <button
            onClick={prev}
            className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-erpa-gray-600 hover:bg-erpa-navy hover:text-white hover:border-erpa-navy transition-all"
            aria-label="Previous"
          >
            <svg
              className="w-4 h-4"
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

          {/* Next */}
          <button
            onClick={next}
            className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-erpa-gray-600 hover:bg-erpa-navy hover:text-white hover:border-erpa-navy transition-all"
            aria-label="Next"
          >
            <svg
              className="w-4 h-4"
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
        </div>
      </div>
    </div>
  );
}
