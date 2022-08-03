import React from "react";
import SwiperCard from "../components/SwiperCard";
import Card from "./Card";

const About = () => {
  return (
    <>
      <section className="flex flex-col items-center mb-32">
        <h1 className="text-4xl lg:text-5xl mb-5 font-Willywonka">
          Who{"\u00a0\u00a0"}Are{"\u00a0\u00a0"}We?
        </h1>
        <p className="lg:text-2xl px-3 py-5 justify-center relative z-10 bg-gradient bg-gradient-to-br from-gray-300 to-transparent bg-opacity-20 rounded-lg shadow-2xl card border md:w-3/4">
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

      <section className="flex flex-col items-center justify-center mb-32">
        <h1 className="text-4xl lg:text-5xl mb-5 font-Willywonka">
          What{"\u00a0\u00a0"}You{"\u00a0\u00a0"}Will{"\u00a0\u00a0"}Get?
        </h1>
        <div className="flex flex-col gap-4 sm:flex-row w-2/5 md:gap-20 sm:w-2/3 lg:w-1/2 justify-items-center text-base italic text-center lg:text-xl">
          <div className="">
            <Card Content={<img className=" mb-4" src="/knowledge.png" />} />
            <h2 className="">Business Knowledge</h2>
          </div>
          <div className="">
            <Card Content={<img className=" mb-4" src="/handson.png" />} />
            <h2 className="">Hands On Business</h2>
          </div>
          <div className="">
            <Card Content={<img className=" mb-4" src="/networking.png" />} />
            <h2 className="">Networking</h2>
          </div>
        </div>
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
