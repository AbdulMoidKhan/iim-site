"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import { asset } from "../../lib/asset";

export default function EmpartDownloadsSlider({ items }) {
  const count = items.length;
  const slides = [...items, ...items];

  const trackRef = useRef(null);
  const jumpTargetRef = useRef(null);
  const indexRef = useRef(0);
  const touchStartX = useRef(null);

  const [index, setIndex] = useState(0);
  const [instant, setInstant] = useState(false);
  const [step, setStep] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    indexRef.current = index;
  }, [index]);

  useLayoutEffect(() => {
    function measure() {
      const track = trackRef.current;
      const card = track?.querySelector(".empart-dlSlideItem");
      if (!track || !card) return;
      const styles = window.getComputedStyle(track);
      const gap = parseFloat(styles.columnGap || styles.gap || "22") || 22;
      setStep(card.getBoundingClientRect().width + gap);
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // Auto-advance every 3.5s when not hovered/focused and motion allowed
  useEffect(() => {
    if (paused) return undefined;
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return undefined;
    }
    const timer = setInterval(() => {
      setInstant(false);
      setIndex((cur) => (cur >= count ? cur : cur + 1));
    }, 3500);
    return () => clearInterval(timer);
  }, [paused, count]);

  // Reset cleanly from cloned boundary back to real index 0
  useEffect(() => {
    if (index < count || jumpTargetRef.current !== null) return undefined;
    const timer = setTimeout(() => {
      setInstant(true);
      setIndex(0);
    }, 480);
    return () => clearTimeout(timer);
  }, [index, count]);

  // Re-enable smooth transition after instant jump frame
  useEffect(() => {
    if (!instant) return undefined;
    let raf2 = 0;
    const raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => {
        setInstant(false);
        if (jumpTargetRef.current !== null) {
          const nextIdx = jumpTargetRef.current;
          jumpTargetRef.current = null;
          setIndex(nextIdx);
        }
      });
    });
    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
    };
  }, [instant]);

  function goNext() {
    setInstant(false);
    setIndex((cur) => Math.min(cur + 1, count));
  }

  function goPrev() {
    if (indexRef.current <= 0) {
      jumpTargetRef.current = count - 1;
      setInstant(true);
      setIndex(count);
      return;
    }
    setInstant(false);
    setIndex((cur) => cur - 1);
  }

  function goToSlide(targetIdx) {
    jumpTargetRef.current = null;
    setInstant(false);
    setIndex(targetIdx);
  }

  function handleKeyDown(e) {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      goNext();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      goPrev();
    }
  }

  function handleTouchStart(e) {
    touchStartX.current = e.touches[0]?.clientX ?? null;
    setPaused(true);
  }

  function handleTouchEnd(e) {
    const startX = touchStartX.current;
    const endX = e.changedTouches[0]?.clientX ?? null;
    touchStartX.current = null;
    setPaused(false);
    if (startX !== null && endX !== null) {
      const diff = startX - endX;
      if (diff > 40) goNext();
      else if (diff < -40) goPrev();
    }
  }

  const activeDot = index % count;

  return (
    <div
      className="empart-downloadsSlider"
      role="region"
      aria-roledescription="carousel"
      aria-label="Downloadable materials slider"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onKeyDown={handleKeyDown}
    >
      {/* Left Arrow Button */}
      <button
        type="button"
        className="empart-dlArrowBtn empart-dlArrowPrev"
        onClick={goPrev}
        aria-label="Previous downloadable material"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M10 3L5 8l5 5" />
        </svg>
      </button>

      {/* Slider Viewport */}
      <div
        className="empart-downloadsViewport"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          ref={trackRef}
          className={`empart-downloadsTrack${instant ? " is-instant" : ""}`}
          style={{
            transform: step > 0 ? `translateX(-${index * step}px)` : "none",
          }}
        >
          {slides.map((item, idx) => {
            const isClone = idx >= count;
            return (
              <div
                key={`${item.id}-${idx}`}
                className="empart-dlSlideItem"
                aria-hidden={isClone ? true : undefined}
              >
                <Link
                  href={item.href}
                  className="empart-downloadCard"
                  tabIndex={isClone ? -1 : undefined}
                >
                  <div className="empart-downloadCardInner">
                    <div className="empart-downloadLogoPill">
                      <img loading="eager" fetchPriority="high" decoding="async" 
                        src={asset("/images/logo.webp")}
                        alt=""
                        className="empart-downloadLogo"
                        loading="eager"
                      />
                    </div>
                    <span className="empart-downloadOrg">{item.org}</span>
                    <span className="empart-downloadSub">{item.subtitle}</span>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      {/* Right Arrow Button */}
      <button
        type="button"
        className="empart-dlArrowBtn empart-dlArrowNext"
        onClick={goNext}
        aria-label="Next downloadable material"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M6 3l5 5-5 5" />
        </svg>
      </button>

      {/* Interactive Pagination Dots */}
      <div className="empart-paginationDots mt-3" role="tablist" aria-label="Choose slide">
        {items.map((item, dotIdx) => {
          const isActive = activeDot === dotIdx;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-label={`Slide ${dotIdx + 1}: ${item.subtitle}`}
              className={`empart-dot empart-dotBtn${isActive ? " active" : ""}`}
              onClick={() => goToSlide(dotIdx)}
            />
          );
        })}
      </div>
    </div>
  );
}

