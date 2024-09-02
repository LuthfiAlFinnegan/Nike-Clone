import womenPegasus from "../assets/women-pegasus.png";
import menPegasus from "../assets/men-pegasus.png";
import nikeSb from "../assets/nike-sb.png";
import nikeP from "../assets/nike-p-6000.png";
import nikeAlpha from "../assets/nike-alpha.png";
import airJordan from "../assets/air-jordan.png";
import nikeTc from "../assets/nike-tc.png";
import nikeClub from "../assets/nike-club.png";
import airJordan1 from "../assets/air-jordan-1.jpg";
import runningEssentials from "../assets/running-essentials.avif";
import lifestyleRunning from "../assets/lifestyle-running.jpg";
import cortez from "../assets/cortez-leather.png";
import dunk from "../assets/dunk-low-.png";
import blazer from "../assets/blazer-mid-77-vintage-.png";
import airForce from "../assets/air-force-1-07-.png";
import summer from "../assets/summer.png";

export const AssetImageProduct = () => {
  const newestItems = [
    {
      image: womenPegasus,
      name: "Nike Pegasus 41",
      description: "Women's Road Running Shoes",
      price: "Rp 2,009,000",
    },
    {
      image: menPegasus,
      name: "Nike Pegasus 41",
      description: "Women's Road Running Shoes",
      price: "Rp 2,009,000",
    },
    {
      image: nikeSb,
      name: "Nike SB Zoom Pogo Plus Premium",
      description: "Skate Shoes",
      price: "Rp 1,399,000",
    },
    {
      image: nikeP,
      name: "Nike P-6000",
      description: "Shoes",
      price: "Rp 1,429,000",
    },
    {
      image: airJordan,
      name: "Air Jordan XXXVIII Low PF",
      description: "Basketball Shoes",
      price: "Rp 2,949,000",
    },
    {
      image: nikeAlpha,
      name: "Nike Alphafly 3",
      description: "Women's Road Racing Shoes",
      price: "Rp 4,089,000",
    },
    {
      image: nikeTc,
      name: "Nike TC 7900",
      description: "Women's Shoes",
      price: "Rp 1,899,000",
    },
    {
      image: nikeClub,
      name: "Nike Club",
      description: "Men's Coaches Jacket",
      price: "Rp 1,079,000",
    },
  ];

  const featuredItems = [
    {
      image: airJordan1,
      name: "Air Jordan 1",
    },
    {
      image: lifestyleRunning,
      name: "Lifestyle Running Shoes",
    },
    {
      image: runningEssentials,
      name: "Running Essentials",
    },
    {
      image: summer,
      name: "Summer Staples",
    },
  ];

  const classicItems = [
    {
      image: cortez,
      name: "CORTEZ",
    },
    {
      image: dunk,
      name: "DUNK",
    },
    {
      image: blazer,
      name: "BLAZER",
    },
    {
      image: airForce,
      name: "AIR FORCE",
    },
  ];

  return { newestItems, featuredItems, classicItems };
};
