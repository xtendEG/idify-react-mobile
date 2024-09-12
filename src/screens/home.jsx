import React from "react";
import Heading from "../components/common/heading";
import Subheading from "../components/common/subheading";
import id from "../assets/images/home/id.svg";
import primit from "../assets/images/home/primit.svg";
import visa from "../assets/images/home/visa.svg";
import passport from "../assets/images/home/passport.svg";
import family from "../assets/images/home/family-id.svg";
import health from "../assets/images/home/health.svg";
import license from "../assets/images/home/license.svg";
import AccordionItem, { Accordion } from "../components/common/accordion";
import SearchInput from "../components/common/search-input";
export const Home = () => {
  const desc = `Size: The photo should be 4 cm x 6 cm
Color and Background: The photo should be in color, with a white or off-white background. The background should be plain and without any patterns or shadows.
Head Position: The head should be directly facing the camera, with the face fully visible. The head should not be tilted or turned in any direction. Both ears should be visible.
Expression and Eyes: The expression should be neutral, with the mouth closed. The eyes should be open and clearly visible, with no reflections or red-eye effect caused by the camera flash.
Attire: The photo should be taken with the person wearing normal, everyday attire. Hats, headscarves, or other head coverings are not allowed, except for religious purposes. However, the face should be fully visible from the bottom of the chin to the hairline.
Glasses: If the person wears glasses, the eyes should be clearly visible without any reflections. Sunglasses or tinted glasses are not allowed.
Photo Quality: The photo should be of high quality, with good resolution and sharpness. It should not be blurry, grainy, or pixelated.`;
  const services = [
    {
      title: "National ID Card",
      svg: id,
      desc,
    },
    {
      title: "Residence Permit",
      svg: primit,
      desc,
    },
    {
      title: "Passport",
      svg: passport,
      desc,
    },
    {
      title: "Driving License",
      svg: license,
      desc,
    },
    {
      title: "Family ID Card",
      svg: family,
      desc,
    },
    {
      title: "Health Card",
      svg: health,
      desc,
    },
    {
      title: "Visa",
      svg: visa,
      desc,
    },
  ];

  return (
    <div className="font-mona py-10 px-4 pb-[120px]">
      <Heading heading="Home"  />
      <Subheading
        heading="Welcome To Idify!"
        subHeading="Discover your needed template requirements and get started!"
      />
      <SearchInput />
      <div className="mt-5">
        <Accordion>
          {services.map((service) => (
            <AccordionItem
              key={service.title}
              content={service.desc}
              titleSection={
                <div className="flex items-center gap-4">
                  <div className="w-[26px] h-[26px] rounded-full bg-[#EFFFF8] flex items-center justify-center">
                    <img src={service.svg} alt="" />
                  </div>
                  <h2 className="text-[14px] font-medium">{service.title}</h2>
                </div>
              }
            />
          ))}
        </Accordion>
      </div>
    </div>
  );
};
