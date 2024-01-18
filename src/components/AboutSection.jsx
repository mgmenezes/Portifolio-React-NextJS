"use client";
import { React, useState, useTransition } from "react";
import Image from "next/image";
import AboutImage from "../../public/aboutSectionImg.png";
import TabButton from "./TabButton";
import { TAB_DATA } from "../dev/tabData";

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image alt="about-image" src={AboutImage} width={600} height={600} />
        <div>
          <h2 className="text-4xl font-bold mb-4 justify-center pt-3">
            About Me
          </h2>
          <p className="text-base lg:text-lg">
            I&apos;m a software engineer experience in both small and large tech
            companies. Specializing in Front End development, I&apos;ve honed
            solid expertise. As a self-taught individual, I&apos;m persistent,
            love challenges, and thrive in team environments, always open to
            change.
          </p>
          <div className="flex flex-row mt-8">
            <TabButton
              selectTab={() => {
                handleTabChange("skills");
              }}
              active={tab == "skills"}
            >
              Skill
            </TabButton>
            <TabButton
              selectTab={() => {
                handleTabChange("education");
              }}
              active={tab == "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => {
                handleTabChange("experience");
              }}
              active={tab == "experience"}
            >
              Experience
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((element) => element.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
