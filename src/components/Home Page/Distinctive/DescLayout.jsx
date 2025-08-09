import React from "react";
import Slider from "../Carousel/Slider";
import FullLogo from "../../Fulllogo";

const DescLayout = ({ desc }) => {
  if (!desc) {
    return null;
  }

  const slides = desc.img.map((image) => ({ image }));

  return (
    <div className="w-full relative h-[70vh]">
      <div className="w-[55%] border-2 border-gray-500 rounded-lg h-full border-l-0 rounded-tl-none rounded-bl-none absolute left-0 top-0">
        <div className="w-[calc(100vw*0.45)] p-4 flex flex-col items-center justify-center gap-4">
            <FullLogo isFlex={false}/>
          {/* <p className="text-center w-full p-2">{desc.desc}</p> */}
          <p className="text-center w-full p-2 text-sm leading-6.5 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ad rem facilis sit. Natus, nisi porro dolor esse doloribus commodi dolores debitis quas facilis consequatur mollitia aliquam nam, atque illum rerum incidunt velit recusandae officiis dolorem animi ex ab labore. Voluptatem asperiores deserunt culpa dicta, quis facere ratione quae et. Praesentium quos mollitia voluptatum nulla porro, accusantium aspernatur tempore doloribus iusto reprehenderit voluptatibus in dignissimos ipsa ut. Labore, laudantium ratione repudiandae natus voluptas nihil fuga commodi tempore architecto eveniet facere?</p>
          <button className="p-3 border-2 border-gray-300 rounded-full mt-2 px-12 ">Know More</button>
        </div>
      </div>
      <div className="w-[50%] h-[65vh] bg-amber-100 z-10 absolute right-0 top-1/2 -translate-y-1/2 rounded-l-lg">
        <div className="_img flex items-center justify-center h-full">
          {slides.length > 1 ? (
            <Slider slides={slides} showDetails={false} classes={"rounded-l-lg"}/>
          ) : (
            <img
              src={slides[0].image}
              alt={desc.name}
              className="w-full h-full object-cover rounded-l-xl"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default DescLayout;
