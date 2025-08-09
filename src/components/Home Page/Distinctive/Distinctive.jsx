import React, { useState } from "react";
import FullLogo from "../../FullLogo";
import DescLayout from "./DescLayout";

const Distinctive = () => {
  const links = [
    { name: "ITC Hotels" },
    { name: "Mementos" },
    { name: "Welcome Hotel" },
    { name: "Story" },
    { name: "Fortune Hotels" },
    { name: "Welcome Heritage Hotels" },
  ];

  const linksDescription = [
    {
      name: "ITC Hotels",
      desc: "ITC Hotels is a luxury hotel chain in India, known for its opulent accommodations and exceptional service.",
      img: [
        "https://www.itchotels.com/content/dam/itchotels/in/umbrella/images/brands-desktop/itc-maurya.png",
        "https://www.itchotels.com/content/dam/itchotels/in/umbrella/images/brands-desktop/itc-grand-goa.png",
        "https://www.itchotels.com/content/dam/itchotels/in/umbrella/images/brands-desktop/itc-gardenia.png",
      ],
    },
    {
      name: "Mementos",
      desc: "Mementos is a collection of boutique hotels that offer unique experiences and personalized service.",
      img: [
        "https://www.itchotels.com/content/dam/itchotels/in/umbrella/images/brands-desktop/memento-2.jpg",
        "https://www.itchotels.com/content/dam/itchotels/in/umbrella/images/brands-desktop/memento-1.jpg",
      ],
    },
    {
      name: "Welcome Hotel",
      desc: "Welcome Hotels are known for their warm hospitality and comfortable stays across various locations.",
      img: [
        "https://www.itchotels.com/content/dam/itchotels/in/umbrella/images/brands-desktop/welcomhotel-pin-n-peak.png",
        "https://www.itchotels.com/content/dam/itchotels/in/umbrella/images/brands-desktop/welcomhotel-amritsar.png",
        "https://www.itchotels.com/content/dam/itchotels/in/umbrella/images/brands-desktop/welcomhotel-pin-n-peak.png",
      ],
    },
    {
      name: "Story",
      desc: "Story Hotels provide a narrative-driven experience, blending local culture with modern luxury.",
      img: [
        "https.www.itchotels.com/content/dam/itchotels/in/umbrella/images/brands-desktop/storii-ii.jpg",
        "https://www.itchotels.com/content/dam/itchotels/in/umbrella/images/brands-desktop/storii-i.jpg",
        "https://www.itchotels.com/content/dam/itchotels/in/umbrella/images/brands-desktop/storii-iii.jpg",
      ],
    },
    {
      name: "Fortune Hotels",
      desc: "Fortune Hotels offer affordable luxury with a focus on comfort and convenience.",
      img: [
        "https://www.itchotels.com/content/dam/itchotels/in/umbrella/images/brands-desktop/fortune-jp-palace-mysore-facade.png",
      ],
    },
    {
      name: "Welcome Heritage Hotels",
      desc: "Welcome Heritage Hotels showcase India's rich heritage through their architecture and services.",
      img: [
        "https://www.itchotels.com/content/dam/itchotels/in/umbrella/images/brands-desktop/welcomheritage-mohanghar-fort.jpg",
      ],
    },
  ];

  const [selectedLink, setSelectedLink] = useState(linksDescription[0]);

  const handleLinkClick = (linkName) => {
    const selected = linksDescription.find((desc) => desc.name === linkName);
    setSelectedLink(selected);
  };

  return (
    <div className="w-full py-12 pb-20 m-auto flex flex-col items-center justify-center gap-4">
      {/* logo */}
      <FullLogo isFlex={true}/>
      {/* desc*/}
      <div className="w-[80%] text-center">
        <p className="">
          With over 140+ hotels in 90+ destinations across six vibrant brands,
          ITC Hotels Limited integrates India's renowned tradition of
          hospitality and warmth, with globally benchmarked facilities &
          services.
        </p>
      </div>
      {/* title */}
      <div className="text-4xl font-bold text-center">
        <h1 className="">Distinctive, distinguished brands</h1>
      </div>

      {/* links */}
      <div className="_links flex flex-wrap items-center justify-center gap-8 text-lg">
        {links.map((link, index) => (
          <a
            key={index}
            // href="#"
            className={`px-4 py-2 cursor-pointer ${selectedLink.name === link.name ? "border-b-2 border-gray-500" : ""}`}
            onClick={() => handleLinkClick(link.name)}
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* description layout */}
      <DescLayout desc={selectedLink} />
    </div>
  );
};

export default Distinctive;
