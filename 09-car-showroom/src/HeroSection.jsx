const HeroSection = () => {
  return (
    <section
      className="section hero relative overflow-hidden"
      style={{
        backgroundImage: `url('../src/static/img/hero-bg-bottom.png'), url('../src/static/img/hero-bg-top.png')`,
      }}
    >
      <div className="container">
        <img
          src="../src/static/img/shape-1.png"
          width="61"
          height="61"
          alt="Vector Shape"
          className="shape shape-1 absolute top-10 left-1/2 transform -translate-x-1/2"
        />

        <img
          src="../src/static/img/shape-2.png"
          width="56"
          height="74"
          alt="Vector Shape"
          className="shape shape-2 absolute top-20 right-10"
        />

        <img
          src="../src/static/img/shape-3.png"
          width="57"
          height="72"
          alt="Vector Shape"
          className="shape shape-3 absolute bottom-20 left-2/5"
        />

        <div className="hero-content text-center md:text-left md:w-1/2 md:pr-10 lg:pr-20">
          <p className="section-subtitle text-mikado-yellow">
            Explore Your Travel
          </p>

          <h2 className="hero-title text-oxford-blue text-3xl md:text-4xl lg:text-5xl">
            Trusted Travel Agency
          </h2>

          <p className="hero-text text-black-coral text-lg md:text-xl lg:text-2xl">
            I travel not to go anywhere, but to go. I travel for travel`s sake
            the great affair is to move.
          </p>

          <div className="btn-group mt-4 md:mt-6 lg:mt-8">
            <a href="#" className="btn btn-primary mr-4 md:mr-6">
              Contact Us
            </a>
            <a href="#" className="btn btn-outline">
              Learn More
            </a>
          </div>
        </div>

        <figure className="hero-banner md:w-1/2">
          <img
            src="./assets/images/hero-banner.png"
            width="686"
            height="812"
            loading="lazy"
            alt="hero banner"
            className="w-full"
          />
        </figure>
      </div>
    </section>
  );
};

export default HeroSection;
