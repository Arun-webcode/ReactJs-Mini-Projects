import React from "react";

import {
  fbImg,
  instaImg,
  whatsappImg,
  linkedinImg,
  gmailImg,
} from "./static/Images";

const sections = [
  {
    title: "Solutions",
    items: ["Marketing", "Analytics", "Commerce", "Data", "Cloud"],
  },
  {
    title: "Support",
    items: ["Pricing", "Documentation", "Guides", "API Status"],
  },
  {
    title: "Company",
    items: ["About", "Blog", "Jobs", "Press", "Partners"],
  },
  {
    title: "Legal",
    items: ["Claims", "Privacy", "Terms", "Policies", "Conditions"],
  },
];

const items = [
  { name: "Facebook", icon: fbImg, link: "https://www.facebook.com/" },
  { name: "Instagram", icon: instaImg, link: "https://www.instagram.com/" },
  { name: "Twitter", icon: linkedinImg, link: "https://twitter.com/" },
  { name: "Twitch", icon: whatsappImg, link: "https://www.twitch.tv/" },
  { name: "Github", icon: gmailImg, link: "https://github.com/" },
];

const Footer = () => {
  return (
    <div className="w-full mt-24 bg-slate-900 text-gray-300 py-y px-0">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8">
        {sections.map((section, index) => (
          <div key={index}>
            <h6 className="font-bold uppercase pt-2">{section.title}</h6>
            <ul>
              {section.items.map((item, i) => (
                <li key={i} className="py-1 text-gray-500 hover:text-white">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="col-span-2 pt-8 md:pt-2">
          <p className="font-bold uppercase">Thanks for choose MRTT</p>
          <p className="py-4">Subscibe us for more offers regard travelling</p>
          <form className="flex flex-col sm:flex-row">
            <input
              className="w-full p-2 mr-4 rounded-md mb-4"
              type="email"
              placeholder="Enter email.."
            />
            <button className="p-2 mb-4">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500">
        <p className="py-4">© 2024, designed and developed by Kapil and Ravi</p>
        <div className="flex justify-between sm:w-[300px] pt-4 text-2xl">
          {items.map((item, index) => {
            return (
              <img
                key={index}
                src={item.icon}
                className="hover:text-white h-7"
                alt={item.name}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
