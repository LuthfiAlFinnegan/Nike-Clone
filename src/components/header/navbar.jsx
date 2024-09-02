import jordan from "../../assets/jordan.png";
import nike from "../../assets/nike.png";
import { CiSearch } from "react-icons/ci";
import { MdFavoriteBorder } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";
import { RxPerson } from "react-icons/rx";

import { PiBagThin } from "react-icons/pi";

export const Navbar = () => {
  return (
    <>
      <section className="">
        <div className="hidden h-[36px] grid-flow-col items-center justify-between bg-[#F5F5F5] lg:grid lg:px-12">
          <div className="w-[24px]">
            <img src={jordan} alt="" />
          </div>
          <ul className="flex space-x-3 divide-black pr-2 text-[12px] font-semibold">
            <li>Find a Store</li>
            <div className="font-thin">|</div>
            <li>Help</li>
            <div className="font-thin">|</div>
            <li>Join Us</li>
            <div className="font-thin">|</div>
            <li>Sign In</li>
          </ul>
        </div>
        {/* SECOND NAV */}
        <div className="flex h-[60px] items-center justify-between px-[1.2rem] lg:px-12">
          <div className="w-[59px]">
            <img src={nike} alt="" />
          </div>
          <div className="flex items-center">
            <ul className="hidden w-[647.333px] justify-center space-x-6 font-semibold lg:flex">
              <li>New & Featured</li>
              <li>Men</li>
              <li>Women</li>
              <li>Kids</li>
              <li>Sale</li>
              <li>Customise</li>
              <li>SNKRS</li>
            </ul>
            <div className="flex items-center space-x-4">
              <div className="flex h-[36px] items-center space-x-1 rounded-full bg-[#F5F5F5] text-[#707072] hover:bg-[#E5E5E5] lg:w-[168px]">
                <CiSearch className="h-[34px] w-[34px] rounded-full bg-[#F5F5F5] px-1 text-black hover:bg-[#bbbbbb]" />
                <p className="hidden font-semibold lg:block">Search</p>
              </div>
              <MdFavoriteBorder className="hidden h-[26px] w-[26px] font-thin md:block" />
              <RxPerson className="h-[26px] w-[26px] md:hidden" />
              <PiBagThin className="h-[26px] w-[26px]" />
              <AiOutlineMenu />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
