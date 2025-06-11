import React, { useState, useEffect, useRef } from "react";
import "./MainSection.scss";
import "./MobileStyles.scss";
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

// Expanded to include all 6 pillars
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
  {
    imgSrc: "/Images/images_bottom/Image Bottom (4).jpg",
    alt: "Stress management",
    badgeIcon: "🧘",
    badgeText: "15",
    badgeUnit: "minutes",
    title: "Stress management",
    description:
      "Managing stress through mindfulness and relaxation techniques is crucial for long-term health and well-being.",
  },
  {
    imgSrc: "/Images/images_bottom/Image Bottom (5).jpg",
    alt: "Social connection",
    badgeIcon: "🧑‍🤝‍🧑",
    badgeText: "3",
    badgeUnit: "friends",
    title: "Social connection",
    description:
      "Nurturing relationships and a sense of community are fundamental to emotional resilience and happiness.",
  },
  {
    imgSrc: "/Images/images_bottom/Image Bottom (6).jpg",
    alt: "Substance abuse",
    badgeIcon: "💧",
    badgeText: "0",
    badgeUnit: "alcohol",
    title: "Substance abuse",
    description:
      "Avoiding risky substances like tobacco and limiting alcohol intake reduces the risk of numerous chronic diseases.",
  },
];

const MainSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef(null);
  const autoScrollRef = useRef();
  const [cardWidth, setCardWidth] = useState(350);
  const [cardGap, setCardGap] = useState(32);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 767) {
        setCardWidth(window.innerWidth - 40); // card width is viewport width - padding
        setCardGap(20);
      } else {
        setCardWidth(350);
        setCardGap(32);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleTabClick = (index) => {
    setActiveIndex(index);
  };

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? pillarCardsData.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === pillarCardsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Effect for auto-scrolling
  useEffect(() => {
    autoScrollRef.current = handleNextClick;
  });

  useEffect(() => {
    const play = () => {
      autoScrollRef.current();
    };
    const interval = setInterval(play, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="main-section">
      <div className="hero-container">
        <section className="hero">
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
          <div className="hero__text-content">
            <div className="hero__content">
              <h1>
                Book an appointment with{" "}
                <span className="highlight">lifestyle medicine</span> experts
              </h1>
              <p>Optimize your lifestyle and reverse chronic diseases.</p>
            </div>
            <div className="hero__search-bar">
              <SearchBar />
            </div>
          </div>
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
            <button className="pillars__arrow" onClick={handlePrevClick}>
              ←
            </button>
            <button className="pillars__arrow" onClick={handleNextClick}>
              →
            </button>
          </div>
        </div>

        <div className="pillars__tabs">
          {pillarCardsData.map((card, index) => (
            <button
              key={card.title}
              className={`pillars__tab-btn ${
                index === activeIndex ? "active" : ""
              }`}
              onClick={() => handleTabClick(index)}
            >
              {card.title}
            </button>
          ))}
        </div>

        <div className="pillars__cards-viewport">
          <div
            className="pillars__cards-track"
            ref={trackRef}
            style={{ transform: `translateX(-${activeIndex * (cardWidth + cardGap)}px)` }}
          >
            {pillarCardsData.map((card, index) => (
              <div className="pillar-card" key={`card-track-${index}`} style={{ minWidth: cardWidth }}>
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
        </div>

        {/* This container is for the mobile swipeable view */}
        <div className="pillars__cards-mobile">
          {pillarCardsData.map((card, index) => (
            <div className="pillar-card" key={`card-mobile-${index}`}>
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
