import React from "react";
import "./MainSection.scss";
import SearchBar from "./SearchBar";

// Image data for hero section
const heroImagesCol1 = [
  "/Images/images_top/Image Top Section (1).png",
  "/Images/images_top/Image Top Section (2).png",
  "/Images/images_top/Image Top Section (3).png",
  "/Images/images_top/Image Top Section (4).png",
];

const heroImagesCol2 = [
  "/Images/images_top/Image Top Section (5).png",
  "/Images/images_top/Image Top Section (6).png",
  "/Images/images_top/Image Top Section (7).png",
  "/Images/images_top/Image Top Section (8).png",
];

const allHeroImages = [...heroImagesCol1, ...heroImagesCol2];

const pillarCardsData = [
  {
    imgSrc: "/Images/images_bottom/Image Bottom (1).jpg",
    alt: "Nutrition",
    badgeIcon: "💙",
    badgeText: "121/80",
    badgeUnit: "mmHg",
    title: "Nutrition",
    description:
      "Evidence supports the use of a whole food, plant-predominant diet to prevent, treat and reverse chronic illness.",
  },
  {
    imgSrc: "/Images/images_bottom/Image Bottom (2).jpg",
    alt: "Physical activity",
    badgeIcon: "💗",
    badgeText: "32",
    badgeUnit: "minutes",
    title: "Physical activity",
    description:
      "Regular physical activity is key to managing weight, improving mental health, and reducing risk of chronic disease.",
  },
  {
    imgSrc: "/Images/images_bottom/Image Bottom (3).jpg",
    alt: "Restorative sleep",
    badgeIcon: "🕰️",
    badgeText: "8",
    badgeUnit: "hours",
    title: "Restorative sleep",
    description:
      "Consistent, quality sleep is key to restorative function and physical and mental health.",
  },
];

const MainSection = () => {
  return (
    <main className="main-section">
      <div className="hero-container">
        <section className="hero">
          {/* --- Desktop Image Collage --- */}
          <div className="hero__image-collage">
            <div className="hero__images-col scroll-down">
              {[...heroImagesCol1, ...heroImagesCol1].map((src, index) => (
                <img
                  key={`col1-${index}`}
                  src={src}
                  alt=""
                  className="hero__image"
                />
              ))}
            </div>
            <div className="hero__images-col scroll-up">
              {[...heroImagesCol2, ...heroImagesCol2].map((src, index) => (
                <img
                  key={`col2-${index}`}
                  src={src}
                  alt=""
                  className="hero__image"
                />
              ))}
            </div>
          </div>

          <div className="hero__content">
            <h1>
              Book an appointment with{" "}
              <span className="highlight">lifestyle medicine</span> experts
            </h1>
            <p>Optimize your lifestyle and reverse chronic diseases.</p>
            <SearchBar />
          </div>

          {/* --- Mobile Image Scroller --- */}
          <div className="hero__image-scroller-mobile">
            <div className="hero__image-track-mobile">
              {[...allHeroImages, ...allHeroImages].map((src, index) => (
                <img
                  key={`mobile-${index}`}
                  src={src}
                  alt=""
                  className="hero__image-mobile"
                />
              ))}
            </div>
          </div>
        </section>
      </div>

      <div className="wave-divider" />

      <section className="pillars">
        <div className="pillars__header">
          <div>
            <span className="pillars__subheading">HOW IT WORKS</span>
            <h2>
              <span className="pillars__highlight">Lifestyle as medicine:</span>{" "}
              The six pillars
            </h2>
          </div>
          <div className="pillars__nav">
            <button className="pillars__arrow">←</button>
            <button className="pillars__arrow">→</button>
          </div>
        </div>

        <div className="pillars__tabs">
          <button className="pillars__tab-btn active">Nutrition</button>
          <button className="pillars__tab-btn">Physical activity</button>
          <button className="pillars__tab-btn">Restorative sleep</button>
          <button className="pillars__tab-btn">Stress management</button>
          <button className="pillars__tab-btn">Social connection</button>
          <button className="pillars__tab-btn">Substance abuse</button>
        </div>

        <div className="pillars__cards">
          {pillarCardsData.map((card, index) => (
            <div className="pillar-card" key={`card-${index}`}>
              <div className="pillar-card__image-wrapper">
                <img
                  src={card.imgSrc}
                  alt={card.alt}
                  className="pillar-card__img"
                />
                <div className="pillar-card__badge">
                  <span role="img" aria-label="icon">
                    {card.badgeIcon}
                  </span>
                  {card.badgeText} <span>{card.badgeUnit}</span>
                </div>
              </div>
              <div className="pillar-card__content">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default MainSection;
