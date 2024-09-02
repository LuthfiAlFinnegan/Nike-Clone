import { IoIosGlobe } from "react-icons/io";

export const Footer = () => {
  return (
    <>
      <footer className="mt-10 h-[543.667px] space-y-16 px-[1.2rem] py-20 lg:px-12">
        <div className="w-full border-t border-[#E7E7E7]"></div>
        <div className="justify-between md:flex">
          <nav className="flex w-[282px] flex-col text-sm font-semibold text-[#707072]">
            <h6 className="text-md mb-6 text-black">Resources</h6>
            <div className="hidden flex-col space-y-4 md:flex">
              <a>Find A Store</a>
              <a>Become A Member</a>
              <a>Student Discounts</a>
              <a>Send Us Feedback</a>
            </div>
          </nav>
          <nav className="flex w-[282px] flex-col text-sm font-semibold text-[#707072]">
            <h6 className="text-md mb-6 text-black">Help</h6>
            <div className="hidden flex-col space-y-4 md:flex">
              <a>Get Help</a>
              <a>Order Status</a>
              <a>Delivery</a>
              <a>Returns</a>
              <a>Payment Options</a>
              <a>Contact Us</a>
            </div>
          </nav>
          <nav className="flex w-[282px] flex-col text-sm font-semibold text-[#707072]">
            <h6 className="text-md mb-6 text-black">Company</h6>
            <div className="hidden flex-col space-y-4 md:flex">
              <a>About Nike</a>
              <a>News</a>
              <a>Careers</a>
              <a>Investors</a>
              <a>Sustainability</a>
            </div>
          </nav>
          <span className="flex h-fit w-[282px] items-center space-x-2 text-[#707072] md:justify-end">
            <IoIosGlobe className="text-xl" />
            <p>Indonesia</p>
          </span>
        </div>
        <div className="flex flex-col space-y-4 pb-20 text-sm font-semibold text-[#707072] md:flex-row md:space-x-6 md:space-y-0">
          <p>© 2024 Nike, Inc. All rights reserved</p>
          <div>Guides</div>
          <a>Terms of Sale</a>
          <a>Terms of Use</a>
          <a>Nike Privacy Policy</a>
        </div>
      </footer>
    </>
  );
};
