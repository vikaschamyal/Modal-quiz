// src/Sidebar.jsx
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { GiHand } from "react-icons/gi"; // Optional hand icon

const links = [
  {
    id: 1,
    name: "GitHub",
    icon: <FaGithub size={20} />,
    href: "https://github.com/vikaschamyal",
    bg: "bg-gray-800",
  },
  {
    id: 2,
    name: "LinkedIn",
    icon: <FaLinkedin size={20} />,
    href: "https://www.linkedin.com/in/vikas-chamyal24/",
    bg: "bg-blue-700",
  },
  {
    id: 3,
    name: "Twitter",
    icon: <FaTwitter size={20} />,
    href: "https://twitter.com",
    bg: "bg-blue-500",
  },
];

const Sidebar = () => {
  return (
    <div className="fixed top-1/3 left-0 z-50">
      <ul>
        {links.map(({ id, name, icon, href, bg }) => (
          <li
            key={id}
            className={`group flex items-center justify-between w-44 hover:ml-0 ml-[-130px] transition-all duration-500 ${bg} text-white p-2 rounded-r-full mb-3 shadow-md`}
          >
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center w-full justify-between"
            >
              <span className="flex items-center gap-2">
                {icon} {name}
              </span>
              {/* Hand Icon pops out on hover */}
              <GiHand
                size={24}
                className="ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500"
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
