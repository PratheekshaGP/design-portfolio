import { useState } from "react";

// ═══════════════════════════════════════════════════════════════════════════════
//  ASSET IMPORTS  (all files are in src/assets/ directly)
// ═══════════════════════════════════════════════════════════════════════════════
//  To add more works later:
//    1. Drop the file into src/assets/
//    2. Import it here
//    3. Add a new entry to the works array below

// ── Internship: Pehchaan posters ─────────────────────────────────────────────
import pehchaan1 from "../assets/pehchaan1.png";
import pehchaan2 from "../assets/pehchaan2.png";
import pehchaan3 from "../assets/pehchaan3.png";
import pehchaan4 from "../assets/pehchaan4.png";


import canvaPoster1 from "../assets/canva-poster1.png";
import canvaPoster2 from "../assets/canva-poster2.png";
import canvaPoster3 from "../assets/canva-poster3.png";
import canvaCarousel from "../assets/canva-carousel.png";

// ── Personal: Event poster series ────────────────────────────────────────────
import freshers from "../assets/freshers-poster.png";
import censa from "../assets/censa-poster.png";
import vineeth from "../assets/vineeth-poster.png";

import chocolate from "../assets/chocolate.png";
import paris from "../assets/paris.png";

import uiuxRedesign from "../assets/uiux-redesign.png";

// ── To add a video later: ────────────────────────────────────────────────────
//  Option A — YouTube / Vimeo embed URL (auto-detected → iframe):
//    videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID"
//  Option B — Local .mp4 (place in /public/videos/, NOT src/assets/):
//    videoUrl: "/videos/my-reel.mp4"
// ═══════════════════════════════════════════════════════════════════════════════


// ─── WORKS ARRAY ─────────────────────────────────────────────────────────────
// 'All' tab shows every entry below.
// Each section tab filters by `category`.
// Add more entries any time — the grid scales automatically.
//
// Fields:
//   id          (number)   — unique identifier
//   title       (string)   — shown in card + modal header
//   subtitle    (string)   — client name / context line
//   category    (string)   — "internship" | "certification" | "personal" | "inprogress"
//   tags        (string[]) — shown as pills; first 2 appear on the card
//   description (string)   — shown in modal body
//   mediaType   (string)   — "image" | "video"
//   thumbnail   (import|null) — card cover; null shows a placeholder
//   images      (import[]) — for mediaType "image" (empty array = placeholder)
//   videoUrl    (string)   — for mediaType "video" (empty string = placeholder)
//   videoPoster (import|null) — optional still image for video works

const works = [
  {
    id: 1,
    title: "Pehchaan The Street School",
    subtitle: "Internship · Social Media & Outreach",
    category: "realwork",
    tags: ["Poster Design", "Social Media", "Canva"],
    description:
      "A selection of social media and outreach creatives created during my design internship at Pehchaan The Street School, focusing on clear communication, visual hierarchy and engaging layouts for digital platforms.",
    mediaType: "image",
    thumbnail: pehchaan1,
    images: [pehchaan1, pehchaan2, pehchaan3, pehchaan4],
  },
  {
    id: 2,
    title: "Event Poster Series",
    subtitle: "Personal Design Practice",
    category: "personal",
    tags: ["Poster Design", "Typography", "Visual Design"],
    description:
      "A collection of event posters created as personal design practice, exploring different layouts, typography and visual styles for event communication.",
    mediaType: "image",
    thumbnail: freshers,
    images: [freshers, censa, vineeth],
  },
  {
    id: 3,
    title: "Personal Design Practice",
    subtitle: "Canva · Visual Exploration",
    category: "personal",
    tags: ["Canva", "Social Media", "Visual Design"],
    description:
      "Selected personal design explorations created to experiment with composition, colour, typography and visual storytelling.",
    mediaType: "image",
    thumbnail: canvaPoster1,
    images: [canvaPoster1, canvaPoster2, canvaPoster3, canvaCarousel],
  },
  {
    id: 4,
    title: "Brand & Visual Explorations",
    subtitle: "Personal Practice",
    category: "personal",
    tags: ["Branding", "Visual Design", "Colour"],
    description:
      "Personal experiments with brand identity, product aesthetics, colour palettes and visual composition.",
    mediaType: "image",
    thumbnail: chocolate,
    images: [chocolate, paris],
  },
  {
    id: 5,
    title: "UI/UX Redesign Concept",
    subtitle: "Competition Project",
    category: "competition",
    tags: ["UI/UX", "Figma", "Visual Design"],
    description:
      "A UI/UX redesign concept created as part of a design competition, exploring layout, visual hierarchy and interface presentation.",
    mediaType: "image",
    thumbnail: uiuxRedesign,
    images: [uiuxRedesign],
  },
];;

// ═══════════════════════════════════════════════════════════════════════════════
//  FILTER CONFIG
// ═══════════════════════════════════════════════════════════════════════════════
const FILTERS = [
  { key: "all", label: "All" },
  { key: "realwork", label: "Real Work" },
  { key: "personal", label: "Personal" },
  { key: "competition", label: "Competition" },
];

// ═══════════════════════════════════════════════════════════════════════════════
//  STYLES (all defined outside JSX — Vite/OXC parser rules)
// ═══════════════════════════════════════════════════════════════════════════════

const sectionStyle = {
  backgroundColor: "#FDFAF7",
  minHeight: "100vh",
  padding: "80px 24px",
};

const innerStyle = {
  maxWidth: "1200px",
  margin: "0 auto",
};

const eyebrowStyle = {
  fontFamily: "'DM Sans', sans-serif",
  color: "#A6634F",
  letterSpacing: "0.15em",
  fontSize: "12px",
  textTransform: "uppercase",
  marginBottom: "8px",
  marginTop: 0,
};

const headingStyle = {
  fontFamily: "'Bebas Neue', sans-serif",
  fontSize: "clamp(2.5rem, 6vw, 4rem)",
  color: "#2C1C22",
  letterSpacing: "0.05em",
  lineHeight: 1,
  margin: "0 0 16px",
};

const accentBarStyle = {
  width: "48px",
  height: "3px",
  backgroundColor: "#A6634F",
  marginBottom: "36px",
};

const filterRowStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: "10px",
  marginBottom: "40px",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
  gap: "24px",
};

const cardBaseStyle = {
  backgroundColor: "#ffffff",
  border: "1px solid #EDE4DB",
  borderRadius: "12px",
  overflow: "hidden",
  cursor: "pointer",
  transition: "transform 0.22s ease, box-shadow 0.22s ease",
};

const cardThumbStyle = {
  width: "100%",
  aspectRatio: "4 / 3",
  objectFit: "cover",
  display: "block",
};

const placeholderThumbStyle = {
  width: "100%",
  aspectRatio: "4 / 3",
  backgroundColor: "#EDE4DB",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
};

const videoPlayIconStyle = {
  width: "52px",
  height: "52px",
  borderRadius: "50%",
  backgroundColor: "#A6634F",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const cardBodyStyle = {
  padding: "16px 20px 20px",
};

const tagRowStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: "6px",
  marginBottom: "10px",
};

const tagPillStyle = {
  fontFamily: "'DM Sans', sans-serif",
  fontSize: "11px",
  color: "#A6634F",
  backgroundColor: "#EDE4DB",
  borderRadius: "99px",
  padding: "3px 10px",
  lineHeight: 1.6,
};

const cardTitleStyle = {
  fontFamily: "'Playfair Display', serif",
  fontSize: "16px",
  fontWeight: 600,
  color: "#2C1C22",
  margin: "0 0 4px",
  lineHeight: 1.3,
};

const cardSubtitleStyle = {
  fontFamily: "'DM Sans', sans-serif",
  fontSize: "13px",
  color: "#7A5C5C",
  margin: 0,
};

const placeholderLabelStyle = {
  fontFamily: "'DM Sans', sans-serif",
  fontSize: "12px",
  color: "#7A5C5C",
};

const emptyStateStyle = {
  textAlign: "center",
  padding: "80px 0",
  fontFamily: "'DM Sans', sans-serif",
  color: "#7A5C5C",
  fontSize: "15px",
};

// ── Modal ────────────────────────────────────────────────────────────────────

const overlayStyle = {
  position: "fixed",
  inset: 0,
  backgroundColor: "rgba(44, 28, 34, 0.82)",
  zIndex: 50,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "24px",
  backdropFilter: "blur(4px)",
};

const modalStyle = {
  backgroundColor: "#FDFAF7",
  borderRadius: "16px",
  maxWidth: "820px",
  width: "100%",
  maxHeight: "90vh",
  overflowY: "auto",
  position: "relative",
  boxShadow: "0 32px 80px rgba(44,28,34,0.35)",
};

const closeButtonStyle = {
  position: "absolute",
  top: "14px",
  right: "16px",
  background: "none",
  border: "none",
  fontSize: "22px",
  cursor: "pointer",
  color: "#2C1C22",
  zIndex: 10,
  lineHeight: 1,
  padding: "4px 8px",
  borderRadius: "6px",
};

// Carousel
const carouselWrapStyle = {
  position: "relative",
  backgroundColor: "#EDE4DB",
  borderRadius: "16px 16px 0 0",
  overflow: "hidden",
};

const carouselImgStyle = {
  width: "100%",
  aspectRatio: "4 / 3",
  objectFit: "contain",
  display: "block",
};

const carouselPlaceholderStyle = {
  width: "100%",
  aspectRatio: "4 / 3",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "12px",
  backgroundColor: "#EDE4DB",
};

const carouselNavPrevStyle = {
  position: "absolute",
  top: "50%",
  left: "12px",
  transform: "translateY(-50%)",
  background: "rgba(44,28,34,0.72)",
  border: "none",
  color: "#FDFAF7",
  fontSize: "22px",
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  lineHeight: 1,
};

const carouselNavNextStyle = {
  position: "absolute",
  top: "50%",
  right: "12px",
  transform: "translateY(-50%)",
  background: "rgba(44,28,34,0.72)",
  border: "none",
  color: "#FDFAF7",
  fontSize: "22px",
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  lineHeight: 1,
};

const thumbStripStyle = {
  display: "flex",
  gap: "8px",
  flexWrap: "wrap",
  padding: "12px 16px 16px",
  backgroundColor: "#EDE4DB",
};

const thumbImgStyle = {
  width: "60px",
  height: "60px",
  objectFit: "cover",
  borderRadius: "6px",
  cursor: "pointer",
  border: "2px solid transparent",
  transition: "border-color 0.15s",
};

const thumbImgActiveStyle = {
  width: "60px",
  height: "60px",
  objectFit: "cover",
  borderRadius: "6px",
  cursor: "pointer",
  border: "2px solid #A6634F",
  transition: "border-color 0.15s",
};

// Video inside modal
const videoWrapStyle = {
  backgroundColor: "#111",
  borderRadius: "16px 16px 0 0",
  overflow: "hidden",
};

const iframeStyle = {
  width: "100%",
  aspectRatio: "16 / 9",
  border: "none",
  display: "block",
};

const videoElStyle = {
  width: "100%",
  aspectRatio: "16 / 9",
  display: "block",
  backgroundColor: "#000",
};

const videoPlaceholderStyle = {
  width: "100%",
  aspectRatio: "16 / 9",
  backgroundColor: "#1a1212",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "14px",
};

// Modal body
const modalBodyStyle = {
  padding: "24px 28px 32px",
};

const modalTagRowStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: "6px",
  marginBottom: "14px",
};

const modalTitleStyle = {
  fontFamily: "'Playfair Display', serif",
  fontSize: "22px",
  fontWeight: 700,
  color: "#2C1C22",
  margin: "0 0 4px",
};

const modalSubtitleStyle = {
  fontFamily: "'DM Sans', sans-serif",
  fontSize: "12px",
  color: "#A6634F",
  textTransform: "uppercase",
  letterSpacing: "0.12em",
  margin: "0 0 16px",
};

const modalDescStyle = {
  fontFamily: "'DM Sans', sans-serif",
  fontSize: "15px",
  color: "#7A5C5C",
  lineHeight: 1.75,
  margin: 0,
};

// ═══════════════════════════════════════════════════════════════════════════════
//  COMPONENT
// ═══════════════════════════════════════════════════════════════════════════════
export default function Work() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedWork, setSelectedWork] = useState(null);
  const [carouselIndex, setCarouselIndex] = useState(0);

  // Filtered list
  const filtered =
    activeFilter === "all"
      ? works
      : works.filter(function (w) { return w.category === activeFilter; });

  // Count per filter key
  function countFor(key) {
    if (key === "all") return works.length;
    return works.filter(function (w) { return w.category === key; }).length;
  }

  // Handlers
  function handleFilterClick(key) {
    setActiveFilter(key);
  }

  function handleCardClick(work) {
    setSelectedWork(work);
    setCarouselIndex(0);
  }

  function handleCloseModal() {
    setSelectedWork(null);
    setCarouselIndex(0);
  }

  function handlePrev() {
    if (!selectedWork || !selectedWork.images || selectedWork.images.length === 0) return;
    const len = selectedWork.images.length;
    setCarouselIndex(function (i) { return (i - 1 + len) % len; });
  }

  function handleNext() {
    if (!selectedWork || !selectedWork.images || selectedWork.images.length === 0) return;
    const len = selectedWork.images.length;
    setCarouselIndex(function (i) { return (i + 1) % len; });
  }

  function handleThumbClick(idx) {
    setCarouselIndex(idx);
  }

  function handleOverlayClick() {
    handleCloseModal();
  }

  function handleModalClick(e) {
    e.stopPropagation();
  }

  return (
    <>
      {/* Pulse keyframe for in-progress dot */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.75); }
        }
        .work-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(44,28,34,0.12);
        }
        .close-btn:hover {
          background: #EDE4DB;
        }
      `}</style>

      <section id="work" style={sectionStyle}>
        <div style={innerStyle}>

          {/* ── Header ─────────────────────────────────────────────────────── */}
          <p style={eyebrowStyle}>Portfolio</p>
          <h2 style={headingStyle}>Selected Works</h2>
          <div style={accentBarStyle} />

          {/* ── Filters ────────────────────────────────────────────────────── */}
          <div style={filterRowStyle}>
            {FILTERS.map(function (f) {
              const isActive = activeFilter === f.key;
              const count = countFor(f.key);
              const btnStyle = {
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "13px",
                fontWeight: 500,
                padding: "8px 18px",
                borderRadius: "99px",
                border: isActive ? "none" : "1.5px solid #C4A89A",
                backgroundColor: isActive ? "#A6634F" : "transparent",
                color: isActive ? "#FDFAF7" : "#7A5C5C",
                cursor: "pointer",
                transition: "all 0.2s ease",
              };
              return (
                <button
                  key={f.key}
                  style={btnStyle}
                  onClick={function () { handleFilterClick(f.key); }}
                >
                  {f.label}
                  <span style={{ opacity: 0.7, marginLeft: "5px", fontSize: "11px" }}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* ── Grid ───────────────────────────────────────────────────────── */}
          <div style={gridStyle}>
            {filtered.map(function (work) {
              return (
                <div
                  key={work.id}
                  className="work-card"
                  style={cardBaseStyle}
                  onClick={function () { handleCardClick(work); }}
                >
                  {/* Thumbnail */}
                  {work.thumbnail ? (
                    <img
                      src={work.thumbnail}
                      alt={work.title}
                      style={cardThumbStyle}
                    />
                  ) : (
                    <div style={placeholderThumbStyle}>
                      {work.mediaType === "video" ? (
                        <div style={videoPlayIconStyle}>
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="#FDFAF7">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      ) : (
                        <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#7A5C5C" strokeWidth="1.2">
                          <rect x="3" y="3" width="18" height="18" rx="2" />
                          <circle cx="8.5" cy="8.5" r="1.5" />
                          <path d="M21 15l-5-5L5 21" />
                        </svg>
                      )}
                      <span style={placeholderLabelStyle}>
                        {work.mediaType === "video" ? "Video" : "Image Coming Soon"}
                      </span>
                    </div>
                  )}

                  {/* Card body */}
                  <div style={cardBodyStyle}>
                    <div style={tagRowStyle}>
                      {work.tags.slice(0, 2).map(function (tag) {
                        return (
                          <span key={tag} style={tagPillStyle}>{tag}</span>
                        );
                      })}
                    </div>
                    <h3 style={cardTitleStyle}>{work.title}</h3>
                    <p style={cardSubtitleStyle}>{work.subtitle}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <div style={emptyStateStyle}>
              No works in this category yet — check back soon.
            </div>
          )}

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          MODAL
      ═══════════════════════════════════════════════════════════════════════ */}
      {selectedWork && (
        <div style={overlayStyle} onClick={handleOverlayClick}>
          <div style={modalStyle} onClick={handleModalClick}>

            {/* Close button */}
            <button
              className="close-btn"
              style={closeButtonStyle}
              onClick={handleCloseModal}
            >
              ✕
            </button>

            {/* ── IMAGE carousel ─────────────────────────────────────────── */}
            {selectedWork.mediaType === "image" && (
              <>
                <div style={carouselWrapStyle}>
                  {selectedWork.images && selectedWork.images.length > 0 ? (
                    <>
                      <img
                        src={selectedWork.images[carouselIndex]}
                        alt={selectedWork.title}
                        style={carouselImgStyle}
                      />
                      {selectedWork.images.length > 1 && (
                        <>
                          <button style={carouselNavPrevStyle} onClick={handlePrev}>‹</button>
                          <button style={carouselNavNextStyle} onClick={handleNext}>›</button>
                        </>
                      )}
                    </>
                  ) : (
                    <div style={carouselPlaceholderStyle}>
                      <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#7A5C5C" strokeWidth="0.9">
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <circle cx="8.5" cy="8.5" r="1.5" />
                        <path d="M21 15l-5-5L5 21" />
                      </svg>
                      <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#7A5C5C", fontSize: "14px", margin: 0 }}>
                        Images coming soon
                      </p>
                    </div>
                  )}
                </div>

                {/* Thumbnail strip */}
                {selectedWork.images && selectedWork.images.length > 1 && (
                  <div style={thumbStripStyle}>
                    {selectedWork.images.map(function (img, idx) {
                      const tStyle = idx === carouselIndex ? thumbImgActiveStyle : thumbImgStyle;
                      return (
                        <img
                          key={idx}
                          src={img}
                          alt=""
                          style={tStyle}
                          onClick={function () { handleThumbClick(idx); }}
                        />
                      );
                    })}
                  </div>
                )}
              </>
            )}

            {/* ── VIDEO ──────────────────────────────────────────────────── */}
            {selectedWork.mediaType === "video" && (
              <div style={videoWrapStyle}>
                {selectedWork.videoUrl ? (
                  isEmbedUrl(selectedWork.videoUrl) ? (
                    /* YouTube / Vimeo embed */
                    <iframe
                      src={selectedWork.videoUrl}
                      title={selectedWork.title}
                      style={iframeStyle}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    /* Local .mp4 in /public/videos/ */
                    <video
                      src={selectedWork.videoUrl}
                      poster={selectedWork.videoPoster || undefined}
                      style={videoElStyle}
                      controls
                    />
                  )
                ) : (
                  /* No URL yet — placeholder */
                  <div style={videoPlaceholderStyle}>
                    <div style={{ ...videoPlayIconStyle, width: "64px", height: "64px" }}>
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="#FDFAF7">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#7A5C5C", fontSize: "14px", margin: 0 }}>
                      Video coming soon
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* ── Modal body ─────────────────────────────────────────────── */}
            <div style={modalBodyStyle}>

              {/* In-progress badge */}
              {selectedWork.category === "inprogress" && (
                <div style={inprogressBadgeStyle}>
                  <span style={dotStyle} />
                  Work in progress
                </div>
              )}

              {/* Tags */}
              <div style={modalTagRowStyle}>
                {selectedWork.tags.map(function (tag) {
                  return (
                    <span key={tag} style={tagPillStyle}>{tag}</span>
                  );
                })}
              </div>

              <h2 style={modalTitleStyle}>{selectedWork.title}</h2>
              <p style={modalSubtitleStyle}>{selectedWork.subtitle}</p>
              <p style={modalDescStyle}>{selectedWork.description}</p>
            </div>

          </div>
        </div>
      )}
    </>
  );
}