import Link from "next/link";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/solid";
import React from "react";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818]  bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          <Link
            className="h-14 w-14 border-2 mr-2 relative rounded-full border-[#ADB7BA] hover:border-white"
            href={gitUrl}
          >
            <CodeBracketIcon className="h-10 w-10 absolute text-gray-400 cursor-pointer transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:text-white" />
          </Link>
          <Link
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BA] hover:border-white"
            href={gitUrl}
          >
            <EyeIcon className="h-10 w-10 absolute text-gray-400 cursor-pointer transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:text-white" />
          </Link>
        </div>
      </div>

      <div className="text-white mt-2 rounded-b-xl bg-[#181818] py-6 px-4">
        <h5 className="text-2xl font-semibold mb-4 justify-center pt-3">
          {title}
        </h5>
        <p className="text-[#ADB7BE] lg:text-lg">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
