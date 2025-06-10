import React from "react";
import "./MainSection.scss";
import SearchBar from "./SearchBar";

const MainSection = () => {
  return (
    <main className="main-section">
      <section className="hero">
        <div className="hero__images">
          <div className="image-column column-1">
            {[1, 2, 3, 4].map((num) => (
              <div className="image-wrapper" key={`top-left-${num}`}>
                <img
                  src={`/Images/images_top/Image Top Section (${num}).png`}
                  alt={`Lifestyle ${num}`}
                />
              </div>
            ))}
          </div>
          <div className="image-column column-2">
            {[5, 6, 7, 8].map((num) => (
              <div className="image-wrapper" key={`top-right-${num}`}>
                <img
                  src={`/Images/images_top/Image Top Section (${num}).png`}
                  alt={`Lifestyle ${num}`}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="hero__content">
          <h1>
            Book an appointment with <span>lifestyle medicine</span> experts
          </h1>
          <p>Optimize your lifestyle and reverse chronic diseases.</p>
          <SearchBar />
        </div>
      </section>

      <div className="main-section__divider" />

      <section className="pillars">
        <div className="pillars__header">
          <span className="pillars__how">HOW IT WORKS</span>
          <h2>
            <span className="pillars__highlight">Lifestyle as medicine:</span>{" "}
            The six pillars
          </h2>
          <div className="pillars__tabs">
            <button className="active">Nutrition</button>
            <button>Physical activity</button>
            <button>Restorative sleep</button>
            <button>Stress management</button>
            <button>Social connection</button>
            <button>Substance abuse</button>
          </div>
        </div>

        <div className="pillars__cards">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <div className="pillar-card" key={`bottom-${num}`}>
              <img
                src={`/Images/images_bottom/Image Bottom (${num}).jpg`}
                alt={`Lifestyle pillar ${num}`}
                className="pillar-card__img"
              />
              <div className="pillar-card__badge">
                {num === 1 && (
                  <>
                    <span role="img" aria-label="heart">
                      💙
                    </span>{" "}
                    121/80 <span>mmHg</span>
                  </>
                )}
                {num === 2 && (
                  <>
                    <span role="img" aria-label="activity">
                      💙
                    </span>{" "}
                    32 <span>minutes</span>
                  </>
                )}
                {num === 3 && (
                  <>
                    <span role="img" aria-label="sleep">
                      💙
                    </span>{" "}
                    8 <span>hours</span>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default MainSection;
