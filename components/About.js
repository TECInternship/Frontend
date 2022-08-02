import React from "react";
import SwiperCard from "../components/SwiperCard";

const About = () => {
  return (
    <>
      <section className="mb-32">
        <h1 className="text-4xl lg:text-5xl mb-5 font-Willywonka">
          TEC{"\u00a0\u00a0"}Internship
        </h1>
        <p className="lg:text-2xl px-3 py-5 justify-center relative z-10 bg-gradient bg-gradient-to-br from-gray-300 to-transparent bg-opacity-20 rounded-lg shadow-2xl card border">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          fermentum ex nibh, sed varius turpis pellentesque viverra. Praesent
          sollicitudin finibus odio, nec aliquet nunc sagittis sed. Mauris
          venenatis ante et dolor facilisis, vel sagittis metus vulputate.
          Pellentesque at fermentum purus. Donec rhoncus lectus nec leo
          imperdiet consequat.
        </p>
      </section>

      <section className="flex flex-col items-center mb-32">
        <h1 className="text-4xl lg:text-5xl mb-5 font-Willywonka">
          What{"\u00a0\u00a0"}We{"\u00a0\u00a0"}Do?
        </h1>
        <SwiperCard />
      </section>

      <section className="flex flex-col items-center mb-32">
        <h1 className="text-4xl lg:text-5xl mb-5 font-Willywonka">
          What{"\u00a0\u00a0"}You{"\u00a0\u00a0"}Will{"\u00a0\u00a0"}Get?
        </h1>
      </section>

      <section className="flex flex-col items-center mb-32">
        <h1 className="text-4xl lg:text-5xl mb-5 font-Willywonka">
          TEC{"\u00a0\u00a0"}Alumni
        </h1>
      </section>
    </>
  );
};

export default About;
