"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { asset } from "../../lib/asset";

export default function EmarchGalleryClient({ photos }) {
  const [expanded, setExpanded] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const visiblePhotos = expanded ? photos : photos.slice(0, 6);

  useEffect(() => {
    if (activeIndex === null) return undefined;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(e) {
      if (e.key === "Escape") {
        setActiveIndex(null);
      } else if (e.key === "ArrowRight") {
        setActiveIndex((cur) => (cur + 1) % photos.length);
      } else if (e.key === "ArrowLeft") {
        setActiveIndex((cur) => (cur - 1 + photos.length) % photos.length);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, photos.length]);

  const activePhoto = activeIndex !== null ? photos[activeIndex] : null;

  return (
    <>
      <div className="emarch-galleryGrid">
        {visiblePhotos.map((item, idx) => (
          <button
            key={item.src}
            type="button"
            className="emarch-galleryTile"
            onClick={() => setActiveIndex(idx)}
            aria-label={`View gallery photo: ${item.alt}`}
          >
            <div className="emarch-galleryImgWrap">
              <Image
                src={asset(item.src)}
                alt={item.alt}
                width={724}
                height={543}
                className="emarch-galleryImg"
                loading="lazy"
              />
              <span className="emarch-galleryZoomBadge" aria-hidden="true">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="7" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  <line x1="11" y1="8" x2="11" y2="14" />
                  <line x1="8" y1="11" x2="14" y2="11" />
                </svg>
              </span>
            </div>
          </button>
        ))}
      </div>

      {photos.length > 6 && (
        <div className="emarch-galleryMoreWrap">
          <button
            type="button"
            className="emarch-btnViewMore"
            onClick={() => setExpanded((prev) => !prev)}
            aria-expanded={expanded}
          >
            <span>{expanded ? "Show Less" : "View More"}</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              style={{
                transform: expanded ? "rotate(180deg)" : "none",
                transition: "transform 0.2s ease",
              }}
            >
              <path d="M4 6l4 4 4-4" />
            </svg>
          </button>
        </div>
      )}

      {activePhoto && (
        <div
          className="emarch-lightboxBackdrop"
          role="dialog"
          aria-modal="true"
          aria-label={activePhoto.alt}
          onClick={(e) => {
            if (e.target === e.currentTarget) setActiveIndex(null);
          }}
        >
          <div className="emarch-lightboxDialog">
            <button
              type="button"
              className="emarch-lightboxClose"
              onClick={() => setActiveIndex(null)}
              aria-label="Close lightbox"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <div className="emarch-lightboxImgFrame">
              <Image
                src={asset(activePhoto.src)}
                alt={activePhoto.alt}
                width={1448}
                height={1086}
                className="emarch-lightboxImg"
                priority
              />
            </div>

            <div className="emarch-lightboxFooter">
              <p className="emarch-lightboxCaption">{activePhoto.alt}</p>
              <div className="emarch-lightboxNav">
                <button
                  type="button"
                  className="emarch-lightboxNavBtn"
                  onClick={() =>
                    setActiveIndex((cur) => (cur - 1 + photos.length) % photos.length)
                  }
                  aria-label="Previous photo"
                >
                  ‹ Prev
                </button>
                <span className="emarch-lightboxCounter">
                  {activeIndex + 1} / {photos.length}
                </span>
                <button
                  type="button"
                  className="emarch-lightboxNavBtn"
                  onClick={() =>
                    setActiveIndex((cur) => (cur + 1) % photos.length)
                  }
                  aria-label="Next photo"
                >
                  Next ›
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

