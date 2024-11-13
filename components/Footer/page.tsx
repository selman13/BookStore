import React from "react";
import Logo from "../common/Logo";
import Text from "../common/Text";
import SocialMedia from "../common/SocialMedia";

const Footer = () => {
  return (
    <div className="bg-red-800 text-white flex flex-col md:flex-row justify-between items-start md:items-center p-5">
      <div className="flex flex-col gap-3">
        <Logo />
        <Text />
      </div>
      <SocialMedia/>
    </div>
  );
};

export default Footer;
