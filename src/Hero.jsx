import heroImg from "./assets/hero.svg";

const Hero = () => {
  return (
    <section className="bg-white min-h-[40vh] flex items-center justify-center px-6 py-16">
      <div className="max-w-7xl w-full grid gap-8 md:grid-cols-2 items-center">
        {/* Text Section */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 capitalize">
            Contentful CMS
          </h1>
          <p className="mt-4 text-gray-600 leading-relaxed max-w-lg">
            Single-origin coffee deep v sus small batch. Gorpcore vape
            lumbersexual normcore four dollar toast drinking vinegar. Twee 90's
            taiyaki small batch bitters, bespoke jianbing leggings marxism
            keytar pabst adaptogen mixtape tumblr stumptown. DSA twee iceland
            tacos swag tote bag. Solarpunk man bun fingerstache retro pinterest.
          </p>
        </div>
        
        {/* Image Section */}
        <div className="hidden md:block">
          <img src={heroImg} alt="woman and the browser" className="w-full max-w-md mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
