import React from "react";
import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="px-5 py-5 sm:px-10">
      <div className="screen-max-width">
        <div>
          <p className="text-xs text-gray font-sftext">
            More ways to shop:{" "}
            <span className="underline text-blue">Find an Apple Store</span> or{" "}
            <span className="underline text-blue">other retailer</span> near
            you.
          </p>
          <p className="text-xs text-gray font-sftext">Or call 12345-67890</p>
        </div>
        <div className="bg-neutral-700 my-5 h-[1px] w-full" />

        <div className="flex flex-col justify-between md:flex-row md:items-center">
          <p className="text-xs text-gray font-sftext">
            &copy; 2024 All Rights Reserved
          </p>
          <div className="flex">
            {footerLinks.map((link) => (
              <p
                key={link}
                className="mr-2 text-xs cursor-pointer font-sfdisplay text-gray"
              >
                {link}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
