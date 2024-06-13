import Link from "next/link";
import React from "react";
import { FaLinkedin } from "react-icons/fa6";
const Footer: React.FC = () => {
  return (
    <footer className="sticky bottom-0 w-full border-t border-t-foreground/10 p-4 flex justify-center text-center bg-white dark:bg-slate-800">
      <p className="flex flex-row gap-2 items-center">
        Developed by{" "}
        <Link
          href="https://www.linkedin.com/in/ratchanon-pheungta-6846a9229"
          target="_blank"
          className="font-bold hover:underline flex flex-row items-center gap-2"
          rel="noreferrer"
        >
          <span className="text-lg">Ratchanon Pheungta</span>
          <FaLinkedin size={22} />
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
