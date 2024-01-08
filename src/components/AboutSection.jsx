import React from "react";
import Image from "next/image";
import AboutImage from "../../public/aboutSectionImg.png";
import BasicTab from "../ui/BasicTab";

const AboutSection = () => {
  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src={AboutImage} width={500} height={500} />
        <div>
          <h2 className="text-4xl font-bold mb-4 justify-center pt-3">
            About Me
          </h2>
          <p className="text-base lg:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At, porro
            eaque suscipit vitae eveniet officiis laboriosam eum facilis
            provident voluptatum assumenda, veritatis consectetur, cum
            distinctio reiciendis dolorem. Culpa, iure labore?
          </p>
          <div className="flex flex-row mt-8">
            {/* <span className="mr-3 font-semibold text-slate-300  hover:text-white border-b border-gray-400 cursor-pointer">
              Skills
            </span>
            <span>Education</span>
            <span>Experience</span> */}
            <BasicTab />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
