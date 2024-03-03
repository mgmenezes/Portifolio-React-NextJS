import React from "react";
import { GithubIcon, LinkedinIcon, LucideLinkedin } from "lucide-react";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { LinkedIn } from "@mui/icons-material";
import Link from "next/link";

const EmailSections = () => {
  const linkedinLink =
    "https://www.linkedin.com/in/moises-de-menezes-8ab47a157/";
  const githubLink = "https://github.com/mgmenezes";
  return (
    <section className="grid grid-cols-2 my-12 md:mt-12 py-24 gap-4">
      <div>
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          Currently working in projects
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href={linkedinLink}>
            <LinkedIn />
          </Link>
          <Link href={githubLink}>
            <GithubIcon />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col gap-4">
          <label
            htmlFor="email"
            className="text-white block  mb-2 text-sm font-medium"
          >
            Your Email
          </label>
          <input
            className="bg-[#18191E] border border-[#33353F] placeholder-[#92C2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            type="email"
            id="email"
            required
            placeholder="johndoe@mail.com"
          />
          <label
            htmlFor="email"
            className="text-white block  mb-2 text-sm font-medium"
          >
            Subject
          </label>
          <input
            className="bg-[#18191E] border border-[#33353F] placeholder-[#] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            type="text"
            id="subject"
            required
            placeholder="Just say hello"
          />
        </form>
        <div className="flex flex-col gap-4">
          <label
            htmlFor="email"
            className="text-white block mb-2 mt-4 text-sm font-medium"
          >
            Message
          </label>
          <textarea
            className="bg-[#18191E] border  border-[#33353F] placeholder-[#] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            placeholder="Lets talk about"
            name="Text"
            id="message"
          ></textarea>
          <button className=" text-white font-medium border border-blue-500 rounded-lg py-2 w-full bg-blue-500 hover:bg-blue-400 transition-transform">
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
};

export default EmailSections;
